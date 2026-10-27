// Trivia for Disneyland Paris stops. Loaded after trivia-data.js, it ADDS to the same database (keyed by stop name; each stop can have easy / medium / hard).
// Answer = index of the correct option.
(function () {
  var db = window.DISNEY_TRIVIA_DATABASE || {};
  // If the main trivia file froze its object, work on a copy so adding Paris can't fail
  if (Object.isFrozen(db) || !Object.isExtensible(db)) db = Object.assign({}, db);
  window.DISNEY_TRIVIA_DATABASE = db;
  Object.assign(db, {
  "Sleeping Beauty Castle": {
    "easy": {
      "q": "Which princess's story inspired the castle at Disneyland Paris?",
      "options": [
        "Cinderella",
        "Snow White",
        "Belle",
        "Sleeping Beauty"
      ],
      "answer": 3
    },
    "medium": {
      "q": "What lives in a lair beneath the castle?",
      "options": [
        "A dragon",
        "A mermaid",
        "A giant spider",
        "A wizard"
      ],
      "answer": 0
    },
    "hard": {
      "q": "What is the castle called in French?",
      "options": [
        "Le Château de la Belle au Bois Dormant",
        "Le Palais de Cendrillon",
        "La Tour de Raiponce",
        "Le Château de la Bête"
      ],
      "answer": 0
    }
  },
  "Dragon's Lair (La Tanière du Dragon)": {
    "easy": {
      "q": "What kind of creature sleeps beneath the castle?",
      "options": [
        "A bear",
        "A dragon",
        "A lion",
        "A unicorn"
      ],
      "answer": 1
    }
  },
  "Phantom Manor": {
    "easy": {
      "q": "What type of attraction is Phantom Manor?",
      "options": [
        "A roller coaster",
        "A water ride",
        "A shooting gallery",
        "A haunted mansion ride"
      ],
      "answer": 3
    },
    "medium": {
      "q": "In which land is Phantom Manor?",
      "options": [
        "Adventureland",
        "Frontierland",
        "Discoveryland",
        "Fantasyland"
      ],
      "answer": 1
    },
    "hard": {
      "q": "What is the name of the bride in the Phantom Manor story?",
      "options": [
        "Madeline Lafayette",
        "Isabelle Thornton",
        "Annabelle Grey",
        "Melanie Ravenswood"
      ],
      "answer": 3
    }
  },
  "Big Thunder Mountain": {
    "easy": {
      "q": "What kind of ride is Big Thunder Mountain?",
      "options": [
        "A log flume",
        "A runaway mine train coaster",
        "A drop tower",
        "A dark boat ride"
      ],
      "answer": 1
    },
    "medium": {
      "q": "Where does the mountain sit in Frontierland?",
      "options": [
        "Inside the castle",
        "Under a lake",
        "On top of a restaurant",
        "On an island in the river"
      ],
      "answer": 3
    },
    "hard": {
      "q": "Which fictional town is Big Thunder Mountain part of?",
      "options": [
        "Thunder Mesa",
        "Dry Gulch",
        "Tombstone Valley",
        "Gold Rush City"
      ],
      "answer": 0
    }
  },
  "Pirates of the Caribbean": {
    "easy": {
      "q": "In which land is Pirates of the Caribbean?",
      "options": [
        "Frontierland",
        "Fantasyland",
        "Adventureland",
        "Discoveryland"
      ],
      "answer": 2
    },
    "medium": {
      "q": "Which restaurant overlooks the Pirates ride?",
      "options": [
        "Blue Lagoon Restaurant",
        "Be Our Guest",
        "Café Hyperion",
        "Silver Spur Steakhouse"
      ],
      "answer": 0
    },
    "hard": {
      "q": "In which year did Disneyland Paris open?",
      "options": [
        "1992",
        "1989",
        "1995",
        "2002"
      ],
      "answer": 0
    }
  },
  "Indiana Jones et le Temple du Péril": {
    "easy": {
      "q": "Which famous archaeologist is the star of this ride?",
      "options": [
        "Lara Croft",
        "Indiana Jones",
        "Jack Sparrow",
        "Nathan Drake"
      ],
      "answer": 1
    },
    "medium": {
      "q": "Which element makes this coaster famous?",
      "options": [
        "A giant drop",
        "A 360-degree loop",
        "A launch into space",
        "A water splash"
      ],
      "answer": 1
    },
    "hard": {
      "q": "In which land is the Temple of Peril?",
      "options": [
        "Frontierland",
        "Discoveryland",
        "Adventureland",
        "Main Street, U.S.A."
      ],
      "answer": 2
    }
  },
  "Space Mountain: Mission 2": {
    "easy": {
      "q": "What kind of ride launches you from a giant cannon?",
      "options": [
        "A log flume",
        "A roller coaster in the dark",
        "A carousel",
        "A monorail"
      ],
      "answer": 1
    },
    "medium": {
      "q": "Which author inspired the original version of the ride?",
      "options": [
        "Roald Dahl",
        "Jules Verne",
        "Isaac Asimov",
        "Agatha Christie"
      ],
      "answer": 1
    },
    "hard": {
      "q": "What was the ride's original French name?",
      "options": [
        "Mission Mars",
        "Voyage vers les Étoiles",
        "Le Grand Cosmos",
        "De la Terre à la Lune"
      ],
      "answer": 3
    }
  },
  "Star Tours: The Adventures Continue": {
    "easy": {
      "q": "Which film saga is Star Tours based on?",
      "options": [
        "Star Trek",
        "Guardians of the Galaxy",
        "Star Wars",
        "Toy Story"
      ],
      "answer": 2
    },
    "medium": {
      "q": "In which land is Star Tours?",
      "options": [
        "Fantasyland",
        "Frontierland",
        "Adventureland",
        "Discoveryland"
      ],
      "answer": 3
    }
  },
  "Peter Pan's Flight": {
    "easy": {
      "q": "What do you fly on in Peter Pan's Flight?",
      "options": [
        "A broomstick",
        "A pirate galleon",
        "A magic carpet",
        "A hot-air balloon"
      ],
      "answer": 1
    },
    "medium": {
      "q": "Which city do you fly over?",
      "options": [
        "Paris",
        "Rome",
        "New York",
        "London"
      ],
      "answer": 3
    },
    "hard": {
      "q": "Who is the captain of the pirate ship?",
      "options": [
        "Captain Jack Sparrow",
        "Captain Nemo",
        "Captain Hook",
        "Captain Flint"
      ],
      "answer": 2
    }
  },
  "Dumbo the Flying Elephant": {
    "easy": {
      "q": "What helps Dumbo fly in the film?",
      "options": [
        "Pixie dust",
        "A balloon",
        "A magic feather",
        "A rocket"
      ],
      "answer": 2
    },
    "medium": {
      "q": "Who is Dumbo's mouse friend?",
      "options": [
        "Gus",
        "Timothy Q. Mouse",
        "Jaq",
        "Basil"
      ],
      "answer": 1
    }
  },
  "it's a small world": {
    "easy": {
      "q": "What do the dolls on the ride do?",
      "options": [
        "Tell jokes",
        "Count to ten",
        "Dance the tango",
        "Sing about world peace"
      ],
      "answer": 3
    },
    "medium": {
      "q": "Which famous brothers wrote the song?",
      "options": [
        "The Wright Brothers",
        "The Marx Brothers",
        "The Jonas Brothers",
        "The Sherman Brothers"
      ],
      "answer": 3
    },
    "hard": {
      "q": "The ride was first created for which event?",
      "options": [
        "The 1939 World's Fair in Paris",
        "The 1964 New York World's Fair",
        "The 1984 Olympics",
        "The 1992 Barcelona Expo"
      ],
      "answer": 1
    }
  },
  "Alice's Curious Labyrinth": {
    "easy": {
      "q": "What is Alice's Curious Labyrinth?",
      "options": [
        "A water slide",
        "A hedge maze",
        "A coaster",
        "A puppet show"
      ],
      "answer": 1
    },
    "medium": {
      "q": "Which character rules this maze?",
      "options": [
        "The Mad Hatter",
        "The White Rabbit",
        "The Caterpillar",
        "The Queen of Hearts"
      ],
      "answer": 3
    }
  },
  "Main Street, U.S.A.": {
    "easy": {
      "q": "Which era inspires Main Street, U.S.A.?",
      "options": [
        "Medieval Europe",
        "The future",
        "The Wild West",
        "Small-town America around 1900"
      ],
      "answer": 3
    },
    "medium": {
      "q": "What are the two covered passages along it called?",
      "options": [
        "Fantasy Arcade and Frontier Arcade",
        "Mickey Arcade and Minnie Arcade",
        "Liberty Arcade and Discovery Arcade",
        "North Arcade and South Arcade"
      ],
      "answer": 2
    },
    "hard": {
      "q": "Which landmark features in the Liberty Arcade exhibition?",
      "options": [
        "The Eiffel Tower",
        "The Statue of Liberty",
        "Big Ben",
        "The Golden Gate Bridge"
      ],
      "answer": 1
    }
  },
  "Disneyland Railroad (Main Street Station)": {
    "easy": {
      "q": "How many stations does the Disneyland Railroad have?",
      "options": [
        "Two",
        "Four",
        "Six",
        "Eight"
      ],
      "answer": 1
    },
    "medium": {
      "q": "Which station is at the front gate?",
      "options": [
        "Main Street Station",
        "Fantasyland Station",
        "Discoveryland Station",
        "Frontierland Station"
      ],
      "answer": 0
    },
    "hard": {
      "q": "Which land does the railroad NOT stop at?",
      "options": [
        "Frontierland",
        "Fantasyland",
        "Adventureland",
        "Discoveryland"
      ],
      "answer": 2
    }
  },
  "Les Mystères du Nautilus": {
    "easy": {
      "q": "Whose submarine is the Nautilus?",
      "options": [
        "Captain Hook",
        "Captain Cook",
        "Captain Nemo",
        "Captain Haddock"
      ],
      "answer": 2
    },
    "medium": {
      "q": "Which author wrote about the Nautilus?",
      "options": [
        "Jules Verne",
        "H. G. Wells",
        "Mark Twain",
        "Jack London"
      ],
      "answer": 0
    },
    "hard": {
      "q": "Which novel features the Nautilus?",
      "options": [
        "Twenty Thousand Leagues Under the Sea",
        "Around the World in Eighty Days",
        "Journey to the Centre of the Earth",
        "Moby-Dick"
      ],
      "answer": 0
    }
  },
  "Buzz Lightyear Laser Blast": {
    "easy": {
      "q": "Which toy hero stars in this ride?",
      "options": [
        "Woody",
        "Buzz Lightyear",
        "Mr. Potato Head",
        "Rex"
      ],
      "answer": 1
    },
    "medium": {
      "q": "Who is the emperor you battle?",
      "options": [
        "Lotso",
        "Emperor Zurg",
        "Sid",
        "Stinky Pete"
      ],
      "answer": 1
    }
  },
  "Autopia": {
    "easy": {
      "q": "What do you drive on Autopia?",
      "options": [
        "Boats",
        "Little cars",
        "Horses",
        "Trams"
      ],
      "answer": 1
    }
  },
  "Orbitron": {
    "easy": {
      "q": "What does Orbitron let you do?",
      "options": [
        "Ride a train",
        "Ride a log",
        "Splash down a flume",
        "Pilot a spinning space-style vehicle"
      ],
      "answer": 3
    }
  },
  "The Twilight Zone Tower of Terror": {
    "easy": {
      "q": "What is the building?",
      "options": [
        "A prison",
        "A school",
        "A castle",
        "A haunted hotel"
      ],
      "answer": 3
    },
    "medium": {
      "q": "What is the hotel called?",
      "options": [
        "Grand Terror Hotel",
        "Tower of London Hotel",
        "Twilight Palace",
        "Hollywood Tower Hotel"
      ],
      "answer": 3
    },
    "hard": {
      "q": "Which classic TV series inspired the ride?",
      "options": [
        "The Twilight Zone",
        "The Addams Family",
        "The X-Files",
        "Doctor Who"
      ],
      "answer": 0
    }
  },
  "Avengers Assemble: Flight Force": {
    "easy": {
      "q": "Which super-team is this ride themed on?",
      "options": [
        "The Justice League",
        "The Fantastic Four",
        "The Incredibles",
        "The Avengers"
      ],
      "answer": 3
    },
    "medium": {
      "q": "Which band starred in the ride that originally stood in the same building?",
      "options": [
        "The Rolling Stones",
        "Aerosmith",
        "Queen",
        "Metallica"
      ],
      "answer": 1
    },
    "hard": {
      "q": "Which area of the park is the ride in?",
      "options": [
        "Toon Studio",
        "Avengers Campus",
        "Backlot",
        "Front Lot"
      ],
      "answer": 1
    }
  },
  "Crush's Coaster": {
    "easy": {
      "q": "Which sea animal is Crush?",
      "options": [
        "A shark",
        "A clownfish",
        "A sea turtle",
        "A dolphin"
      ],
      "answer": 2
    },
    "medium": {
      "q": "Which film is Crush's Coaster based on?",
      "options": [
        "The Little Mermaid",
        "Moana",
        "Luca",
        "Finding Nemo"
      ],
      "answer": 3
    },
    "hard": {
      "q": "What type of coaster is Crush's Coaster?",
      "options": [
        "A spinning coaster",
        "A wooden coaster",
        "A launch coaster",
        "A suspended coaster"
      ],
      "answer": 0
    }
  },
  "Ratatouille: L'Aventure Totalement Toquée de Rémy": {
    "easy": {
      "q": "Who is the star of this ride?",
      "options": [
        "Mickey Mouse",
        "Jerry the mouse",
        "Remy the rat",
        "Stuart Little"
      ],
      "answer": 2
    },
    "medium": {
      "q": "In which city is the film set?",
      "options": [
        "Rome",
        "Madrid",
        "London",
        "Paris"
      ],
      "answer": 3
    },
    "hard": {
      "q": "Who is the famous chef whose restaurant features in the film?",
      "options": [
        "Linguini",
        "Skinner",
        "Gusteau",
        "Colette"
      ],
      "answer": 2
    }
  },
  "Spider-Man W.E.B. Adventure": {
    "easy": {
      "q": "Which hero is the ride about?",
      "options": [
        "Iron Man",
        "Captain America",
        "Thor",
        "Spider-Man"
      ],
      "answer": 3
    },
    "medium": {
      "q": "What does W.E.B. stand for in the ride's name?",
      "options": [
        "Worldwide Engineering Brigade",
        "Web Enhanced Battle",
        "Wall-crawler's Extra Backup",
        "World Emergency Bureau"
      ],
      "answer": 0
    }
  },
  "Cars Road Trip": {
    "easy": {
      "q": "Which film is this ride based on?",
      "options": [
        "Cars",
        "Planes",
        "Turbo",
        "Bolt"
      ],
      "answer": 0
    },
    "medium": {
      "q": "What is the name of the town in the film?",
      "options": [
        "Radiator Springs",
        "Gear City",
        "Motor Town",
        "Piston Peak"
      ],
      "answer": 0
    }
  },
  "Toy Soldiers Parachute Drop": {
    "easy": {
      "q": "Which toy characters are the parachutists?",
      "options": [
        "Lego people",
        "Barbie dolls",
        "Green Army Men",
        "Teddy bears"
      ],
      "answer": 2
    },
    "medium": {
      "q": "Which film are they from?",
      "options": [
        "Cars",
        "Toy Story",
        "Frozen",
        "Moana"
      ],
      "answer": 1
    }
  },
  "Toy Story Playland: RC Racer": {
    "easy": {
      "q": "Which film is Toy Story Playland based on?",
      "options": [
        "Cars",
        "Monsters, Inc.",
        "Up",
        "Toy Story"
      ],
      "answer": 3
    }
  },
  "Slinky Dog Zigzag Spin": {
    "easy": {
      "q": "Which character is a dog with a spring body?",
      "options": [
        "Rex",
        "Bullseye",
        "Slinky Dog",
        "Hamm"
      ],
      "answer": 2
    }
  },
  "Les Tapis Volants - Flying Carpets Over Agrabah": {
    "easy": {
      "q": "Which film is the ride based on?",
      "options": [
        "The Lion King",
        "Mulan",
        "Tarzan",
        "Aladdin"
      ],
      "answer": 3
    },
    "medium": {
      "q": "In which area of the park is the ride?",
      "options": [
        "Backlot",
        "Toon Studio",
        "Front Lot",
        "Avengers Campus"
      ],
      "answer": 1
    }
  },
  "Moteurs... Action! Stunt Show Spectacular": {
    "easy": {
      "q": "What do you watch at Moteurs... Action!?",
      "options": [
        "A stunt show with cars and motorbikes",
        "A puppet show",
        "A water show",
        "A fashion show"
      ],
      "answer": 0
    },
    "medium": {
      "q": "Which area of the park hosts it?",
      "options": [
        "Backlot",
        "Toon Studio",
        "Front Lot",
        "Avengers Campus"
      ],
      "answer": 0
    }
  },
  "Studio Tram Tour: Behind the Magic": {
    "easy": {
      "q": "What do you ride on this attraction?",
      "options": [
        "A gondola",
        "A tram",
        "A boat",
        "A monorail"
      ],
      "answer": 1
    },
    "medium": {
      "q": "Which spectacular film set does the tram pass through?",
      "options": [
        "Pirate Bay",
        "Rocket Ridge",
        "Hollywood Hills",
        "Catastrophe Canyon"
      ],
      "answer": 3
    }
  },
  "Earful Tower": {
    "easy": {
      "q": "What sits on top of the Earful Tower?",
      "options": [
        "A star",
        "A clock",
        "A flag",
        "Mickey ears"
      ],
      "answer": 3
    },
    "medium": {
      "q": "Where in the park will you find it?",
      "options": [
        "At the back of Toon Studio",
        "Near the entrance",
        "Inside the Backlot",
        "Beside the lake"
      ],
      "answer": 1
    }
  },
  "Buffalo Bill's Wild West Show": {
    "easy": {
      "q": "Which famous showman gives his name to this dinner show?",
      "options": [
        "Wild Bill Hickok",
        "Davy Crockett",
        "Annie Oakley",
        "Buffalo Bill"
      ],
      "answer": 3
    },
    "medium": {
      "q": "Where is the show held?",
      "options": [
        "Magic Kingdom",
        "Fantasyland",
        "Disney Village",
        "Backlot"
      ],
      "answer": 2
    }
  },
  "Annette's Diner": {
    "easy": {
      "q": "Which decade does Annette's Diner imitate?",
      "options": [
        "The 1920s",
        "The 1980s",
        "The 1950s",
        "The 1700s"
      ],
      "answer": 2
    }
  },
  "King Ludwig's Castle": {
    "easy": {
      "q": "In which area of the resort is King Ludwig's Castle?",
      "options": [
        "Main Street, U.S.A.",
        "Disney Village",
        "Adventureland",
        "Avengers Campus"
      ],
      "answer": 1
    }
  },
  "Lake Disney": {
    "easy": {
      "q": "What is found at the heart of the Disney Village area?",
      "options": [
        "Lake Disney",
        "A volcano",
        "A ski slope",
        "A canal"
      ],
      "answer": 0
    }
  },
  "Disneyland Hotel": {
    "easy": {
      "q": "Where is the Disneyland Hotel?",
      "options": [
        "On Lake Disney",
        "Right at the entrance to the park",
        "In the Village",
        "Far from the parks"
      ],
      "answer": 1
    },
    "medium": {
      "q": "Which architectural style does the Disneyland Hotel use?",
      "options": [
        "Art Deco",
        "Brutalist",
        "Gothic",
        "Victorian"
      ],
      "answer": 3
    }
  },
  "Disney's Hotel New York - The Art of Marvel": {
    "easy": {
      "q": "Which comic universe themes this hotel?",
      "options": [
        "DC",
        "Star Wars",
        "Pixar",
        "Marvel"
      ],
      "answer": 3
    },
    "medium": {
      "q": "What was the hotel called before it became The Art of Marvel?",
      "options": [
        "Hotel Manhattan",
        "Hotel New York",
        "Hotel Brooklyn",
        "Hotel Empire"
      ],
      "answer": 1
    }
  },
  "Disney's Newport Bay Club": {
    "easy": {
      "q": "Which coast inspires Newport Bay Club?",
      "options": [
        "The Mediterranean",
        "Florida",
        "California",
        "New England"
      ],
      "answer": 3
    },
    "medium": {
      "q": "What is beside the hotel?",
      "options": [
        "A volcano",
        "A canal",
        "Lake Disney",
        "A forest"
      ],
      "answer": 2
    }
  },
  "Disney's Sequoia Lodge": {
    "easy": {
      "q": "What kind of lodge is Sequoia Lodge?",
      "options": [
        "A beach hut",
        "A castle",
        "A national park lodge",
        "A space station"
      ],
      "answer": 2
    }
  },
  "Disney's Hotel Cheyenne": {
    "easy": {
      "q": "Which theme does Hotel Cheyenne use?",
      "options": [
        "The Arctic",
        "The Jungle",
        "Medieval Europe",
        "The Wild West"
      ],
      "answer": 3
    }
  },
  "Disney's Hotel Santa Fe": {
    "easy": {
      "q": "Which landscape inspires Hotel Santa Fe?",
      "options": [
        "The American Southwest desert",
        "The Alps",
        "The Caribbean",
        "The Arctic"
      ],
      "answer": 0
    }
  },
  "Disney's Davy Crockett Ranch": {
    "easy": {
      "q": "Who is the ranch named after?",
      "options": [
        "A cartoon dog",
        "A French king",
        "A famous American frontiersman",
        "A space ranger"
      ],
      "answer": 2
    },
    "medium": {
      "q": "What type of accommodation is found here?",
      "options": [
        "High-rise rooms",
        "Boats",
        "Log cabins",
        "Igloos"
      ],
      "answer": 2
    }
  }
});
})();
