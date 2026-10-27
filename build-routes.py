#!/usr/bin/env python3
"""Builds wdw-routes.json (the pre-built route network) from wdw-map.json.
Usage: python3 build-routes.py wdw-map.json wdw-routes.json
- walking/vehicle network = roads + paths (edge class 0 = road, 1 = path or a repaired gap), main connected piece only
- fixed lines (monorail, gondola, ferry, rail) each get their own small network
Gaps between dangling line ends and nearby lines are repaired up to JOIN_M metres."""
import json, sys, math, collections

JOIN_M = 50
R = 6371000.0; rad = math.pi / 180

def hav(a, b):
    dl = (b[1] - a[1]) * rad; dg = (b[0] - a[0]) * rad
    h = math.sin(dl / 2) ** 2 + math.cos(a[1] * rad) * math.cos(b[1] * rad) * math.sin(dg / 2) ** 2
    return 2 * R * math.asin(math.sqrt(h))

def proj(p, a, b):
    k = math.cos(p[1] * rad)
    ax, ay = (a[0] - p[0]) * k, a[1] - p[1]; bx, by = (b[0] - p[0]) * k, b[1] - p[1]
    dx, dy = bx - ax, by - ay; L = dx * dx + dy * dy
    t = 0 if L == 0 else max(0, min(1, -(ax * dx + ay * dy) / L))
    pt = (p[0] + (ax + t * dx) / k, p[1] + (ay + t * dy))
    return hav(p, pt), pt

def components(adj):
    seen = {}; n = 0
    for s in adj:
        if s in seen: continue
        st = [s]; seen[s] = n
        while st:
            x = st.pop()
            for y in adj[x]:
                if y not in seen: seen[y] = n; st.append(y)
        n += 1
    return seen, n

def build(features, kinds):
    adj = collections.defaultdict(dict)   # node -> {node: (metres, class)}
    for f in features:
        k = f['properties'].get('k')
        if k in kinds and f['geometry']['type'] == 'LineString':
            cls = 1 if k == 'path' else 0
            cs = [tuple(c) for c in f['geometry']['coordinates']]
            for a, b in zip(cs, cs[1:]):
                if a == b: continue
                w = hav(a, b)
                if b not in adj[a] or adj[a][b][1] > cls: adj[a][b] = (w, cls); adj[b][a] = (w, cls)
    return adj

def join_endpoints(adj, tol):
    for _ in range(3):
        seen, n = components(adj)
        ends = [p for p in adj if len(adj[p]) == 1]
        segs = [(a, b) for a in adj for b in adj[a] if a < b]
        sg = collections.defaultdict(list); cell = 0.0004
        for i, (a, b) in enumerate(segs):
            for cx in range(int(min(a[0], b[0]) / cell) - 1, int(max(a[0], b[0]) / cell) + 2):
                for cy in range(int(min(a[1], b[1]) / cell) - 1, int(max(a[1], b[1]) / cell) + 2):
                    sg[(cx, cy)].append(i)
        for p in ends:
            if p not in adj or len(adj[p]) != 1: continue
            cx, cy = int(p[0] / cell), int(p[1] / cell); best = None
            for dx in (-1, 0, 1):
                for dy in (-1, 0, 1):
                    for i in sg.get((cx + dx, cy + dy), ()):
                        a, b = segs[i]
                        if seen.get(a) == seen.get(p) or a not in adj or b not in adj[a]: continue
                        dd, pt = proj(p, a, b)
                        if dd <= tol and (best is None or dd < best[0]): best = (dd, a, b, pt)
            if best:
                dd, a, b, pt = best; pt = (round(pt[0], 6), round(pt[1], 6))
                if pt not in adj and b in adj[a]:
                    w, c = adj[a].pop(b); adj[b].pop(a)
                    wa, wb = hav(a, pt), hav(pt, b)
                    adj[a][pt] = (wa, c); adj[pt] = {a: (wa, c)}; adj[pt][b] = (wb, c); adj[b][pt] = (wb, c)
                adj[p][pt] = (dd, 1); adj.setdefault(pt, {})[p] = (dd, 1)
    return adj

def pack(adj, keep_main=True):
    if keep_main:
        seen, n = components(adj)
        cnt = collections.Counter(seen.values()); main = cnt.most_common(1)[0][0]
        nodes = [p for p in adj if seen[p] == main]
    else:
        nodes = list(adj)
    nodes.sort(key=lambda p: (round(p[1], 3), p[0]))        # spatially coherent ids
    idx = {p: i for i, p in enumerate(nodes)}
    lat = [round(p[1] * 1e5) for p in nodes]; lng = [round(p[0] * 1e5) for p in nodes]
    off = [0]; to = []; ln = []; cl = []
    for p in nodes:
        for q, (w, c) in adj[p].items():
            if q in idx: to.append(idx[q]); ln.append(max(1, round(w))); cl.append(c)
        off.append(len(to))
    return { 'lat': lat, 'lng': lng, 'off': off, 'to': to, 'len': ln, 'cls': cl }

def main(src, dst):
    d = json.load(open(src)); feats = d['features']
    out = {'v': 1, 'joinM': JOIN_M}
    net = join_endpoints(build(feats, ('road', 'path')), JOIN_M)
    out['net'] = pack(net)
    out['lines'] = {}
    for kind in ('monorail', 'gondola', 'ferry', 'rail'):
        a = build(feats, (kind,))
        if not a: continue
        out['lines'][kind] = pack(join_endpoints(a, JOIN_M), keep_main=False)
    json.dump(out, open(dst, 'w'), separators=(',', ':'))
    for k, v in [('net', out['net'])] + list(out['lines'].items()):
        print(k, 'nodes', len(v['lat']), 'edges', len(v['to']) // 2)

if __name__ == '__main__':
    main(sys.argv[1], sys.argv[2])
