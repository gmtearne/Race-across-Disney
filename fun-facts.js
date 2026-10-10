/* =====================================================================
   FUN FACTS — shown in the checkpoint pop-up while teams wait or walk.
   Just data (like trivia-data.js), so you can add to it without touching index.html.

   Lookup order for a stop (all of these are combined, most specific first):
     1) LOCATION_FUN_FACTS — key = the EXACT checkpoint name from locations-data.js
     2) PATTERN_FUN_FACTS  — facts shared by a group of stops, matched on name and/or land
                             (e.g. every "Fab 50:" statue, every Galaxy's Edge stop)
     3) PARK_FUN_FACTS     — fallback for any stop whose park name contains the key

   A stop with nothing in any list simply shows no fun-fact box.
   Keep facts short (1–2 sentences) and don't give away directions —
   in Hard mode the fun fact is the only thing the pop-up shows.
   ===================================================================== */

window.LOCATION_FUN_FACTS = {

    /* ---------------- MAGIC KINGDOM ---------------- */
    "Cinderella Castle": [
        "Cinderella Castle stands about 189 feet tall, and forced perspective makes it look even taller.",
        "Inside the castle entrance, five mosaic murals tell Cinderella's story using more than a million pieces of glass tile."
    ],
    "Space Mountain": [
        "Space Mountain at Magic Kingdom opened in 1975.",
        "It tops out at under 30 mph, but riding in the dark makes it feel much faster."
    ],
    "Haunted Mansion": [
        "The Haunted Mansion is said to be home to 999 happy haunts, with room for one more.",
        "Magic Kingdom's mansion is styled as a Hudson Valley Dutch Gothic house, which fits its spot in Liberty Square."
    ],
    "Big Thunder Mountain Railroad": [
        "Big Thunder Mountain Railroad opened at Magic Kingdom in 1980.",
        "The story is a runaway mine train in a gold-rush town in the American Southwest."
    ],
    "Pirates of the Caribbean": [
        "Pirates of the Caribbean was the last attraction Walt Disney personally helped design. It opened at Magic Kingdom in 1973.",
        "The ride inspired the Pirates of the Caribbean films, which started in 2003."
    ],
    "Tiana's Bayou Adventure": [
        "Tiana's Bayou Adventure opened in 2024 in the mountain and flume that used to hold Splash Mountain.",
        "It's themed to The Princess and the Frog and finishes with a 50-foot drop."
    ],
    "Seven Dwarfs Mine Train": [
        "Seven Dwarfs Mine Train opened in Fantasyland in 2014.",
        "The mine cars swing from side to side as they travel through the track."
    ],
    "Peter Pan's Flight": [
        "Peter Pan's Flight has been at Magic Kingdom since opening day in 1971.",
        "The ride vehicles hang from an overhead track, so you seem to fly over London and Neverland."
    ],
    "It's a Small World": [
        "It's a Small World was created for the 1964 New York World's Fair before coming to Disney parks.",
        "Its theme song was written by the Sherman Brothers, who also wrote songs for Mary Poppins."
    ],
    "Dumbo the Flying Elephant": [
        "Dumbo moved into Storybook Circus in 2012 and now has two spinning rides, which helps cut the wait.",
        "Dumbo has been at Magic Kingdom since opening day in 1971."
    ],
    "Buzz Lightyear's Space Ranger Spin": [
        "Buzz Lightyear's Space Ranger Spin opened at Magic Kingdom in 1998.",
        "You score points by shooting targets with a laser blaster mounted on your ride vehicle."
    ],
    "Tron Lightcycle / Run": [
        "Tron Lightcycle / Run opened at Magic Kingdom in 2023.",
        "You ride leaning forward on a lightcycle-style seat, and the launch gets you to around 60 mph very quickly."
    ],
    "Emporium Gift Shop": [
        "Main Street, U.S.A. is inspired by small-town America around 1900, and by Walt Disney's boyhood town of Marceline, Missouri."
    ],
    "Main Street Confectionery": [
        "Main Street, U.S.A. is inspired by small-town America around 1900, and by Walt Disney's boyhood town of Marceline, Missouri."
    ],
    "Cinderella's Royal Table": [
        "Cinderella's Royal Table is inside Cinderella Castle. Before it was a princess dining room, the space was called King Stefan's Banquet Hall."
    ],
    "Be Our Guest Restaurant": [
        "Be Our Guest has three themed dining rooms inspired by Beauty and the Beast, including the Grand Ballroom and the West Wing."
    ],
    "Pecos Bill Tall Tale Inn & Cafe": [
        "Pecos Bill is a Wild West folk hero who starred in Disney's 1948 film Melody Time."
    ],

    /* ---------------- EPCOT ---------------- */
    "Spaceship Earth": [
        "Spaceship Earth is about 180 feet tall, and its outer shell is made of 11,324 triangular panels.",
        "It's a geodesic sphere, not a dome. Most of the sphere is hidden because it sits on legs above the ground."
    ],
    "Guardians of the Galaxy: Cosmic Rewind": [
        "Cosmic Rewind opened in 2022 in the building that used to hold Universe of Energy and Ellen's Energy Adventure.",
        "The ride vehicles can rotate to face different directions as you travel through the story."
    ],
    "Test Track": [
        "Test Track hit about 65 mph on the outdoor speed run at the end of the ride.",
        "Test Track opened in 1999 and was reimagined in 2012 so you can design your own vehicle."
    ],
    "Soarin' Around the World": [
        "Soarin' lifts you about 40 feet into the air in front of a giant dome screen.",
        "Scents like orange groves and pine trees are released during the flight to match what you see."
    ],
    "Frozen Ever After (Norway)": [
        "Frozen Ever After opened in 2016 on the site of the old Maelstrom ride in the Norway pavilion."
    ],
    "Remy's Ratatouille Adventure (France)": [
        "Remy's Ratatouille Adventure opened in 2021, and you ride a trackless vehicle shrunk down to rat size.",
        "The ride is set in the kitchen of Gusteau's restaurant from the film Ratatouille."
    ],

    /* ---------------- HOLLYWOOD STUDIOS ---------------- */
    "Twilight Zone Tower of Terror": [
        "The Twilight Zone Tower of Terror stands about 199 feet tall.",
        "The story begins on Halloween night in 1939, when guests vanish from a hotel elevator during a lightning storm."
    ],
    "Rock 'n' Roller Coaster": [
        "Rock 'n' Roller Coaster launches from 0 to 57 mph in under 3 seconds.",
        "The ride vehicles look like stretch limos and play Aerosmith music through the speakers."
    ],
    "Star Wars: Rise of the Resistance": [
        "Rise of the Resistance opened in December 2019, a few months after Galaxy's Edge opened.",
        "The ride combines several ride types, including trackless vehicles, a walk-through scene, and a drop."
    ],
    "Millennium Falcon: Smugglers Run": [
        "Six riders crew the Millennium Falcon: two pilots, two gunners and two engineers.",
        "The ride has you take part in a smuggling run for Hondo Ohnaka."
    ],
    "Toy Story Mania!": [
        "Toy Story Mania! opened at Disney's Hollywood Studios in 2008. You wear 3D glasses and fire at carnival-style targets.",
        "The ride is set inside Andy's room, so you're shrunk down to toy size to play the midway games."
    ],
    "Slinky Dog Dash": [
        "Slinky Dog Dash opened in Toy Story Land in 2018.",
        "The coaster is set among giant toys, and the train is built to look like Slinky Dog's springy body."
    ],
    "Oga's Cantina": [
        "The music at Oga's Cantina is played by DJ R-3X, a former Star Tours pilot droid."
    ],
    "The Hollywood Brown Derby": [
        "The Hollywood Brown Derby is named after the original Brown Derby restaurants in Hollywood, where the Cobb salad was invented."
    ],

    /* ---------------- ANIMAL KINGDOM ---------------- */
    "Avatar Flight of Passage": [
        "Flight of Passage opened in 2017, and you fly on the back of a banshee in a 3D flight simulator.",
        "The seat you straddle moves as if the banshee is breathing beneath you."
    ],
    "Expedition Everest": [
        "Expedition Everest's mountain stands about 199.5 feet tall, just under 200 feet.",
        "Part of the track sends your train backwards through the dark inside the mountain."
    ],
    "Kilimanjaro Safaris": [
        "The savanna spans about 110 acres, and hidden barriers keep the animals apart from you without fences.",
        "Real giraffes, zebras, rhinos and many more animals roam across the savanna."
    ],
    "Tree of Life Roots": [
        "The Tree of Life is about 145 feet tall and has more than 300 animals carved into its trunk and roots.",
        "Inside the tree is a 3D show called It's Tough to Be a Bug!"
    ],
    "Tiffins Restaurant & Nomad Lounge": [
        "A tiffin is a traditional lunch tin or box carried in India."
    ],

    /* ---------------- DISNEY SPRINGS ---------------- */
    "World of Disney Store": [
        "World of Disney is billed as the largest Disney merchandise store in the world."
    ],
    "Aerophile Balloon Ascent": [
        "The balloon is tethered to the ground and lifts you around 400 feet over Disney Springs."
    ],

    /* ---------------- DISNEY RESORTS ---------------- */
    "Pioneer Hall (Fort Wilderness)": [
        "Fort Wilderness opened in 1971, and Pioneer Hall has hosted the Hoop-Dee-Doo Musical Revue dinner show since 1974."
    ],
    "Grand Floridian Resort Entrance": [
        "The Grand Floridian opened in 1988 and is styled after grand Victorian seaside hotels."
    ],
    "Contemporary Resort Lobby": [
        "The Contemporary opened in 1971, and the monorail glides right through the middle of the building."
    ],
    "Polynesian Village Resort Lobby": [
        "The Polynesian Village opened in 1971 as one of the original Walt Disney World resorts."
    ],
    "Disney's Riviera Resort (Skyliner Station)": [
        "Disney's Riviera Resort opened in 2019 and is linked to EPCOT and Hollywood Studios by Skyliner gondola."
    ],
    "Caribbean Beach Resort Skyliner Hub": [
        "Caribbean Beach is the central transfer station where the Disney Skyliner routes meet."
    ],
    "Art of Animation & Pop Century Skyliner": [
        "Pop Century and Art of Animation share a Skyliner station. Pop Century opened in 2003 and is themed to decades of the 20th century."
    ],
    "Disney's BoardWalk Inn Entrance": [
        "BoardWalk Inn opened in 1996 and is themed after the boardwalks of 1930s Atlantic City."
    ],
    "Animal Kingdom Lodge (Jambo House)": [
        "Animal Kingdom Lodge opened in 2001, and many rooms overlook a savanna with giraffes, zebras and more.",
        "\"Jambo\" is a Swahili greeting, which is where the name of the Jambo House building comes from."
    ]
};

/* Facts shared by whole groups of stops. `name` and `land` are regexes; either (or both) can be used. */
window.PATTERN_FUN_FACTS = [
    { name: /^Fab 50:/i, facts: [
        "The Fab 50 statues were added for Walt Disney World's 50th anniversary, with 50 character statues spread across the four theme parks."
    ]},
    { land: /Galaxy's Edge/i, facts: [
        "Star Wars: Galaxy's Edge is set on the planet Batuu, at a trading port called Black Spire Outpost."
    ]},
    { land: /Toy Story Land/i, facts: [
        "Toy Story Land makes you feel shrunk to toy size in Andy's backyard. It opened in 2018."
    ]},
    { land: /Pandora/i, facts: [
        "Pandora - The World of Avatar opened in 2017 and is filled with floating mountains and glowing plants inspired by the film Avatar."
    ]},
    { land: /Africa/i, facts: [
        "Harambe, the fictional village in the Africa area, is named after a Swahili word that means roughly \"all pull together\"."
    ]},
    { land: /\(Mexico/i, facts: [
        "The Mexico pavilion sits inside a pyramid inspired by Mayan temples, with a twilight sky painted over the indoor plaza."
    ]},
    { land: /\(Norway/i, facts: [
        "The Norway pavilion includes a replica of a traditional wooden stave church."
    ]},
    { land: /\(China/i, facts: [
        "The China pavilion's centerpiece is a replica of Beijing's Temple of Heaven."
    ]},
    { land: /\(Germany/i, facts: [
        "The Germany pavilion's plaza is topped by a statue of St. George slaying a dragon."
    ]},
    { land: /\(Italy/i, facts: [
        "The Italy pavilion has a replica of Venice's Doge's Palace and a bell tower that echoes St. Mark's Campanile."
    ]},
    { land: /\(American/i, facts: [
        "The American Adventure tells the story of US history using Audio-Animatronic figures in a Colonial-style building."
    ]},
    { land: /\(Japan/i, facts: [
        "The Japan pavilion's pagoda is modeled on a historic temple in Nara, Japan."
    ]},
    { land: /\(Morocco/i, facts: [
        "King Hassan II of Morocco sent skilled artisans to help create the tilework and carvings in the Morocco pavilion."
    ]},
    { land: /\(France/i, facts: [
        "The France pavilion has a small replica of the Eiffel Tower at about one-tenth the size of the original."
    ]},
    { land: /\(UK/i, facts: [
        "The UK pavilion is made up of English village buildings, including a thatched-roof cottage inspired by Anne Hathaway's cottage."
    ]},
    { land: /\(Canada/i, facts: [
        "The Canada pavilion's gardens are inspired by Butchart Gardens in British Columbia."
    ]}
];

window.PARK_FUN_FACTS = {
    "magic kingdom": [
        "Magic Kingdom opened on October 1, 1971, and is one of the most visited theme parks in the world.",
        "Cinderella Castle stands about 189 feet tall.",
        "Beneath Magic Kingdom is a network of tunnels called the Utilidors, which let cast members move around backstage."
    ],
    "epcot": [
        "EPCOT opened on October 1, 1982. The name originally stood for Experimental Prototype Community of Tomorrow.",
        "World Showcase has 11 country pavilions arranged around a lagoon.",
        "Spaceship Earth is about 180 feet tall."
    ],
    "hollywood studios": [
        "Disney's Hollywood Studios opened on May 1, 1989, as Disney-MGM Studios, and was renamed in 2008.",
        "Star Wars: Galaxy's Edge opened here in 2019.",
        "Rock 'n' Roller Coaster launches from 0 to 57 mph in under 3 seconds."
    ],
    "animal kingdom": [
        "Disney's Animal Kingdom opened on April 22, 1998, which is Earth Day.",
        "The Tree of Life is about 145 feet tall and has more than 300 animals carved into its trunk and roots.",
        "Pandora - The World of Avatar opened here in 2017."
    ],
    "springs": [
        "Disney Springs was called Downtown Disney until 2015.",
        "The area first opened in 1975 as the Lake Buena Vista Shopping Village.",
        "Disney Springs is themed as a Florida waterfront town that grew up around natural springs."
    ],
    "resorts": [
        "The Disney Skyliner gondola system opened in September 2019.",
        "The monorail resorts are the Contemporary, the Polynesian Village and the Grand Floridian."
    ]
};
