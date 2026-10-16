#!/usr/bin/env node
/**
 * Builds the offline vector map of Walt Disney World used by The Amazing Mouse Race.
 *
 *   node tools/build-wdw-map.mjs            -> writes wdw-map.json (+ vendor/maplibre-gl.js and .css)
 *   node tools/build-wdw-map.mjs --no-vendor      skip downloading MapLibre
 *   node tools/build-wdw-map.mjs --out some.json  choose the output file
 *   node tools/build-wdw-map.mjs --input dump.json  convert a saved Overpass response instead of downloading
 *
 * Needs Node 18+ (built-in fetch) and an internet connection. Run it once, commit the files it writes
 * next to index.html, and re-run only when you want fresher OpenStreetMap data.
 *
 * Data (c) OpenStreetMap contributors, ODbL. The app shows the attribution on every map.
 */
import fs from 'node:fs';
import path from 'node:path';

// ---- Area covered. Keep in sync with WDW_BOUNDS in index.html ----
export const BBOX = { s: 28.335, w: -81.625, n: 28.435, e: -81.500 };
const MAPLIBRE_VERSION = '4.7.1';
const MIRRORS = [
  'https://overpass-api.de/api/interpreter',
  'https://overpass.kumi.systems/api/interpreter',
  'https://overpass.private.coffee/api/interpreter',
];

// ---------------------------------------------------------------- Overpass queries
const bb = `${BBOX.s},${BBOX.w},${BBOX.n},${BBOX.e}`;
const QUERIES = [
  { name: 'water & land areas', clip: false, q: `(
      way["natural"~"^(water|wood|scrub|grassland|wetland)$"](${bb});
      relation["natural"~"^(water|wood|scrub|grassland|wetland)$"](${bb});
      way["landuse"~"^(reservoir|forest|grass|meadow|recreation_ground|village_green)$"](${bb});
      relation["landuse"~"^(reservoir|forest|grass|meadow|recreation_ground|village_green)$"](${bb});
      way["leisure"~"^(park|garden|golf_course|nature_reserve|water_park)$"](${bb});
      relation["leisure"~"^(park|garden|golf_course|nature_reserve|water_park)$"](${bb});
      way["tourism"~"^(theme_park|zoo)$"](${bb});
      relation["tourism"~"^(theme_park|zoo)$"](${bb});
    );` },
  { name: 'buildings', clip: false, q: `way["building"](${bb});` },
  { name: 'roads & paths', clip: true, q: `way["highway"](${bb});` },
  { name: 'rail, monorail, gondola, ferry, waterways', clip: true, q: `(
      way["railway"~"^(rail|narrow_gauge|light_rail|miniature|monorail)$"](${bb});
      way["aerialway"~"^(gondola|cable_car)$"](${bb});
      way["route"="ferry"](${bb});
      relation["route"="ferry"](${bb});
      way["waterway"~"^(river|stream|canal)$"](${bb});
    );` },
  { name: 'places', clip: false, q: `(
      node["tourism"~"^(theme_park|hotel|resort|attraction|zoo)$"]["name"](${bb});
      way["tourism"~"^(hotel|resort|attraction)$"]["name"](${bb});
      node["aerialway"="station"]["name"](${bb});
      node["railway"="station"]["name"](${bb});
      node["public_transport"="station"]["name"](${bb});
      node["amenity"="ferry_terminal"]["name"](${bb});
    );` },
];

async function runQuery(def) {
  const body = `[out:json][timeout:240];${def.q}out geom${def.clip ? `(${bb})` : ''};`;
  let lastErr;
  for (let attempt = 0; attempt < 6; attempt++) {
    const url = MIRRORS[attempt % MIRRORS.length];
    try {
      const res = await fetch(url, {
        method: 'POST',
        headers: { 'content-type': 'application/x-www-form-urlencoded', 'user-agent': 'amazing-mouse-race-map-builder/1.0' },
        body: 'data=' + encodeURIComponent(body),
      });
      if (!res.ok) throw new Error(`${url} answered HTTP ${res.status}`);
      const json = await res.json();
      return json.elements || [];
    } catch (e) {
      lastErr = e;
      console.warn(`  retrying (${e.message})`);
      await new Promise(r => setTimeout(r, 2500 * (attempt + 1)));
    }
  }
  throw lastErr;
}

// ---------------------------------------------------------------- geometry helpers
const rnd = v => Math.round(v * 1e5) / 1e5;                       // ~1 m
const pt = g => [rnd(g.lon), rnd(g.lat)];
const same = (a, b) => a[0] === b[0] && a[1] === b[1];

/** Overpass leaves null entries where a clipped way leaves the box: split into runs of real points. */
function runs(geometry) {
  const out = []; let cur = [];
  for (const g of geometry || []) {
    if (g && Number.isFinite(g.lat) && Number.isFinite(g.lon)) { const p = pt(g); if (!cur.length || !same(cur[cur.length - 1], p)) cur.push(p); }
    else { if (cur.length > 1) out.push(cur); cur = []; }
  }
  if (cur.length > 1) out.push(cur);
  return out;
}

function simplify(points, eps) {                                  // Douglas-Peucker (iterative)
  if (points.length < 3) return points;
  const keep = new Uint8Array(points.length); keep[0] = keep[points.length - 1] = 1;
  const stack = [[0, points.length - 1]];
  while (stack.length) {
    const [a, b] = stack.pop();
    let max = 0, idx = -1;
    const [ax, ay] = points[a], [bx, by] = points[b];
    const dx = bx - ax, dy = by - ay, len2 = dx * dx + dy * dy;
    for (let i = a + 1; i < b; i++) {
      const [px, py] = points[i];
      let d;
      if (len2 === 0) d = Math.hypot(px - ax, py - ay);
      else { const t = Math.max(0, Math.min(1, ((px - ax) * dx + (py - ay) * dy) / len2)); d = Math.hypot(px - (ax + t * dx), py - (ay + t * dy)); }
      if (d > max) { max = d; idx = i; }
    }
    if (max > eps && idx > 0) { keep[idx] = 1; stack.push([a, idx], [idx, b]); }
  }
  return points.filter((_, i) => keep[i]);
}

const signedArea = ring => { let s = 0; for (let i = 0, j = ring.length - 1; i < ring.length; j = i++) s += (ring[j][0] * ring[i][1]) - (ring[i][0] * ring[j][1]); return s / 2; };
function areaM2(ring) {                                           // rough, good enough to rank features
  const lat0 = ring[0][1] * Math.PI / 180, kx = 111320 * Math.cos(lat0), ky = 110540;
  return Math.abs(signedArea(ring.map(([x, y]) => [x * kx, y * ky])));
}
function centroid(ring) {
  let x = 0, y = 0; const n = ring.length - (same(ring[0], ring[ring.length - 1]) ? 1 : 0);
  for (let i = 0; i < n; i++) { x += ring[i][0]; y += ring[i][1]; }
  return [rnd(x / n), rnd(y / n)];
}
function pointInRing([x, y], ring) {
  let inside = false;
  for (let i = 0, j = ring.length - 1; i < ring.length; j = i++) {
    const [xi, yi] = ring[i], [xj, yj] = ring[j];
    if ((yi > y) !== (yj > y) && x < (xj - xi) * (y - yi) / (yj - yi) + xi) inside = !inside;
  }
  return inside;
}
const orient = (ring, ccw) => ((signedArea(ring) > 0) === ccw ? ring : ring.slice().reverse());

/** Join way fragments end-to-end into closed rings. */
function stitch(fragments) {
  const pool = fragments.filter(f => f.length > 1).map(f => f.slice()), rings = [];
  while (pool.length) {
    let ring = pool.pop();
    while (!same(ring[0], ring[ring.length - 1])) {
      const end = ring[ring.length - 1]; let found = -1, rev = false;
      for (let i = 0; i < pool.length; i++) {
        if (same(pool[i][0], end)) { found = i; break; }
        if (same(pool[i][pool[i].length - 1], end)) { found = i; rev = true; break; }
      }
      if (found < 0) break;
      const w = pool.splice(found, 1)[0]; if (rev) w.reverse();
      ring = ring.concat(w.slice(1));
    }
    if (ring.length >= 4 && same(ring[0], ring[ring.length - 1])) rings.push(ring);
  }
  return rings;
}

// ---------------------------------------------------------------- classification
function areaKind(t) {
  if (t.natural === 'water' || t.landuse === 'reservoir' || t.waterway === 'riverbank') return { k: 'water' };
  if (t.tourism === 'theme_park' || t.tourism === 'zoo' || t.leisure === 'water_park') return { k: 'park', c: 'theme' };
  if (t.leisure === 'golf_course') return { k: 'green', c: 'golf' };
  if (t.leisure === 'park' || t.leisure === 'garden' || t.leisure === 'nature_reserve') return { k: 'green', c: 'park' };
  if (t.natural === 'wood' || t.natural === 'scrub' || t.landuse === 'forest') return { k: 'green', c: 'wood' };
  if (t.natural === 'wetland') return { k: 'green', c: 'wetland' };
  if (t.natural === 'grassland' || ['grass', 'meadow', 'recreation_ground', 'village_green'].includes(t.landuse)) return { k: 'green', c: 'grass' };
  return null;
}
const MAJOR = new Set(['motorway', 'motorway_link', 'trunk', 'trunk_link', 'primary', 'primary_link']);
const MINOR = new Set(['secondary', 'secondary_link', 'tertiary', 'tertiary_link', 'unclassified', 'residential', 'living_street']);
const SERVICE = new Set(['service', 'track', 'road']);
const PATH = new Set(['footway', 'path', 'pedestrian', 'cycleway', 'steps', 'bridleway']);
function lineKind(t) {
  if (t.railway === 'monorail') return { k: 'monorail' };
  if (['rail', 'narrow_gauge', 'light_rail', 'miniature'].includes(t.railway)) return { k: 'rail' };
  if (t.aerialway === 'gondola' || t.aerialway === 'cable_car') return { k: 'gondola' };
  if (t.route === 'ferry') return { k: 'ferry' };
  if (['river', 'stream', 'canal'].includes(t.waterway)) return { k: 'waterway' };
  const h = t.highway;
  if (!h || t.tunnel === 'yes' || t.area === 'yes') return null;
  if (MAJOR.has(h)) return { k: 'road', c: 'major' };
  if (MINOR.has(h)) return { k: 'road', c: 'minor' };
  if (SERVICE.has(h)) return ['parking_aisle', 'driveway', 'drive-through'].includes(t.service) ? null : { k: 'road', c: 'service' };
  if (PATH.has(h)) return (t.footway === 'sidewalk' || t.footway === 'crossing' || t.footway === 'traffic_island') ? null : { k: 'path' };
  return null;
}
function placeKind(t, area) {
  if (t.tourism === 'theme_park' || t.tourism === 'zoo') return { c: 'park', z: 11 };
  if (t.tourism === 'hotel' || t.tourism === 'resort') return { c: 'resort', z: 14 };
  if (t.aerialway === 'station' || t.railway === 'station' || t.public_transport === 'station' || t.amenity === 'ferry_terminal') return { c: 'station', z: 14.5 };
  if (t.tourism === 'attraction') return { c: 'attraction', z: 15.5 };
  if (t.natural === 'water' || t.landuse === 'reservoir') { if (area >= 300000) return { c: 'water', z: 12.5 }; if (area >= 20000) return { c: 'water', z: 14.5 }; return null; }
  if (t.leisure === 'golf_course') return { c: 'golf', z: 13.5 };
  return null;
}

// ---------------------------------------------------------------- conversion
export function convert(elements) {
  const features = [], places = new Map(), seen = new Set();
  const addPlace = (t, lngLat, area) => {
    if (!t.name) return;
    const pk = placeKind(t, area); if (!pk) return;
    const key = pk.c + '|' + t.name.toLowerCase();
    const prev = places.get(key);
    if (prev && prev.properties.z <= pk.z) return;
    places.set(key, { type: 'Feature', properties: { k: 'poi', c: pk.c, n: t.name, z: pk.z }, geometry: { type: 'Point', coordinates: lngLat } });
  };
  const polygon = (rings, props) => {
    const outers = rings.outers, inners = rings.inners;
    outers.forEach(o => {
      const holes = inners.filter(h => pointInRing(h[0], o));
      features.push({ type: 'Feature', properties: props, geometry: { type: 'Polygon', coordinates: [orient(o, true), ...holes.map(h => orient(h, false))] } });
    });
  };

  for (const el of elements) {
    const t = el.tags || {};
    const uid = el.type + el.id;
    if (seen.has(uid)) continue; seen.add(uid);

    if (el.type === 'node') {
      if (Number.isFinite(el.lat)) addPlace(t, [rnd(el.lon), rnd(el.lat)], 0);
      continue;
    }

    // ---- buildings (closed ways only)
    if (el.type === 'way' && t.building) {
      const r = runs(el.geometry)[0];
      if (r && r.length >= 4 && same(r[0], r[r.length - 1]) && areaM2(r) >= 25) {
        const s = simplify(r, 0.000006);
        if (s.length >= 4) features.push({ type: 'Feature', properties: { k: 'building' }, geometry: { type: 'Polygon', coordinates: [orient(s, true)] } });
      }
      if (t.name && (t.tourism === 'hotel' || t.tourism === 'resort' || t.tourism === 'attraction') && r) addPlace(t, centroid(r), areaM2(r));
      continue;
    }

    // ---- areas: water, greens, theme parks
    const ak = areaKind(t);
    if (ak) {
      let outers = [], inners = [];
      if (el.type === 'way') {
        const r = runs(el.geometry)[0];
        if (r && same(r[0], r[r.length - 1]) && r.length >= 4) outers = [r];
      } else if (el.type === 'relation') {
        const frag = role => (el.members || []).filter(m => m.type === 'way' && (role === 'inner' ? m.role === 'inner' : m.role !== 'inner')).flatMap(m => runs(m.geometry));
        outers = stitch(frag('outer')); inners = stitch(frag('inner'));
      }
      if (outers.length) {
        const eps = ak.k === 'water' ? 0.000008 : 0.000012;
        outers = outers.map(o => simplify(o, eps)).filter(o => o.length >= 4);
        inners = inners.map(o => simplify(o, eps)).filter(o => o.length >= 4);
        const area = outers.reduce((s, o) => s + areaM2(o), 0);
        if (area >= 200) {
          polygon({ outers, inners }, ak.c ? { k: ak.k, c: ak.c } : { k: ak.k });
          const big = outers.slice().sort((a, b) => areaM2(b) - areaM2(a))[0];
          addPlace(t, centroid(big), area);
        }
      }
      continue;
    }

    // ---- lines
    const lk = lineKind(t);
    if (lk) {
      const parts = el.type === 'way' ? runs(el.geometry) : (el.members || []).filter(m => m.type === 'way').flatMap(m => runs(m.geometry));
      parts.forEach(p => {
        const s = simplify(p, 0.000005);
        if (s.length >= 2) features.push({ type: 'Feature', properties: lk.c ? { k: lk.k, c: lk.c } : { k: lk.k }, geometry: { type: 'LineString', coordinates: s } });
      });
      continue;
    }

    // ---- named hotels / attractions that are ways but not buildings
    if (el.type === 'way' && t.name) {
      const r = runs(el.geometry)[0];
      if (r) addPlace(t, centroid(r), 0);
    }
  }
  return { type: 'FeatureCollection', features: features.concat([...places.values()]) };
}

// ---------------------------------------------------------------- main
async function download(url, file) {
  const res = await fetch(url);
  if (!res.ok) throw new Error(`${url} answered HTTP ${res.status}`);
  fs.mkdirSync(path.dirname(file), { recursive: true });
  fs.writeFileSync(file, Buffer.from(await res.arrayBuffer()));
  console.log('  wrote', file);
}

async function main() {
  const args = process.argv.slice(2);
  const opt = (name, def) => { const i = args.indexOf(name); return i >= 0 && args[i + 1] ? args[i + 1] : def; };
  const out = opt('--out', 'wdw-map.json');
  let elements = [];

  if (args.includes('--input')) {
    const raw = JSON.parse(fs.readFileSync(opt('--input'), 'utf8'));
    elements = Array.isArray(raw) ? raw.flatMap(r => r.elements || r) : (raw.elements || []);
    console.log(`Read ${elements.length} OSM elements from ${opt('--input')}`);
  } else {
    for (const def of QUERIES) {
      process.stdout.write(`Downloading ${def.name}...\n`);
      const els = await runQuery(def);
      console.log(`  ${els.length} elements`);
      elements = elements.concat(els);
      await new Promise(r => setTimeout(r, 1500));      // be gentle with the public servers
    }
  }

  const fc = convert(elements);
  const counts = {}; fc.features.forEach(f => { counts[f.properties.k] = (counts[f.properties.k] || 0) + 1; });
  fs.writeFileSync(out, JSON.stringify(fc));
  const mb = fs.statSync(out).size / 1048576;
  console.log(`\nWrote ${out}: ${fc.features.length} features, ${mb.toFixed(2)} MB`, counts);
  if (mb > 15) console.warn('That is large. Consider shrinking BBOX or raising the simplify tolerances.');

  if (!args.includes('--no-vendor') && !args.includes('--input')) {
    console.log('\nDownloading MapLibre GL JS ' + MAPLIBRE_VERSION + ' so the app does not depend on a CDN...');
    const base = `https://unpkg.com/maplibre-gl@${MAPLIBRE_VERSION}/dist/`;
    await download(base + 'maplibre-gl.js', path.join(path.dirname(out), 'vendor', 'maplibre-gl.js'));
    await download(base + 'maplibre-gl.css', path.join(path.dirname(out), 'vendor', 'maplibre-gl.css'));
  }
  console.log('\nDone. Commit wdw-map.json and vendor/ next to index.html.');
}

if (import.meta.url === `file://${process.argv[1]}` || process.argv[1]?.endsWith('build-wdw-map.mjs')) {
  main().catch(e => { console.error('\nFailed:', e.message); process.exit(1); });
}
