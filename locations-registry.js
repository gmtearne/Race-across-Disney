// ============================================================================
// Location registry. Load this BEFORE the individual location files (locations-wdw.js, locations-coventry.js ...).
// ----------------------------------------------------------------------------
// The hierarchy is   Region  ->  Location (one file each)  ->  Areas (parks / zones)  ->  Stops and bonus challenges.
// Hosts pick a Location first when creating a race; Random, By Area, Pre-set and Manual then only use that location's data.
//
// To add a destination:  1) add a region below if it is new   2) copy locations-wdw.js and fill it in
//                        3) add one <script src="locations-xxx.js"> line in index.html, after this file   4) add the file to sw.js
// A location with no file simply does not appear in the picker.
// ============================================================================

// Order here is the order of the headings in the picker.
window.LOCATION_REGIONS = [
    { id: "florida",    name: "Florida" },
    { id: "california", name: "California" },
    { id: "europe",     name: "Europe" },
    { id: "asia",       name: "Asia" }
];

// Generic wording used whenever a location file has no line of its own. Locations override any of these in their `flavour` block.
window.LOCATION_FLAVOUR_DEFAULT = {
    tagline: "Can your team beat this? Play The Amazing Mouse Race! 🏁",
    flawless: [
        "No wrong answers at all! Absolute geniuses! 🧠✨",
        "Flawless trivia. Smug mode: activated. 😎",
        "Not a single slip. Quizmasters everywhere are nervous. 🏆"
    ],
    // {guess} {question} {answer} are filled in by the app
    roasts: [
        "Oof! You said {guess} for {question}. It was {answer}. Your mates would be ashamed. 🤦",
        "{guess}? Bold. Wrong, but bold. The answer to {question} was {answer}. 😬",
        "You said {guess} with total confidence. It was {answer}. Confidence isn't everything. 🫠",
        "{question} You went for {guess}. It was {answer}. The group chat is going to hear about this. 📱"
    ],
    transitAdvice: "Plan your route to the next stop and check your race rules for which transport is allowed."
};

window.LOCATIONS = window.LOCATIONS || {};     // id -> pack
window.LOCATION_ORDER = window.LOCATION_ORDER || [];
window.DISNEY_PRESETS = window.DISNEY_PRESETS || [];   // every stop and bonus from every pack, each tagged with `loc` (kept under the old name so older code keeps working)

window.registerLocation = function (pack) {
    if (!pack || !pack.id || !pack.name) { console.error("registerLocation: a pack needs an id and a name", pack); return; }
    if (window.LOCATIONS[pack.id]) { console.warn("registerLocation: duplicate id, ignored:", pack.id); return; }
    const areaNames = new Set((pack.areas || []).map(a => a.name));
    const tag = (p, kind) => Object.assign({}, p, { loc: pack.id, kind });
    const stops = (pack.stops || []).map(p => tag(p, "stop"));
    const bonuses = (pack.bonuses || []).map(p => tag(p, "bonus"));
    stops.forEach(p => { if (areaNames.size && !areaNames.has(p.park)) console.warn("[" + pack.id + "] stop '" + p.name + "' has park '" + p.park + "' which is not listed in areas"); });
    pack.presets = stops.concat(bonuses);
    pack.region = pack.region || "europe";
    pack.transit = Object.assign({ modes: [], advice: [], adviceFallback: "", transferRules: [], transferNoun: "stop", transferOther: "Other / not listed", transferPoints: [] }, pack.transit || {});
    pack.flavour = pack.flavour || {};
    pack.features = pack.features || {};
    window.LOCATIONS[pack.id] = pack;
    window.LOCATION_ORDER.push(pack.id);
    window.DISNEY_PRESETS.push.apply(window.DISNEY_PRESETS, pack.presets);
};

// ---------- lookups used by the app ----------
window.locById = (id) => (id && window.LOCATIONS[id]) || null;
window.locList = () => window.LOCATION_ORDER.map(id => window.LOCATIONS[id]);
window.locDefaultId = () => window.LOCATION_ORDER[0] || "";
// Locations grouped for the picker: [{ region, locations: [pack...] }], only regions that have a pack.
window.locGrouped = function () {
    const known = new Set(window.LOCATION_REGIONS.map(r => r.id));
    const groups = window.LOCATION_REGIONS.map(r => ({ region: r, locations: window.locList().filter(l => l.region === r.id) }));
    const stray = window.locList().filter(l => !known.has(l.region));
    if (stray.length) groups.push({ region: { id: "other", name: "Other" }, locations: stray });
    return groups.filter(g => g.locations.length);
};
window.locPresets = (id) => (window.locById(id) ? window.locById(id).presets : []);
window.locCenter = (id) => (window.locById(id) || window.locById(window.locDefaultId()) || { center: { lat: 0, lng: 0 } }).center;
window.locAreaInfo = function (areaName) {
    for (const l of window.locList()) { const a = (l.areas || []).find(x => x.name === areaName); if (a) return { loc: l, area: a }; }
    return null;
};
// Which location does a race belong to? New races store locationId. Older races are worked out from their stops.
window.locIdForRace = function (race) {
    if (race && race.locationId && window.LOCATIONS[race.locationId]) return race.locationId;
    const names = new Set(((race && race.checkpoints) || []).map(c => c.name));
    const parks = new Set(((race && race.checkpoints) || []).map(c => c.park));
    let best = null, bestN = 0;
    window.locList().forEach(l => {
        const n = l.presets.filter(p => names.has(p.name) || parks.has(p.park)).length;
        if (n > bestN) { best = l.id; bestN = n; }
    });
    return best || window.locDefaultId();
};
window.locForRace = (race) => window.locById(window.locIdForRace(race));
// Flavour lines for a race, per key: the location's own lines if it has any, otherwise the generic ones.
window.locFlavour = function (race) {
    const l = race ? window.locForRace(race) : null, own = (l && l.flavour) || {}, d = window.LOCATION_FLAVOUR_DEFAULT;
    const pick = (k) => (Array.isArray(own[k]) ? own[k].length : own[k]) ? own[k] : d[k];
    return { tagline: pick("tagline"), flawless: pick("flawless"), roasts: pick("roasts") };
};
// Hint for how to reach a stop's area at this race's location
window.locAdvice = function (areaName, race) {
    const l = (race ? window.locForRace(race) : null) || window.locById(window.locDefaultId());
    const t = (l && l.transit) || {}, park = String(areaName || "").toLowerCase();
    const hit = (t.advice || []).find(a => (a.match || []).some(m => park.includes(String(m).toLowerCase())));
    return hit ? hit.text : (t.adviceFallback || window.LOCATION_FLAVOUR_DEFAULT.transitAdvice);
};
// Transit set-up for a race (falls back to the first location when there is no race yet).
window.locTransit = function (race) {
    const l = race ? window.locForRace(race) : null;
    return (l || window.locById(window.locDefaultId()) || { transit: { modes: [], transferRules: [], transferPoints: [] } }).transit;
};
