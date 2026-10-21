// ============================================================================
// Location pack: Walt Disney World (Florida)
// ----------------------------------------------------------------------------
// Everything that belongs to this destination lives in this one file: its areas, its GPS stops, its bonus photo
// challenges and its transit rules. Nothing here is shared with other destinations.
// To add a new destination, copy this file, change the id/name/region and fill in your own data, then add one
// <script> line for it in index.html (and the file name to sw.js). Regions are listed in locations-registry.js.
//
// Fields
//   id        short unique id saved on every race created here (races/{code}.locationId). Never change it once races exist.
//   region    one of the ids in window.LOCATION_REGIONS (locations-registry.js)
//   areas     the parks / zones the stops belong to, in the order they are listed in the app. `name` must match each stop's `park`.
//   stops     GPS checkpoints:  { name, lat, lng, type: "GPS", park: <area name>, land: <sub-area / description> }
//   bonuses   photo challenges: { name, type: "BONUS_PHOTO", bonusMinDeduction, park: "Bonus Challenge", areas: [<area names> or "*"], land, bingo: [...] }
//   transit   how teams travel here: modes they can tick, trips that need a transfer, and the transfer points to choose from
//   features  switches for things that only make sense at some places (e.g. Hidden Mickey Bingo)
// ============================================================================
window.registerLocation({
    id: "wdw",
    name: "Walt Disney World",
    region: "florida",
    icon: "🏰",
    blurb: "Magic Kingdom, Epcot, Hollywood Studios, Animal Kingdom, Disney Springs and the resorts",
    center: { lat: 28.4177, lng: -81.5812 },
    features: { hiddenMickeyBingo: true },

    // Words that belong to this place: shown on the report card (and anywhere else the app needs local flavour).
    // Any line left out falls back to the generic wording in locations-registry.js, so a new location works with none of this.
    //   roasts use {guess} {question} {answer}.   flawless / tagline are plain text.
    flavour: {
        tagline: "Can your team beat this time? Play The Amazing Mouse Race! 🏰✨",
        flawless: [
            "No wrong trivia answers! Absolute Disney Geniuses! 🧠✨",
            "Flawless trivia. Imagineers everywhere are taking notes. 📝✨",
            "Not a single slip. Cast Members would be handing out gold stars. ⭐"
        ],
        roasts: [
            "Oof! You guessed {guess} for {question}. The correct answer was {answer}. Mickey is shaking his head! 🐭🤦‍♂️",
            "{guess}? Even Goofy knew it was {answer}. (Question: {question}) 🤪",
            "{question} Answer: {answer}. You said {guess}. A Cast Member just winced somewhere. 😬",
            "You said {guess} with total confidence. It was {answer}. Pixie dust can't fix that one. ✨🫠"
        ]
    },

    // Maps page + hints + replays. This is the only location with a vector map; every other location falls back to OpenStreetMap
    // until it gets its own `vector` entry here (build a data file, then add: vector: { data: "<file>.json?v=1", bounds: [[south, west], [north, east]] }).
    // Wording for public-race access ("you need a Park Hopper"): only the four theme parks count towards "everything".
    access: { noun: "park", hopperLabel: "Park Hopper", hopperAreas: ["Magic Kingdom", "Epcot", "Hollywood Studios", "Animal Kingdom"] },

    map: {
        vector: { data: "wdw-map.json?v=1", bounds: [[28.335, -81.625], [28.435, -81.500]] },
        areas: [
            { key: "all", name: "Whole Resort", icon: "🗺️", bounds: [[28.335,-81.625],[28.435,-81.500]], desc: "Viewing all of Walt Disney World. Pick a park from the menu above to zoom in, or pinch and drag to explore." },
            { key: "mk", name: "Magic Kingdom", icon: "🏰", bounds: [[28.4140,-81.5900],[28.4250,-81.5720]], desc: "Viewing Magic Kingdom (Cinderella Castle, Fantasyland, Tomorrowland, Frontierland, Adventureland, Liberty Square)." },
            { key: "epcot", name: "Epcot", icon: "🌐", bounds: [[28.3650,-81.5600],[28.3800,-81.5400]], desc: "Viewing Epcot (World Celebration, World Discovery, World Nature, and World Showcase international pavilions)." },
            { key: "hs", name: "Hollywood Studios", icon: "🎬", bounds: [[28.3500,-81.5700],[28.3620,-81.5500]], desc: "Viewing Disney's Hollywood Studios (Galaxy's Edge, Toy Story Land, Tower of Terror, Hollywood Boulevard)." },
            { key: "ak", name: "Animal Kingdom", icon: "🦁", bounds: [[28.3500,-81.6000],[28.3650,-81.5800]], desc: "Viewing Disney's Animal Kingdom (Pandora - The World of Avatar, Africa, Asia, Dinoland U.S.A.)." },
            { key: "ds", name: "Disney Springs", icon: "🛍️", bounds: [[28.3700,-81.5300],[28.3820,-81.5150]], desc: "Viewing Disney Springs (Town Center, Marketplace, The Landing, West Side)." },
            { key: "resorts", name: "Resorts & Transit", icon: "🏨", bounds: [[28.3850,-81.5800],[28.4100,-81.5300]], desc: "Viewing central resort areas including Caribbean Beach, Art of Animation, Pop Century, and Epcot resort area skyliner stations." }
        ],
        tips: [
            { icon: "fa-train-subway", color: "text-disneyGold", title: "Free Transit Hubs", text: "Remember your race rules: only free Disney transportation is allowed! Use the Transportation and Ticket Center (TTC) for monorails and buses, or transfer via Epcot/Hollywood Studios for the Disney Skyliner network." },
            { icon: "fa-compass", color: "text-disneyBlue", title: "Strategic Planning Tip", text: "Organize your team checkpoints into geographic clusters (e.g., knocking out all Fantasyland stops together) before moving across parks to minimize walking fatigue and transit wait times." }
        ]
    },

    areas: [
        { name: "Magic Kingdom",     icon: "🏰" },
        { name: "Epcot",             icon: "🌐" },
        { name: "Hollywood Studios", icon: "🎬" },
        { name: "Animal Kingdom",    icon: "🦁" },
        { name: "Disney Springs",    icon: "🛍️" },
        { name: "Disney Resorts",    icon: "🏨" }
    ],

    transit: {
        // Modes a team can tick after each check-in. Keep "none" last (it means they only walked).
        modes: [
            { id: "bus",      label: "Bus",           emoji: "🚌" },
            { id: "boat",     label: "Boat",          emoji: "⛴️" },
            { id: "skyliner", label: "Skyliner",      emoji: "🚡" },
            { id: "monorail", label: "Monorail",      emoji: "🚝" },
            { id: "none",     label: "None (walked)", emoji: "🚶" }
        ],
        // Trips that cannot be made directly. The team is asked which transfer point they went through.
        transferRules: [
            {
                between: ["Disney Springs"],
                and: ["Magic Kingdom", "Epcot", "Hollywood Studios", "Animal Kingdom"],
                reason: "You can't travel directly between a theme park and Disney Springs."
            }
        ],
        // Hint shown for a stop: first entry whose `match` words appear in the stop's area name wins; otherwise `adviceFallback`.
        advice: [
            { match: ["magic kingdom"],     text: "Magic Kingdom can be reached via Disney Resort Buses from any resort hotel. If arriving via Transportation and Ticket Center (TTC), take the Resort Monorail or the Ferryboat. From Epcot, take the Monorail transfer via the TTC." },
            { match: ["epcot"],             text: "Epcot can be reached via bus from any resort, or by using the Disney Skyliner from eligible resorts (Caribbean Beach, Art of Animation, Pop Century, Riviera) and Hollywood Studios. You can also take the Monorail from Magic Kingdom/TTC or Friendship boats from the Epcot resort area (BoardWalk, Yacht & Beach Club)." },
            { match: ["hollywood studios"], text: "Disney's Hollywood Studios can be reached via resort buses from any hotel, the Disney Skyliner network (transfer via Caribbean Beach), or Friendship water boats from Epcot resort hotels and the BoardWalk." },
            { match: ["animal kingdom"],    text: "Disney's Animal Kingdom is accessible exclusively via complimentary Disney Resort Buses from any resort hotel or park transfer hub." },
            { match: ["springs", "bonus"],  text: "You can't travel straight between a theme park and Disney Springs. Go via a resort first, then a bus or boat on to Disney Springs. For example: Magic Kingdom to Contemporary by monorail; Epcot to BoardWalk on foot or by boat; Hollywood Studios to Pop Century by Skyliner; or Animal Kingdom to Old Key West by bus and then a boat." }
        ],
        adviceFallback: "Use complimentary Disney Resort Buses, Monorails, Skyliner routes, or watercraft available across property. Remember: paid ride-shares and taxis are strictly prohibited!",
        transferNoun: "resort",                      // used in the question: "Which resort did you transfer through?"
        transferOther: "Other resort / not listed",
        // Choices for the transfer question, grouped by `area`. lat/lng bend the race replay through that point.
        transferPoints: [
                { name: "Contemporary Resort", area: "Magic Kingdom area", lat: 28.4151, lng: -81.5745 },
                { name: "Bay Lake Tower", area: "Magic Kingdom area", lat: 28.4173, lng: -81.5752 },
                { name: "Polynesian Village Resort", area: "Magic Kingdom area", lat: 28.4055, lng: -81.5841 },
                { name: "Grand Floridian Resort & Spa", area: "Magic Kingdom area", lat: 28.4111, lng: -81.5877 },
                { name: "Wilderness Lodge", area: "Magic Kingdom area", lat: 28.4057, lng: -81.5727 },
                { name: "Fort Wilderness Resort & Campground", area: "Magic Kingdom area", lat: 28.4062, lng: -81.5543 },
                { name: "Beach Club Resort", area: "Epcot area", lat: 28.3713, lng: -81.5562 },
                { name: "Yacht Club Resort", area: "Epcot area", lat: 28.3706, lng: -81.5583 },
                { name: "BoardWalk Inn & Villas", area: "Epcot area", lat: 28.3665, lng: -81.5564 },
                { name: "Swan Resort", area: "Epcot area", lat: 28.3683, lng: -81.5598 },
                { name: "Dolphin Resort", area: "Epcot area", lat: 28.3662, lng: -81.5606 },
                { name: "Swan Reserve", area: "Epcot area", lat: 28.3661, lng: -81.5630 },
                { name: "Riviera Resort", area: "Epcot area", lat: 28.3648, lng: -81.5441 },
                { name: "Caribbean Beach Resort", area: "Epcot area", lat: 28.3618, lng: -81.5414 },
                { name: "Pop Century Resort", area: "Epcot area", lat: 28.3499, lng: -81.5417 },
                { name: "Art of Animation Resort", area: "Epcot area", lat: 28.3496, lng: -81.5450 },
                { name: "Animal Kingdom Lodge (Jambo House)", area: "Animal Kingdom area", lat: 28.3528, lng: -81.6025 },
                { name: "Animal Kingdom Villas (Kidani Village)", area: "Animal Kingdom area", lat: 28.3537, lng: -81.6067 },
                { name: "All-Star Movies Resort", area: "Animal Kingdom area", lat: 28.3375, lng: -81.5739 },
                { name: "All-Star Music Resort", area: "Animal Kingdom area", lat: 28.3397, lng: -81.5735 },
                { name: "All-Star Sports Resort", area: "Animal Kingdom area", lat: 28.3427, lng: -81.5738 },
                { name: "Coronado Springs Resort", area: "Animal Kingdom area", lat: 28.3630, lng: -81.5746 },
                { name: "Old Key West Resort", area: "Disney Springs area", lat: 28.3759, lng: -81.5350 },
                { name: "Saratoga Springs Resort & Spa", area: "Disney Springs area", lat: 28.3762, lng: -81.5240 },
                { name: "Port Orleans Resort - French Quarter", area: "Disney Springs area", lat: 28.3794, lng: -81.5367 },
                { name: "Port Orleans Resort - Riverside", area: "Disney Springs area", lat: 28.3855, lng: -81.5365 }
        ]
    },

    stops: [
    { name: "Cinderella Castle", lat: 28.419350, lng: -81.581350, type: "GPS", park: "Magic Kingdom", land: "Fantasyland / Hub" },
    { name: "Space Mountain", lat: 28.419050, lng: -81.577550, type: "GPS", park: "Magic Kingdom", land: "Tomorrowland" },
    { name: "Haunted Mansion", lat: 28.420460, lng: -81.583125, type: "GPS", park: "Magic Kingdom", land: "Liberty Square" },
    { name: "Big Thunder Mountain Railroad", lat: 28.420411, lng: -81.584772, type: "GPS", park: "Magic Kingdom", land: "Frontierland" },
    { name: "Pirates of the Caribbean", lat: 28.418200, lng: -81.584800, type: "GPS", park: "Magic Kingdom", land: "Adventureland" },
    { name: "Tiana's Bayou Adventure", lat: 28.419700, lng: -81.585200, type: "GPS", park: "Magic Kingdom", land: "Frontierland" },
    { name: "Seven Dwarfs Mine Train", lat: 28.420750, lng: -81.580550, type: "GPS", park: "Magic Kingdom", land: "Fantasyland" },
    { name: "Peter Pan's Flight", lat: 28.420314, lng: -81.581975, type: "GPS", park: "Magic Kingdom", land: "Fantasyland" },
    { name: "It's a Small World", lat: 28.420442, lng: -81.582119, type: "GPS", park: "Magic Kingdom", land: "Fantasyland" },
    { name: "Dumbo the Flying Elephant", lat: 28.420322, lng: -81.579736, type: "GPS", park: "Magic Kingdom", land: "Fantasyland (Storybook Circus)" },
    { name: "Buzz Lightyear's Space Ranger Spin", lat: 28.418450, lng: -81.579550, type: "GPS", park: "Magic Kingdom", land: "Tomorrowland" },
    { name: "Tron Lightcycle / Run", lat: 28.421900, lng: -81.577050, type: "GPS", park: "Magic Kingdom", land: "Tomorrowland" },
    { name: "Emporium Gift Shop", lat: 28.417450, lng: -81.581550, type: "GPS", park: "Magic Kingdom", land: "Main Street, U.S.A. / Shop" },
    { name: "Main Street Confectionery", lat: 28.417500, lng: -81.580800, type: "GPS", park: "Magic Kingdom", land: "Main Street, U.S.A. / Shop" },
    { name: "Cinderella's Royal Table", lat: 28.419350, lng: -81.581450, type: "GPS", park: "Magic Kingdom", land: "Fantasyland / Dining" },
    { name: "Be Our Guest Restaurant", lat: 28.421383, lng: -81.580817, type: "GPS", park: "Magic Kingdom", land: "Fantasyland / Dining" },
    { name: "Pecos Bill Tall Tale Inn & Cafe", lat: 28.418650, lng: -81.584450, type: "GPS", park: "Magic Kingdom", land: "Frontierland / Dining" },
    // Magic Kingdom Fab 50 Sculptures
    { name: "Fab 50: Mickey Mouse & Minnie Mouse", lat: 28.4189, lng: -81.5812, type: "GPS", park: "Magic Kingdom", land: "Central Hub Statue" },
    { name: "Fab 50: Donald Duck & Daisy Duck", lat: 28.4188, lng: -81.5815, type: "GPS", park: "Magic Kingdom", land: "Central Hub Statue" },
    { name: "Fab 50: Goofy & Pluto", lat: 28.4188, lng: -81.5809, type: "GPS", park: "Magic Kingdom", land: "Central Hub Statue" },
    { name: "Fab 50: Chip 'n' Dale", lat: 28.4187, lng: -81.5815, type: "GPS", park: "Magic Kingdom", land: "Central Hub Statue" },
    { name: "Fab 50: Lady and the Tramp", lat: 28.4172, lng: -81.5812, type: "GPS", park: "Magic Kingdom", land: "Town Square Statue" },
    { name: "Fab 50: Tinker Bell", lat: 28.4189, lng: -81.5816, type: "GPS", park: "Magic Kingdom", land: "Central Hub Tree Statue" },
    { name: "Fab 50: Winnie the Pooh & Piglet", lat: 28.4185, lng: -81.5826, type: "GPS", park: "Magic Kingdom", land: "Adventureland Entrance Statue" },
    { name: "Fab 50: Abu", lat: 28.4182, lng: -81.5830, type: "GPS", park: "Magic Kingdom", land: "Adventureland Sign Statue" },
    { name: "Fab 50: Orange Bird", lat: 28.4178, lng: -81.5836, type: "GPS", park: "Magic Kingdom", land: "Skipper Canteen Terrace Statue" },
    { name: "Fab 50: Stitch", lat: 28.4186, lng: -81.5796, type: "GPS", park: "Magic Kingdom", land: "Purple Wall Statue" },
    { name: "Fab 50: Dumbo & Timothy Q. Mouse", lat: 28.4196, lng: -81.5804, type: "GPS", park: "Magic Kingdom", land: "Fantasyland Castle Pathway Statue" },
    { name: "Fab 50: Jaq & Gus", lat: 28.4195, lng: -81.5809, type: "GPS", park: "Magic Kingdom", land: "Cinderella Castle Turret Statue" },
    { name: "Fab 50: Pinocchio", lat: 28.4202, lng: -81.5815, type: "GPS", park: "Magic Kingdom", land: "Fantasyland Turrets Statue" },
    { name: "Fab 50: Cogsworth & Lumiere", lat: 28.4201, lng: -81.5811, type: "GPS", park: "Magic Kingdom", land: "Fantasyland Pathway Statue" },
    { name: "Fab 50: Mad Hatter & Cheshire Cat", lat: 28.4199, lng: -81.5798, type: "GPS", park: "Magic Kingdom", land: "Mad Tea Party Statue" },

    // ================= DISNEY: EPCOT =================
    { name: "Spaceship Earth", lat: 28.374650, lng: -81.549100, type: "GPS", park: "Epcot", land: "World Celebration" },
    { name: "Guardians of the Galaxy: Cosmic Rewind", lat: 28.374450, lng: -81.547950, type: "GPS", park: "Epcot", land: "World Discovery" },
    { name: "Test Track", lat: 28.372650, lng: -81.547450, type: "GPS", park: "Epcot", land: "World Discovery" },
    { name: "Soarin' Around the World", lat: 28.374250, lng: -81.551950, type: "GPS", park: "Epcot", land: "World Nature" },
    { name: "Frozen Ever After (Norway)", lat: 28.37080, lng: -81.54624, type: "GPS", park: "Epcot", land: "World Showcase (Norway)" },
    { name: "Remy's Ratatouille Adventure (France)", lat: 28.36855, lng: -81.55320, type: "GPS", park: "Epcot", land: "World Showcase (France)" },
    // Epcot World Showcase Dining & Shops
    { name: "San Angel Inn Restaurante", lat: 28.37120, lng: -81.54755, type: "GPS", park: "Epcot", land: "World Showcase (Mexico / Dining)" },
    { name: "Plaza de los Amigos Market", lat: 28.37110, lng: -81.54770, type: "GPS", park: "Epcot", land: "World Showcase (Mexico / Shop)" },
    { name: "La Cava del Tequila", lat: 28.37125, lng: -81.54735, type: "GPS", park: "Epcot", land: "World Showcase (Mexico / Bar)" },
    { name: "Kringla Bakeri og Kafé", lat: 28.37060, lng: -81.54655, type: "GPS", park: "Epcot", land: "World Showcase (Norway / Bakery)" },
    { name: "The Fjording Gift Shop", lat: 28.37085, lng: -81.54665, type: "GPS", park: "Epcot", land: "World Showcase (Norway / Shop)" },
    { name: "Nine Dragons Restaurant", lat: 28.36975, lng: -81.54650, type: "GPS", park: "Epcot", land: "World Showcase (China / Dining)" },
    { name: "Yong Feng Shangdian Shop", lat: 28.36955, lng: -81.54655, type: "GPS", park: "Epcot", land: "World Showcase (China / Shop)" },
    { name: "Joy of Tea Kiosk", lat: 28.37000, lng: -81.54670, type: "GPS", park: "Epcot", land: "World Showcase (China / Snack)" },
    { name: "Biergarten Restaurant", lat: 28.36825, lng: -81.54715, type: "GPS", park: "Epcot", land: "World Showcase (Germany / Dining)" },
    { name: "Der Teddybär Toy Shop", lat: 28.36850, lng: -81.54700, type: "GPS", park: "Epcot", land: "World Showcase (Germany / Shop)" },
    { name: "Karamell-Küche Candy Shop", lat: 28.36835, lng: -81.54720, type: "GPS", park: "Epcot", land: "World Showcase (Germany / Bakery)" },
    { name: "Via Napoli Ristorante e Pizzeria", lat: 28.36755, lng: -81.54835, type: "GPS", park: "Epcot", land: "World Showcase (Italy / Dining)" },
    { name: "Tutto Italia Ristorante", lat: 28.36785, lng: -81.54855, type: "GPS", park: "Epcot", land: "World Showcase (Italy / Dining)" },
    { name: "La Bottega Italiana", lat: 28.36805, lng: -81.54825, type: "GPS", park: "Epcot", land: "World Showcase (Italy / Shop)" },
    { name: "Regal Eagle Smokehouse Barbecue", lat: 28.36730, lng: -81.54945, type: "GPS", park: "Epcot", land: "World Showcase (American / Dining)" },
    { name: "Art of Disney Gallery", lat: 28.36750, lng: -81.54950, type: "GPS", park: "Epcot", land: "World Showcase (American / Shop)" },
    { name: "Teppan Edo Hibachi Restaurant", lat: 28.36695, lng: -81.55050, type: "GPS", park: "Epcot", land: "World Showcase (Japan / Dining)" },
    { name: "Mitsukoshi Department Store", lat: 28.36715, lng: -81.55065, type: "GPS", park: "Epcot", land: "World Showcase (Japan / Shop)" },
    { name: "Spice Road Table", lat: 28.36785, lng: -81.55155, type: "GPS", park: "Epcot", land: "World Showcase (Morocco / Dining)" },
    { name: "Souk-al-Magreb Gift Shop", lat: 28.36800, lng: -81.55180, type: "GPS", park: "Epcot", land: "World Showcase (Morocco / Shop)" },
    { name: "Chefs de France", lat: 28.36855, lng: -81.55285, type: "GPS", park: "Epcot", land: "World Showcase (France / Dining)" },
    { name: "Les Halles Boulangerie-Patisserie", lat: 28.36825, lng: -81.55305, type: "GPS", park: "Epcot", land: "World Showcase (France / Bakery)" },
    { name: "Plume et Palette Perfume Shop", lat: 28.36875, lng: -81.55265, type: "GPS", park: "Epcot", land: "World Showcase (France / Shop)" },
    { name: "Rose & Crown Pub & Dining Room", lat: 28.36945, lng: -81.55185, type: "GPS", park: "Epcot", land: "World Showcase (UK / Pub & Dining)" },
    { name: "Yorkshire County Fish Shop", lat: 28.36955, lng: -81.55160, type: "GPS", park: "Epcot", land: "World Showcase (UK / Quick Service)" },
    { name: "The Crown & Crest Shop", lat: 28.36930, lng: -81.55205, type: "GPS", park: "Epcot", land: "World Showcase (UK / Shop)" },
    { name: "Le Cellier Steakhouse", lat: 28.37025, lng: -81.55085, type: "GPS", park: "Epcot", land: "World Showcase (Canada / Dining)" },
    { name: "Northwest Mercantile Gift Shop", lat: 28.37040, lng: -81.55110, type: "GPS", park: "Epcot", land: "World Showcase (Canada / Shop)" },
    // Epcot Fab 50 Sculptures
    { name: "Fab 50: Figment", lat: 28.37010, lng: -81.54980, type: "GPS", park: "Epcot", land: "Bridge to World Showcase Statue" },
    { name: "Fab 50: Miguel & Dante", lat: 28.37000, lng: -81.54935, type: "GPS", park: "Epcot", land: "Showcase Plaza Statue" },
    { name: "Fab 50: Rocket Raccoon & Baby Groot", lat: 28.37005, lng: -81.54955, type: "GPS", park: "Epcot", land: "Showcase Plaza Statue" },
    { name: "Fab 50: Olaf & Bruni", lat: 28.37000, lng: -81.54975, type: "GPS", park: "Epcot", land: "Showcase Plaza Statue" },
    { name: "Fab 50: Pua & Hei-Hei", lat: 28.36990, lng: -81.55000, type: "GPS", park: "Epcot", land: "Showcase Plaza Statue" },

    // ================= DISNEY: HOLLYWOOD STUDIOS =================
    { name: "Twilight Zone Tower of Terror", lat: 28.359808, lng: -81.559978, type: "GPS", park: "Hollywood Studios", land: "Sunset Boulevard" },
    { name: "Rock 'n' Roller Coaster", lat: 28.359417, lng: -81.560694, type: "GPS", park: "Hollywood Studios", land: "Sunset Boulevard" },
    { name: "Star Wars: Rise of the Resistance", lat: 28.354128, lng: -81.560519, type: "GPS", park: "Hollywood Studios", land: "Star Wars: Galaxy's Edge" },
    { name: "Millennium Falcon: Smugglers Run", lat: 28.354050, lng: -81.562050, type: "GPS", park: "Hollywood Studios", land: "Star Wars: Galaxy's Edge" },
    { name: "Toy Story Mania!", lat: 28.356180, lng: -81.561030, type: "GPS", park: "Hollywood Studios", land: "Toy Story Land" },
    { name: "Slinky Dog Dash", lat: 28.356450, lng: -81.563120, type: "GPS", park: "Hollywood Studios", land: "Toy Story Land" },
    { name: "Dok-Ondar's Den of Antiquities", lat: 28.353550, lng: -81.562000, type: "GPS", park: "Hollywood Studios", land: "Star Wars: Galaxy's Edge / Shop" },
    { name: "Oga's Cantina", lat: 28.353850, lng: -81.562350, type: "GPS", park: "Hollywood Studios", land: "Star Wars: Galaxy's Edge / Lounge" },
    { name: "The Hollywood Brown Derby", lat: 28.355050, lng: -81.558350, type: "GPS", park: "Hollywood Studios", land: "Hollywood Boulevard / Dining" },
    { name: "Tower Hotel Gifts", lat: 28.359650, lng: -81.559900, type: "GPS", park: "Hollywood Studios", land: "Sunset Boulevard / Shop" },
    // Hollywood Studios Fab 50 Sculptures
    { name: "Fab 50: Woody & Bo Peep", lat: 28.3569, lng: -81.5612, type: "GPS", park: "Hollywood Studios", land: "Animation Courtyard Statue" },
    { name: "Fab 50: R2-D2 & BB-8", lat: 28.3568, lng: -81.5615, type: "GPS", park: "Hollywood Studios", land: "Animation Courtyard Statue" },
    { name: "Fab 50: Sebastian & Flounder", lat: 28.3571, lng: -81.5610, type: "GPS", park: "Hollywood Studios", land: "Hollywood Blvd Courtyard Statue" },
    { name: "Fab 50: Joe Gardner", lat: 28.3570, lng: -81.5609, type: "GPS", park: "Hollywood Studios", land: "Hollywood Blvd Courtyard Statue" },
    { name: "Fab 50: Edna Mode", lat: 28.3567, lng: -81.5618, type: "GPS", park: "Hollywood Studios", land: "Animation Courtyard Plaza Statue" },
    { name: "Fab 50: Frozone", lat: 28.3566, lng: -81.5619, type: "GPS", park: "Hollywood Studios", land: "Animation Courtyard Plaza Statue" },

    // ================= DISNEY: ANIMAL KINGDOM =================
    { name: "Avatar Flight of Passage", lat: 28.355150, lng: -81.592150, type: "GPS", park: "Animal Kingdom", land: "Pandora - The World of Avatar" },
    { name: "Expedition Everest", lat: 28.358192, lng: -81.587144, type: "GPS", park: "Animal Kingdom", land: "Asia" },
    { name: "Kilimanjaro Safaris", lat: 28.363108, lng: -81.593531, type: "GPS", park: "Animal Kingdom", land: "Africa" },
    { name: "Tree of Life Roots", lat: 28.357850, lng: -81.590250, type: "GPS", park: "Animal Kingdom", land: "Discovery Island" },
    { name: "Tiffins Restaurant & Nomad Lounge", lat: 28.356950, lng: -81.591400, type: "GPS", park: "Animal Kingdom", land: "Discovery Island / Dining" },
    { name: "Windtraders Shop", lat: 28.355250, lng: -81.592000, type: "GPS", park: "Animal Kingdom", land: "Pandora / Shop" },
    { name: "Mombasa Marketplace", lat: 28.360650, lng: -81.590450, type: "GPS", park: "Animal Kingdom", land: "Africa / Shop" },
    // Animal Kingdom Fab 50 Sculptures
    { name: "Fab 50: Simba, Timon & Pumbaa", lat: 28.3582, lng: -81.5898, type: "GPS", park: "Animal Kingdom", land: "Discovery Island Tree Pathway Statue" },
    { name: "Fab 50: Bambi & Thumper", lat: 28.3580, lng: -81.5902, type: "GPS", park: "Animal Kingdom", land: "Discovery Island Walkway Statue" },
    { name: "Fab 50: Nemo & Dory", lat: 28.3584, lng: -81.5895, type: "GPS", park: "Animal Kingdom", land: "Discovery Island Tree Front Statue" },

    // ================= DISNEY SPRINGS =================
    { name: "World of Disney Store", lat: 28.371700, lng: -81.516750, type: "GPS", park: "Disney Springs", land: "Marketplace" },
    { name: "Aerophile Balloon Ascent", lat: 28.370450, lng: -81.522000, type: "GPS", park: "Disney Springs", land: "West Side" },
    { name: "Gideon's Bakehouse", lat: 28.370850, lng: -81.518900, type: "GPS", park: "Disney Springs", land: "The Landing" },
    { name: "The Boathouse Restaurant", lat: 28.371250, lng: -81.520150, type: "GPS", park: "Disney Springs", land: "The Landing" },
    { name: "Lego Store Giant Dragon", lat: 28.371200, lng: -81.516700, type: "GPS", park: "Disney Springs", land: "Marketplace" },
    { name: "AMC Disney Springs 24", lat: 28.370000, lng: -81.521200, type: "GPS", park: "Disney Springs", land: "West Side" },

    // ================= DISNEY RESORTS & TRANSIT HUBS =================
    { name: "Fort Wilderness Reception Outpost", lat: 28.4062, lng: -81.5543, type: "GPS", park: "Disney Resorts", land: "Wilderness / Campground" },
    { name: "Grand Floridian Resort Entrance", lat: 28.4111, lng: -81.5877, type: "GPS", park: "Disney Resorts", land: "Monorail Resort" },
    { name: "Contemporary Resort Lobby", lat: 28.4151, lng: -81.5745, type: "GPS", park: "Disney Resorts", land: "Monorail Resort" },
    { name: "Polynesian Village Resort Lobby", lat: 28.4055, lng: -81.5841, type: "GPS", park: "Disney Resorts", land: "Monorail Resort" },
    { name: "Disney's Riviera Resort (Skyliner Station)", lat: 28.3665, lng: -81.5436, type: "GPS", park: "Disney Resorts", land: "Skyliner Hub" },
    { name: "Caribbean Beach Resort Skyliner Hub", lat: 28.3582, lng: -81.5438, type: "GPS", park: "Disney Resorts", land: "Skyliner Hub" },
    { name: "Art of Animation & Pop Century Skyliner", lat: 28.3508, lng: -81.5431, type: "GPS", park: "Disney Resorts", land: "Skyliner Hub" },
    { name: "Disney's BoardWalk Inn Entrance", lat: 28.3665, lng: -81.5564, type: "GPS", park: "Disney Resorts", land: "Epcot Resort Area" },
    { name: "Animal Kingdom Lodge (Jambo House)", lat: 28.3528, lng: -81.6025, type: "GPS", park: "Disney Resorts", land: "Deluxe Resort" },
    ],

    bonuses: [
    { name: "Photo with Mickey Mouse", type: "BONUS_PHOTO", bonusMinDeduction: 10, park: "Bonus Challenge", areas: ["Magic Kingdom", "Epcot", "Hollywood Studios", "Animal Kingdom"], land: "Character Meet & Greet", bingo: ["characterbingo", "photobingo"] },
    { name: "Photo with any Princess", type: "BONUS_PHOTO", bonusMinDeduction: 10, park: "Bonus Challenge", areas: ["Magic Kingdom", "Epcot", "Hollywood Studios"], land: "Character Meet & Greet", bingo: ["characterbingo", "photobingo"] },
    { name: "Photo with a Hidden Mickey", type: "BONUS_PHOTO", bonusMinDeduction: 10, park: "Bonus Challenge", areas: ["Magic Kingdom", "Epcot", "Hollywood Studios", "Animal Kingdom"], land: "All Parks", bingo: ["hiddenmickeybingo", "photobingo"] },
    { name: "Photo eating a Mickey Pretzel or Churro", type: "BONUS_PHOTO", bonusMinDeduction: 10, park: "Bonus Challenge", areas: ["*"], land: "Dining Locations", bingo: ["foodbingo", "snackbingo"] },
    { name: "Photo riding a Monorail", type: "BONUS_PHOTO", bonusMinDeduction: 10, park: "Bonus Challenge", areas: ["Magic Kingdom", "Epcot", "Disney Resorts"], land: "Transportation Hubs", bingo: ["transportbingo", "photobingo"] },

    // Disney bonus challenges grouped by bingo theme
    { name: "Photo with a Mickey-shaped snack", type: "BONUS_PHOTO", bonusMinDeduction: 10, park: "Bonus Challenge", areas: ["Magic Kingdom", "Epcot", "Hollywood Studios", "Animal Kingdom", "Disney Springs", "Disney Resorts"], land: "Food & Snacks", bingo: ["foodbingo", "snackbingo"] },
    { name: "Photo with a Dole Whip", type: "BONUS_PHOTO", bonusMinDeduction: 10, park: "Bonus Challenge", areas: ["Magic Kingdom", "Disney Springs", "Disney Resorts"], land: "Food & Snacks", bingo: ["foodbingo", "snackbingo"] },
    { name: "Photo with a themed cupcake or pastry", type: "BONUS_PHOTO", bonusMinDeduction: 10, park: "Bonus Challenge", areas: ["Magic Kingdom", "Epcot", "Hollywood Studios", "Animal Kingdom", "Disney Springs", "Disney Resorts"], land: "Food & Snacks", bingo: ["foodbingo", "snackbingo"] },
    { name: "Photo with popcorn in a Disney popcorn bucket", type: "BONUS_PHOTO", bonusMinDeduction: 10, park: "Bonus Challenge", areas: ["Magic Kingdom", "Epcot", "Hollywood Studios", "Animal Kingdom"], land: "Food & Snacks", bingo: ["foodbingo", "snackbingo"] },
    { name: "Photo trying a snack from World Showcase", type: "BONUS_PHOTO", bonusMinDeduction: 10, park: "Bonus Challenge", areas: ["Epcot"], land: "World Showcase / Food", bingo: ["foodbingo", "snackbingo"] },
    { name: "Photo with a pretzel from a Disney park", type: "BONUS_PHOTO", bonusMinDeduction: 10, park: "Bonus Challenge", areas: ["Magic Kingdom", "Epcot", "Hollywood Studios", "Animal Kingdom"], land: "Food & Snacks", bingo: ["foodbingo", "snackbingo"] },
    { name: "Photo with a character-themed drink (non-alcoholic)", type: "BONUS_PHOTO", bonusMinDeduction: 10, park: "Bonus Challenge", areas: ["Magic Kingdom", "Epcot", "Hollywood Studios", "Animal Kingdom", "Disney Springs", "Disney Resorts"], land: "Food & Snacks", bingo: ["foodbingo", "snackbingo"] },
    { name: "Photo with Mickey-shaped waffles", type: "BONUS_PHOTO", bonusMinDeduction: 10, park: "Bonus Challenge", areas: ["Magic Kingdom", "Epcot", "Hollywood Studios", "Animal Kingdom", "Disney Resorts"], land: "Food & Snacks", bingo: ["foodbingo"] },
    { name: "Photo with Minnie Mouse", type: "BONUS_PHOTO", bonusMinDeduction: 10, park: "Bonus Challenge", areas: ["Magic Kingdom", "Epcot", "Hollywood Studios", "Animal Kingdom"], land: "Character Meet & Greet", bingo: ["characterbingo", "photobingo"] },
    { name: "Photo with Donald Duck or Daisy Duck", type: "BONUS_PHOTO", bonusMinDeduction: 10, park: "Bonus Challenge", areas: ["Magic Kingdom", "Epcot", "Hollywood Studios", "Animal Kingdom"], land: "Character Meet & Greet", bingo: ["characterbingo", "photobingo"] },
    { name: "Photo with Goofy or Pluto", type: "BONUS_PHOTO", bonusMinDeduction: 10, park: "Bonus Challenge", areas: ["Magic Kingdom", "Epcot", "Hollywood Studios", "Animal Kingdom"], land: "Character Meet & Greet", bingo: ["characterbingo", "photobingo"] },
    { name: "Photo with Winnie the Pooh or Tigger", type: "BONUS_PHOTO", bonusMinDeduction: 10, park: "Bonus Challenge", areas: ["Magic Kingdom", "Epcot"], land: "Character Meet & Greet", bingo: ["characterbingo", "photobingo"] },
    { name: "Photo with a Star Wars character", type: "BONUS_PHOTO", bonusMinDeduction: 10, park: "Bonus Challenge", areas: ["Hollywood Studios"], land: "Character Meet & Greet", bingo: ["characterbingo", "photobingo"] },
    { name: "Photo with a Toy Story character", type: "BONUS_PHOTO", bonusMinDeduction: 10, park: "Bonus Challenge", areas: ["Hollywood Studios"], land: "Character Meet & Greet", bingo: ["characterbingo", "photobingo"] },
    { name: "Photo with a Disney character in costume", type: "BONUS_PHOTO", bonusMinDeduction: 10, park: "Bonus Challenge", areas: ["Magic Kingdom", "Epcot", "Hollywood Studios", "Animal Kingdom"], land: "Character Meet & Greet", bingo: ["characterbingo", "photobingo"] },
    { name: "Photo aboard the Disney Skyliner", type: "BONUS_PHOTO", bonusMinDeduction: 10, park: "Bonus Challenge", areas: ["Epcot", "Hollywood Studios", "Disney Resorts"], land: "Transportation Hubs", bingo: ["transportbingo", "photobingo"] },
    { name: "Photo aboard a Disney ferryboat", type: "BONUS_PHOTO", bonusMinDeduction: 10, park: "Bonus Challenge", areas: ["Magic Kingdom", "Epcot", "Disney Resorts"], land: "Transportation Hubs", bingo: ["transportbingo", "photobingo"] },
    { name: "Photo on the Walt Disney World Monorail platform", type: "BONUS_PHOTO", bonusMinDeduction: 10, park: "Bonus Challenge", areas: ["Magic Kingdom", "Epcot", "Disney Resorts"], land: "Transportation Hubs", bingo: ["transportbingo", "photobingo"] },
    { name: "Photo with a Disney park map", type: "BONUS_PHOTO", bonusMinDeduction: 10, park: "Bonus Challenge", areas: ["Magic Kingdom", "Epcot", "Hollywood Studios", "Animal Kingdom"], land: "Park Explorer", bingo: ["photobingo"] },
    { name: "Photo in front of a park icon or landmark", type: "BONUS_PHOTO", bonusMinDeduction: 10, park: "Bonus Challenge", areas: ["Magic Kingdom", "Epcot", "Hollywood Studios", "Animal Kingdom"], land: "Park Explorer", bingo: ["photobingo"] },
    { name: "Photo with Disney merchandise in a themed shop", type: "BONUS_PHOTO", bonusMinDeduction: 10, park: "Bonus Challenge", areas: ["Magic Kingdom", "Epcot", "Hollywood Studios", "Animal Kingdom", "Disney Springs"], land: "Shopping", bingo: ["shopbingo", "photobingo"] },
    { name: "Photo with a pair of Mickey ears", type: "BONUS_PHOTO", bonusMinDeduction: 10, park: "Bonus Challenge", areas: ["Magic Kingdom", "Epcot", "Hollywood Studios", "Animal Kingdom", "Disney Springs", "Disney Resorts"], land: "Shopping", bingo: ["shopbingo", "photobingo"] },
    { name: "Photo with a Disney pin or pin board", type: "BONUS_PHOTO", bonusMinDeduction: 10, park: "Bonus Challenge", areas: ["Magic Kingdom", "Epcot", "Hollywood Studios", "Animal Kingdom", "Disney Springs"], land: "Shopping", bingo: ["shopbingo", "photobingo"] },
    { name: "Photo with a Disney plush toy", type: "BONUS_PHOTO", bonusMinDeduction: 10, park: "Bonus Challenge", areas: ["Magic Kingdom", "Epcot", "Hollywood Studios", "Animal Kingdom", "Disney Springs"], land: "Shopping", bingo: ["shopbingo", "photobingo"] },
    { name: "Photo outside a Disney attraction entrance", type: "BONUS_PHOTO", bonusMinDeduction: 10, park: "Bonus Challenge", areas: ["Magic Kingdom", "Epcot", "Hollywood Studios", "Animal Kingdom"], land: "Attractions", bingo: ["ridebingo", "photobingo"] },
    { name: "Photo with a ride vehicle or ride sign", type: "BONUS_PHOTO", bonusMinDeduction: 10, park: "Bonus Challenge", areas: ["Magic Kingdom", "Epcot", "Hollywood Studios", "Animal Kingdom"], land: "Attractions", bingo: ["ridebingo", "photobingo"] }
    ]
});
