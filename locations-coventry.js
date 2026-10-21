// ============================================================================
// Location pack: Coventry, UK (local test pack)
// ----------------------------------------------------------------------------
// Same layout as locations-wdw.js: one file per destination, everything for that place inside it.
// Coventry is split into four areas so "By area" and "Manual" lists stay short and sensible.
// Transit here is plain UK public transport, with no transfer rules and no transfer points.
// ============================================================================
window.registerLocation({
    id: "coventry",
    name: "Coventry (test)",
    region: "europe",
    icon: "📍",
    blurb: "Local test stops: city centre, CV6, Coombe Abbey and beyond",
    center: { lat: 52.4082, lng: -1.5073 },
    features: { hiddenMickeyBingo: false },

    // Local flavour for the report card. Anything missing falls back to the generic wording in locations-registry.js.
    flavour: {
        tagline: "Think your team can beat the Coventry loop? Play The Amazing Mouse Race! 🏁",
        flawless: [
            "Top marks! Coventry locals would be proud. 🏙️✨",
            "Flawless. Not even the ring road could confuse you. 🔄😎"
        ],
        roasts: [
            "{guess}? The answer to {question} was {answer}. Even the Coventry ring road makes more sense. 🔄🤦",
            "Oof! You said {guess} for {question}. It was {answer}. Peeping Tom saw that and looked away. 🙈",
            "{question} It was {answer}, not {guess}. Your mates would be ashamed. 🤦"
        ]
    },

    access: { noun: "area", hopperLabel: "Whole of Coventry" },

    map: {
        // No vector map yet, so this location uses OpenStreetMap. Area zoom boxes are worked out from the stops.
        tips: [
            { icon: "fa-compass", color: "text-disneyBlue", title: "Strategic Planning Tip", text: "Group your checkpoints into clusters (city centre first, then the outer areas) before you travel, to save time waiting for buses and trains." }
        ]
    },

    areas: [
        { name: "City Centre",           icon: "🏛️" },
        { name: "CV6 & Holbrooks",       icon: "🏘️" },
        { name: "Coombe Abbey & Binley", icon: "🌳" },
        { name: "Around Coventry",       icon: "📍" }
    ],

    transit: {
        modes: [
            { id: "bus",   label: "Bus",           emoji: "🚌" },
            { id: "train", label: "Train",         emoji: "🚆" },
            { id: "taxi",  label: "Taxi / car",    emoji: "🚕" },
            { id: "none",  label: "None (walked)", emoji: "🚶" }
        ],
        advice: [],
        adviceFallback: "Plan your route on foot, by bus or by train. Keep an eye on the time!",
        transferRules: [],
        transferNoun: "stop",
        transferOther: "Other / not listed",
        transferPoints: []
    },

    stops: [
        // ---- City Centre ----
    { name: "Coventry Cathedral (New)", lat: 52.4082, lng: -1.5073, type: "GPS", park: "City Centre", land: "City Centre (Historic Landmark)" },
    { name: "St Michael's Cathedral Ruins", lat: 52.4085, lng: -1.5065, type: "GPS", park: "City Centre", land: "City Centre (Historic Landmark)" },
    { name: "Lady Godiva Statue (Broadgate)", lat: 52.4078, lng: -1.5097, type: "GPS", park: "City Centre", land: "City Centre (Public Square)" },
    { name: "Coventry Transport Museum", lat: 52.4103, lng: -1.5090, type: "GPS", park: "City Centre", land: "City Centre (Museum)" },
    { name: "The Wave Waterpark", lat: 52.4054, lng: -1.5126, type: "GPS", park: "City Centre", land: "City Centre (Leisure / Attraction)" },
    { name: "Herbert Art Gallery & Museum", lat: 52.4078, lng: -1.5058, type: "GPS", park: "City Centre", land: "City Centre (Museum & Gallery)" },
    { name: "St Mary's Guildhall", lat: 52.4078, lng: -1.5070, type: "GPS", park: "City Centre", land: "City Centre (Historic Building)" },
    { name: "Belgrade Theatre", lat: 52.4098, lng: -1.5135, type: "GPS", park: "City Centre", land: "City Centre (Entertainment)" },
    { name: "Holy Trinity Church", lat: 52.4087, lng: -1.5078, type: "GPS", park: "City Centre", land: "City Centre (Historic Church)" },
    { name: "Lower Precinct Shopping Centre", lat: 52.4081, lng: -1.5128, type: "GPS", park: "City Centre", land: "City Centre (Shopping)" },
    { name: "West Orchards Shopping Centre", lat: 52.4091, lng: -1.5115, type: "GPS", park: "City Centre", land: "City Centre (Shopping)" },
    { name: "Coventry Railway Station", lat: 52.4008, lng: -1.5134, type: "GPS", park: "City Centre", land: "City Centre (Transit Hub)" },
    { name: "Skydome Arena / Ice Rink", lat: 52.4068, lng: -1.5182, type: "GPS", park: "City Centre", land: "City Centre (Sports & Leisure)" },
    { name: "Coventry Market", lat: 52.4067, lng: -1.5138, type: "GPS", park: "City Centre", land: "City Centre (Local Market)" },
    { name: "The Phoenix Pub", lat: 52.4088, lng: -1.5042, type: "GPS", park: "City Centre", land: "City Centre (Pub / Food)" },

        // ---- CV6 & Holbrooks ----
    { name: "The Craftsman Pub", lat: 52.44148, lng: -1.522368, type: "GPS", park: "CV6 & Holbrooks", land: "CV6 / Holbrooks (Pub)" },
    { name: "Glentworth Fish and Chips", lat: 52.44195, lng: -1.52310, type: "GPS", park: "CV6 & Holbrooks", land: "CV6 / Holbrooks (Takeaway / Food)" },
    { name: "Morrisons Parkgate Road", lat: 52.4372, lng: -1.5185, type: "GPS", park: "CV6 & Holbrooks", land: "CV6 / Holbrooks (Supermarket / Shop)" },
    { name: "CBS Arena (Coventry Building Society Arena)", lat: 52.4481, lng: -1.4955, type: "GPS", park: "CV6 & Holbrooks", land: "CV6 / Rowleys Green (Stadium / Arena)" },
    { name: "Arena Park Shopping Centre", lat: 52.4496, lng: -1.4988, type: "GPS", park: "CV6 & Holbrooks", land: "CV6 / Rowleys Green (Retail Park)" },
    { name: "Keresley Jubilee Wood", lat: 52.4452, lng: -1.5385, type: "GPS", park: "CV6 & Holbrooks", land: "CV6 / Keresley (Nature Park)" },
    { name: "The Royal Oak Keresley", lat: 52.4428, lng: -1.5360, type: "GPS", park: "CV6 & Holbrooks", land: "CV6 / Keresley (Pub)" },
    { name: "The Hare and Hounds Keresley", lat: 52.4510, lng: -1.5398, type: "GPS", park: "CV6 & Holbrooks", land: "CV6 / Keresley (Pub)" },
    { name: "Keresley Community Centre", lat: 52.4395, lng: -1.5332, type: "GPS", park: "CV6 & Holbrooks", land: "CV6 / Keresley (Community Hub)" },
    { name: "Holbrooks Park", lat: 52.4335, lng: -1.5205, type: "GPS", park: "CV6 & Holbrooks", land: "CV6 / Holbrooks (Public Park)" },
    { name: "The Wheel Pub Holbrooks", lat: 52.4360, lng: -1.5180, type: "GPS", park: "CV6 & Holbrooks", land: "CV6 / Holbrooks (Pub)" },
    { name: "Foleshill Community Centre", lat: 52.4285, lng: -1.4982, type: "GPS", park: "CV6 & Holbrooks", land: "CV6 / Foleshill (Community Hub)" },
    { name: "Broad Street Meeting Hall", lat: 52.4250, lng: -1.4995, type: "GPS", park: "CV6 & Holbrooks", land: "CV6 / Foleshill (Historic Venue)" },
    { name: "Coventry Canal Basin", lat: 52.4140, lng: -1.5085, type: "GPS", park: "CV6 & Holbrooks", land: "CV6 / Foleshill (Waterway / Historic)" },
    { name: "Longford Park", lat: 52.4468, lng: -1.4880, type: "GPS", park: "CV6 & Holbrooks", land: "CV6 / Longford (Public Park)" },
    { name: "Daisychain Park", lat: 52.4310, lng: -1.5090, type: "GPS", park: "CV6 & Holbrooks", land: "CV6 / Edgwick (Park & Playground)" },

        // ---- Coombe Abbey & Binley ----
    { name: "Coombe Abbey Hotel Entrance", lat: 52.4145, lng: -1.4081, type: "GPS", park: "Coombe Abbey & Binley", land: "Coombe Abbey (Historic Country House)" },
    { name: "Coombe Abbey Visitor Centre", lat: 52.4121, lng: -1.4110, type: "GPS", park: "Coombe Abbey & Binley", land: "Coombe Abbey (Country Park)" },
    { name: "Go Ape Coombe Abbey", lat: 52.4128, lng: -1.4125, type: "GPS", park: "Coombe Abbey & Binley", land: "Coombe Abbey (Outdoor Activity)" },
    { name: "Coombe Pool Fishing Lake", lat: 52.4115, lng: -1.4060, type: "GPS", park: "Coombe Abbey & Binley", land: "Coombe Abbey (Nature Trail)" },
    { name: "Coombe Abbey Heronry", lat: 52.4132, lng: -1.4035, type: "GPS", park: "Coombe Abbey & Binley", land: "Coombe Abbey (Wildlife Area)" },
    { name: "Binley Woods Village Hall", lat: 52.3980, lng: -1.4285, type: "GPS", park: "Coombe Abbey & Binley", land: "Binley (Community Venue)" },
    { name: "The Rose & Crown Binley", lat: 52.3970, lng: -1.4310, type: "GPS", park: "Coombe Abbey & Binley", land: "Binley (Pub)" },
    { name: "Warwickshire Shopping Park", lat: 52.3965, lng: -1.4485, type: "GPS", park: "Coombe Abbey & Binley", land: "Binley (Retail Park)" },
    { name: "Binley Fire Station", lat: 52.3995, lng: -1.4550, type: "GPS", park: "Coombe Abbey & Binley", land: "Binley (Public Service)" },

        // ---- Around Coventry ----
    { name: "War Memorial Park (Cenotaph)", lat: 52.3935, lng: -1.5262, type: "GPS", park: "Around Coventry", land: "Earlsdon (Public Park)" },
    { name: "University of Warwick Piazza", lat: 52.3792, lng: -1.5615, type: "GPS", park: "Around Coventry", land: "Gibbet Hill (University Campus)" },
    { name: "FarGo Village", lat: 52.4072, lng: -1.4980, type: "GPS", park: "Around Coventry", land: "Far Gosford (Creative Quarter)" },
    { name: "Charterhouse Heritage Park", lat: 52.4025, lng: -1.4925, type: "GPS", park: "Around Coventry", land: "London Road (Historic Park)" },
    ],

    bonuses: [
    { name: "Photo with the Lady Godiva Statue", type: "BONUS_PHOTO", bonusMinDeduction: 10, park: "Bonus Challenge", areas: ["City Centre", "CV6 & Holbrooks", "Coombe Abbey & Binley", "Around Coventry"], land: "City Centre" },
    { name: "Photo eating a Batch / Cob from a Coventry Bakery", type: "BONUS_PHOTO", bonusMinDeduction: 10, park: "Bonus Challenge", areas: ["City Centre", "CV6 & Holbrooks", "Coombe Abbey & Binley", "Around Coventry"], land: "Food & Snacks", bingo: ["foodbingo", "snackbingo"] },
    { name: "Photo with a Peeping Tom Clock Scene", type: "BONUS_PHOTO", bonusMinDeduction: 10, park: "Bonus Challenge", areas: ["City Centre", "CV6 & Holbrooks", "Coombe Abbey & Binley", "Around Coventry"], land: "City Centre" },
    { name: "Photo feeding ducks at Coombe Abbey Lake", type: "BONUS_PHOTO", bonusMinDeduction: 10, park: "Bonus Challenge", areas: ["City Centre", "CV6 & Holbrooks", "Coombe Abbey & Binley", "Around Coventry"], land: "Coombe Park" },
    { name: "Photo in front of a Coventry City Sky Blues Logo", type: "BONUS_PHOTO", bonusMinDeduction: 10, park: "Bonus Challenge", areas: ["City Centre", "CV6 & Holbrooks", "Coombe Abbey & Binley", "Around Coventry"], land: "Sports / CBS Arena" },
    ]
});
