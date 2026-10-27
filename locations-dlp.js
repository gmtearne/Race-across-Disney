// ============================================================================
// Location pack: Disneyland Paris
// ----------------------------------------------------------------------------
// Same layout as locations-wdw.js and locations-coventry.js: everything for the destination lives in this one file.
// COORDINATES ARE PLACEHOLDERS: the park stops were placed from rough offsets around each park's centre and the hotels
// from approximate positions. Replace lat/lng with real values whenever you have them (nothing else needs to change).
// No vector map and no routes file yet: this location uses OpenStreetMap and straight lines.
// Transit: walk or bus only. Park to park is a walk (no bus links the two parks). Park <-> hotel can be a walk or a bus.
// ============================================================================
window.registerLocation({
    id: "dlp",
    name: "Disneyland Paris",
    region: "europe",
    icon: "🏰",
    blurb: "Disneyland Park, Walt Disney Studios Park, Disney Village and the resort hotels",
    center: { lat: 48.8722, lng: 2.7756 },
    features: { hiddenMickeyBingo: false },

    flavour: {
        tagline: "Think your team can conquer Disneyland Paris? Play The Amazing Mouse Race! 🏁",
        flawless: [
            "Magnifique! Flawless from start to finish. 🥐✨",
            "Parfait! Not a single wrong answer. Even Remy is impressed. 🐀👨‍🍳"
        ],
        roasts: [
            "{guess}? The answer to {question} was {answer}. Even Gusteau would be embarrassed. 🐀🤦",
            "Oh là là! You said {guess} for {question}. It was {answer}. 🥖😬",
            "{question} It was {answer}, not {guess}. The Phantom Manor ghosts are laughing. 👻"
        ]
    },

    access: { noun: "park", hopperLabel: "Park Hopper", hopperAreas: ["Disneyland Park (Paris)", "Walt Disney Studios Park"] },

    map: {
        // No vector map and no routes: OpenStreetMap with straight lines between stops.
        tips: [
            { icon: "fa-compass", color: "text-disneyBlue", title: "Strategic Planning Tip", text: "The two parks sit side by side, so plan a walking loop through one before crossing to the other. Hotels are a short walk or bus ride away." }
        ]
    },

    areas: [
        { name: "Disneyland Park (Paris)",       icon: "🏰" },
        { name: "Walt Disney Studios Park",      icon: "🎬" },
        { name: "Disney Village",                icon: "🛍️" },
        { name: "Disney Resort Hotels (Paris)",  icon: "🏨" }
    ],

    transit: {
        modes: [
            { id: "bus",  label: "Bus",           emoji: "🚌" },
            { id: "none", label: "Walk",          emoji: "🚶" }
        ],
        // Modes valid when starting from an area. Parks and hotels can both start with a walk or a bus.
        areaModes: {
            "Disneyland Park (Paris)":      ["bus", "none"],
            "Walt Disney Studios Park":     ["bus", "none"],
            "Disney Village":               ["bus", "none"],
            "Disney Resort Hotels (Paris)": ["bus", "none"]
        },
        advice: [
            { match: ["disneyland park", "walt disney studios"], text: "The two parks share one entrance plaza, so travel between them is a short walk. There is no bus between the parks. To reach a hotel you can walk or take the bus." },
            { match: ["village"],     text: "Disney Village is a short walk from both parks and from most hotels." },
            { match: ["hotel", "resort", "ranch"], text: "The Disneyland Hotel is a walk from the park entrance. The other hotels are a walk or a short bus ride. Davy Crockett Ranch is further away, so a bus is the practical option." }
        ],
        adviceFallback: "Everything here is a walk or a short bus ride. Park to park is always a walk.",
        // No forced transfers in Paris (park to park is simply a walk).
        transferRules: [],
        transferNoun: "stop",
        transferOther: "Other / not listed",
        transferPoints: []
    },

    stops: [
        { name: "Main Street, U.S.A.", lat: 48.872020, lng: 2.779710, type: "GPS", park: "Disneyland Park (Paris)", land: "Main Street, U.S.A.", riddle: "A lane lined with ice-cream-coloured shopfronts, old-fashioned lamps and a horse-drawn tram. It begins where the steam trains stop and leads to a grand hub." },
        { name: "Liberty Arcade", lat: 48.872515, lng: 2.779299, type: "GPS", park: "Disneyland Park (Paris)", land: "Main Street, U.S.A." },
        { name: "Discovery Arcade", lat: 48.871524, lng: 2.779299, type: "GPS", park: "Disneyland Park (Paris)", land: "Main Street, U.S.A." },
        { name: "Disneyland Railroad (Main Street Station)", lat: 48.872245, lng: 2.780258, type: "GPS", park: "Disneyland Park (Paris)", land: "Main Street, U.S.A.", riddle: "All aboard! A steam locomotive circles the whole park, and its first platform sits right at the front gate under a clock." },
        { name: "Walt's - An American Restaurant", lat: 48.872695, lng: 2.778751, type: "GPS", park: "Disneyland Park (Paris)", land: "Main Street, U.S.A. / Dining" },
        { name: "Sleeping Beauty Castle", lat: 48.872200, lng: 2.775600, type: "GPS", park: "Disneyland Park (Paris)", land: "Fantasyland", riddle: "Pink stone turrets rise over a hub of spires. A fire-breathing creature sleeps in the cellar, and a spinning wheel waits in the tower for a certain princess." },
        { name: "Dragon's Lair (La Tanière du Dragon)", lat: 48.872092, lng: 2.775463, type: "GPS", park: "Disneyland Park (Paris)", land: "Fantasyland" },
        { name: "Peter Pan's Flight", lat: 48.872741, lng: 2.774230, type: "GPS", park: "Disneyland Park (Paris)", land: "Fantasyland", riddle: "Fly over city rooftops on a pirate galleon in the dark. Second star to the right, and straight on till morning." },
        { name: "Dumbo the Flying Elephant", lat: 48.873191, lng: 2.774778, type: "GPS", park: "Disneyland Park (Paris)", land: "Fantasyland" },
        { name: "it's a small world", lat: 48.872470, lng: 2.773271, type: "GPS", park: "Disneyland Park (Paris)", land: "Fantasyland", riddle: "A boat ride that sings the same tune in dozens of languages while dolls from every continent wave. The song will stay in your head for days." },
        { name: "Alice's Curious Labyrinth", lat: 48.871659, lng: 2.773956, type: "GPS", park: "Disneyland Park (Paris)", land: "Fantasyland" },
        { name: "Mad Hatter's Tea Cups", lat: 48.871434, lng: 2.774778, type: "GPS", park: "Disneyland Park (Paris)", land: "Fantasyland", riddle: "Spin in oversized porcelain at a party where it is always the same time of day and the host is quite mad." },
        { name: "Le Pays des Contes de Fées", lat: 48.871389, lng: 2.772312, type: "GPS", park: "Disneyland Park (Paris)", land: "Fantasyland", riddle: "A gentle boat ride past tiny model villages from famous bedtime stories, like a library shrunk to the size of a garden." },
        { name: "Casey Jr. - le Petit Train du Cirque", lat: 48.871930, lng: 2.772175, type: "GPS", park: "Disneyland Park (Paris)", land: "Fantasyland" },
        { name: "Blanche-Neige et les Sept Nains", lat: 48.873011, lng: 2.772723, type: "GPS", park: "Disneyland Park (Paris)", land: "Fantasyland" },
        { name: "Les Voyages de Pinocchio", lat: 48.873101, lng: 2.774504, type: "GPS", park: "Disneyland Park (Paris)", land: "Fantasyland" },
        { name: "Princess Pavilion", lat: 48.872380, lng: 2.774641, type: "GPS", park: "Disneyland Park (Paris)", land: "Fantasyland" },
        { name: "Auberge de Cendrillon", lat: 48.873461, lng: 2.774778, type: "GPS", park: "Disneyland Park (Paris)", land: "Fantasyland / Dining", riddle: "A fairytale inn for a girl who lost a slipper at midnight. Dine among glass-slipper decor while the royal family waves from the tables." },
        { name: "Pizzeria Bella Notte", lat: 48.872110, lng: 2.773819, type: "GPS", park: "Disneyland Park (Paris)", land: "Fantasyland / Dining" },
        { name: "Pirates of the Caribbean", lat: 48.870668, lng: 2.775737, type: "GPS", park: "Disneyland Park (Paris)", land: "Adventureland", riddle: "Yo ho! A cave of cannon fire, skeletons and a treasure-hungry crew. Boats glide through a lagoon while a restaurant gazes down on the show." },
        { name: "La Cabane des Robinson", lat: 48.870488, lng: 2.776422, type: "GPS", park: "Disneyland Park (Paris)", land: "Adventureland", riddle: "A shipwrecked family built an impossible house in a giant tree, complete with running water and a waterwheel." },
        { name: "Indiana Jones et le Temple du Péril", lat: 48.871119, lng: 2.777381, type: "GPS", park: "Disneyland Park (Paris)", land: "Adventureland", riddle: "A mine-cart coaster that turns you upside down in a cursed jungle. A fedora, a whip and a golden idol are all in play." },
        { name: "Le Passage Enchanté d'Aladdin", lat: 48.871389, lng: 2.777792, type: "GPS", park: "Disneyland Park (Paris)", land: "Adventureland" },
        { name: "Colonel Hathi's Pizza Outpost", lat: 48.870849, lng: 2.777107, type: "GPS", park: "Disneyland Park (Paris)", land: "Adventureland / Dining" },
        { name: "Phantom Manor", lat: 48.874002, lng: 2.772997, type: "GPS", park: "Disneyland Park (Paris)", land: "Frontierland", riddle: "A crumbling mansion on a hill, a bride whose wedding went terribly wrong and a very persistent ghost host. The cemetery is for locals only." },
        { name: "Big Thunder Mountain", lat: 48.874632, lng: 2.773545, type: "GPS", park: "Disneyland Park (Paris)", land: "Frontierland", riddle: "A runaway mine train races around a red-rock island in the middle of a river. Hold onto your hat." },
        { name: "Thunder Mesa Riverboat Landing", lat: 48.873371, lng: 2.774230, type: "GPS", park: "Disneyland Park (Paris)", land: "Frontierland" },
        { name: "Silver Spur Steakhouse", lat: 48.873777, lng: 2.774093, type: "GPS", park: "Disneyland Park (Paris)", land: "Frontierland / Dining" },
        { name: "Space Mountain: Mission 2", lat: 48.873551, lng: 2.778477, type: "GPS", park: "Disneyland Park (Paris)", land: "Discoveryland", riddle: "A giant cannon aims at the moon from a purple, copper-trimmed building. Brace yourself for a launch into the dark." },
        { name: "Star Tours: The Adventures Continue", lat: 48.874092, lng: 2.777929, type: "GPS", park: "Disneyland Park (Paris)", land: "Discoveryland" },
        { name: "Buzz Lightyear Laser Blast", lat: 48.874092, lng: 2.779436, type: "GPS", park: "Disneyland Park (Paris)", land: "Discoveryland", riddle: "Grab a blaster and help a space ranger defeat a purple-caped emperor. Every target you hit adds to your score." },
        { name: "Orbitron", lat: 48.873371, lng: 2.779162, type: "GPS", park: "Disneyland Park (Paris)", land: "Discoveryland" },
        { name: "Autopia", lat: 48.874542, lng: 2.777792, type: "GPS", park: "Disneyland Park (Paris)", land: "Discoveryland" },
        { name: "Les Mystères du Nautilus", lat: 48.872741, lng: 2.778751, type: "GPS", park: "Disneyland Park (Paris)", land: "Discoveryland", riddle: "A captain who vanished beneath the waves in a mysterious vessel. Wander through its corridors without getting wet." },
        { name: "Café Hyperion", lat: 48.873281, lng: 2.779299, type: "GPS", park: "Disneyland Park (Paris)", land: "Discoveryland / Dining" },
        { name: "Earful Tower", lat: 48.868550, lng: 2.781200, type: "GPS", park: "Walt Disney Studios Park", land: "Front Lot", riddle: "A water tower wearing a famous pair of round ears watches over the studio gates like a lighthouse for tourists." },
        { name: "Disney Studio 1", lat: 48.868820, lng: 2.781611, type: "GPS", park: "Walt Disney Studios Park", land: "Front Lot" },
        { name: "The Twilight Zone Tower of Terror", lat: 48.867468, lng: 2.779419, type: "GPS", park: "Walt Disney Studios Park", land: "Production Courtyard", riddle: "A grand old hotel where the lift is the main attraction and the guests vanished in a thunderstorm in 1939. Check in if you dare." },
        { name: "Studio Tram Tour: Behind the Magic", lat: 48.867198, lng: 2.781611, type: "GPS", park: "Walt Disney Studios Park", land: "Production Courtyard" },
        { name: "Crush's Coaster", lat: 48.866748, lng: 2.778323, type: "GPS", park: "Walt Disney Studios Park", land: "Toon Studio", riddle: "A spinning coaster through the ocean currents of a seafaring film, with a very laid-back turtle for a guide." },
        { name: "Ratatouille: L'Aventure Totalement Toquée de Rémy", lat: 48.866658, lng: 2.780378, type: "GPS", park: "Walt Disney Studios Park", land: "Toon Studio", riddle: "Shrink to the size of a rat and scamper through a Parisian kitchen. A tiny chef has a very big dream." },
        { name: "Toy Story Playland: RC Racer", lat: 48.867288, lng: 2.777775, type: "GPS", park: "Walt Disney Studios Park", land: "Toon Studio" },
        { name: "Toy Soldiers Parachute Drop", lat: 48.867018, lng: 2.777227, type: "GPS", park: "Walt Disney Studios Park", land: "Toon Studio" },
        { name: "Slinky Dog Zigzag Spin", lat: 48.867108, lng: 2.777501, type: "GPS", park: "Walt Disney Studios Park", land: "Toon Studio" },
        { name: "Les Tapis Volants - Flying Carpets Over Agrabah", lat: 48.867108, lng: 2.779556, type: "GPS", park: "Walt Disney Studios Park", land: "Toon Studio" },
        { name: "Cars Road Trip", lat: 48.867198, lng: 2.778460, type: "GPS", park: "Walt Disney Studios Park", land: "Toon Studio" },
        { name: "Moteurs... Action! Stunt Show Spectacular", lat: 48.867468, lng: 2.783803, type: "GPS", park: "Walt Disney Studios Park", land: "Backlot" },
        { name: "Avengers Campus", lat: 48.867108, lng: 2.783529, type: "GPS", park: "Walt Disney Studios Park", land: "Avengers Campus" },
        { name: "Avengers Assemble: Flight Force", lat: 48.866928, lng: 2.783940, type: "GPS", park: "Walt Disney Studios Park", land: "Avengers Campus", riddle: "A launch coaster for a team of heroes with a helicarrier, a shield and an alien invasion on the way." },
        { name: "Spider-Man W.E.B. Adventure", lat: 48.866748, lng: 2.784488, type: "GPS", park: "Walt Disney Studios Park", land: "Avengers Campus" },
        { name: "Buffalo Bill's Wild West Show", lat: 48.869910, lng: 2.785233, type: "GPS", park: "Disney Village", land: "Disney Village", riddle: "Dinner and a show: a legendary showman, galloping horses and a stampede of shaggy beasts, all under one roof." },
        { name: "Rainforest Cafe", lat: 48.870090, lng: 2.784411, type: "GPS", park: "Disney Village", land: "Disney Village / Dining" },
        { name: "Planet Hollywood", lat: 48.870270, lng: 2.784822, type: "GPS", park: "Disney Village", land: "Disney Village / Dining" },
        { name: "Annette's Diner", lat: 48.869820, lng: 2.784685, type: "GPS", park: "Disney Village", land: "Disney Village / Dining" },
        { name: "King Ludwig's Castle", lat: 48.870225, lng: 2.784959, type: "GPS", park: "Disney Village", land: "Disney Village / Dining" },
        { name: "Disney Store (Disney Village)", lat: 48.869910, lng: 2.784548, type: "GPS", park: "Disney Village", land: "Disney Village / Shopping" },
        { name: "Lake Disney", lat: 48.869189, lng: 2.784137, type: "GPS", park: "Disney Village", land: "Disney Village" },
        { name: "Gaumont Multiplex Cinema", lat: 48.870000, lng: 2.785507, type: "GPS", park: "Disney Village", land: "Disney Village" },
        { name: "Disneyland Hotel", lat: 48.871200, lng: 2.779600, type: "GPS", park: "Disney Resort Hotels (Paris)", land: "Victorian", riddle: "A pink Victorian palace straddling the entrance to the park, with a ceiling of tiny stars in the lobby and a view of the castle from the rooms." },
        { name: "Disney's Hotel New York - The Art of Marvel", lat: 48.867200, lng: 2.786000, type: "GPS", park: "Disney Resort Hotels (Paris)", land: "Marvel / New York", riddle: "A skyscraper-style hotel by the lake that now hosts a gallery of comic-book heroes and a huge shield above its entrance." },
        { name: "Disney's Newport Bay Club", lat: 48.866600, lng: 2.787800, type: "GPS", park: "Disney Resort Hotels (Paris)", land: "Nautical / New England", riddle: "A New England seaside lodge with a lighthouse, a boardwalk and a big blue lake at its door." },
        { name: "Disney's Sequoia Lodge", lat: 48.868000, lng: 2.789500, type: "GPS", park: "Disney Resort Hotels (Paris)", land: "Mountain Lodge", riddle: "A lodge with tall timber beams, a stone fireplace and the feel of a national park holiday." },
        { name: "Disney's Hotel Cheyenne", lat: 48.869000, lng: 2.792500, type: "GPS", park: "Disney Resort Hotels (Paris)", land: "Wild West", riddle: "A wild-west frontier town of wooden facades, a sheriff's office and toy-themed rooms." },
        { name: "Disney's Hotel Santa Fe", lat: 48.870500, lng: 2.795000, type: "GPS", park: "Disney Resort Hotels (Paris)", land: "Southwestern", riddle: "Southwestern adobe style with desert colours, cactus gardens and a famous racing movie for a theme." },
        { name: "Disney's Davy Crockett Ranch", lat: 48.836500, lng: 2.808500, type: "GPS", park: "Disney Resort Hotels (Paris)", land: "Cabins / Camp", riddle: "A wooded camp of log cabins away from the parks, named for a frontiersman in a coonskin cap." },
    ],

    bonuses: [
        { name: "Photo with the Sleeping Beauty Castle behind your whole team", type: "BONUS_PHOTO", bonusMinDeduction: 10, park: "Bonus Challenge", areas: ["Disneyland Park (Paris)", "Walt Disney Studios Park", "Disney Village", "Disney Resort Hotels (Paris)"], land: "Disneyland Park (Paris)" },
        { name: "Photo with a Disney character in costume", type: "BONUS_PHOTO", bonusMinDeduction: 10, park: "Bonus Challenge", areas: ["Disneyland Park (Paris)", "Walt Disney Studios Park", "Disney Village", "Disney Resort Hotels (Paris)"], land: "Characters" },
        { name: "Photo with a French pastry (croissant, pain au chocolat or macaron)", type: "BONUS_PHOTO", bonusMinDeduction: 10, park: "Bonus Challenge", areas: ["Disneyland Park (Paris)", "Walt Disney Studios Park", "Disney Village", "Disney Resort Hotels (Paris)"], land: "Food & Snacks" },
        { name: "Photo of your team in front of the Earful Tower", type: "BONUS_PHOTO", bonusMinDeduction: 10, park: "Bonus Challenge", areas: ["Disneyland Park (Paris)", "Walt Disney Studios Park", "Disney Village", "Disney Resort Hotels (Paris)"], land: "Walt Disney Studios Park" },
        { name: "Photo with an Avengers Campus hero", type: "BONUS_PHOTO", bonusMinDeduction: 10, park: "Bonus Challenge", areas: ["Disneyland Park (Paris)", "Walt Disney Studios Park", "Disney Village", "Disney Resort Hotels (Paris)"], land: "Avengers Campus" },
        { name: "Photo of the team on a Main Street, U.S.A. vehicle", type: "BONUS_PHOTO", bonusMinDeduction: 10, park: "Bonus Challenge", areas: ["Disneyland Park (Paris)", "Walt Disney Studios Park", "Disney Village", "Disney Resort Hotels (Paris)"], land: "Main Street, U.S.A." },
        { name: "Photo of your team pointing at the Eiffel Tower-style details in any shop display", type: "BONUS_PHOTO", bonusMinDeduction: 10, park: "Bonus Challenge", areas: ["Disneyland Park (Paris)", "Walt Disney Studios Park", "Disney Village", "Disney Resort Hotels (Paris)"], land: "Shopping" },
        { name: "Photo in front of Lake Disney", type: "BONUS_PHOTO", bonusMinDeduction: 10, park: "Bonus Challenge", areas: ["Disneyland Park (Paris)", "Walt Disney Studios Park", "Disney Village", "Disney Resort Hotels (Paris)"], land: "Disney Village" },
        { name: "Photo of the team as a famous Disney trio (Mickey, Donald, Goofy) pose", type: "BONUS_PHOTO", bonusMinDeduction: 10, park: "Bonus Challenge", areas: ["Disneyland Park (Paris)", "Walt Disney Studios Park", "Disney Village", "Disney Resort Hotels (Paris)"], land: "Team spirit" },
    ]
});
