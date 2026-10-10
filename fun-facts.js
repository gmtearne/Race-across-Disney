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

    /* =================================================================
       COVENTRY: CITY CENTRE
       ================================================================= */
    "Coventry Cathedral (New)": [
        "The new cathedral was designed by Sir Basil Spence and consecrated in 1962.",
        "It stands right alongside the ruins of the old cathedral as a symbol of peace and reconciliation.",
        "The cathedral features a massive tapestry designed by Graham Sutherland, once the largest single-weave tapestry in the world."
    ],
    "St Michael's Cathedral Ruins": [
        "The 14th-century cathedral was heavily damaged during the Blitz on November 14, 1940.",
        "The spire still stands at 295 feet tall, making it the third highest cathedral spire in England.",
        "The Charred Cross inside was fashioned from two burned wooden roof timbers recovered after the air raid."
    ],
    "Lady Godiva Statue (Broadgate)": [
        "The bronze statue depicting Lady Godiva on horseback was unveiled in 1949 by Sir William Reid Dick.",
        "Legend says Lady Godiva rode naked through the streets in the 11th century to protest her husband's harsh taxes.",
        "The clock behind the statue features mechanical figures of Lady Godiva and Peeping Tom every hour."
    ],
    "Coventry Transport Museum": [
        "The museum houses the world's largest public collection of British road transport.",
        "It contains both Thrust2 and ThrustSSC, the supersonic cars that held and broke the world land speed records.",
        "Coventry was known as the 'Detroit of Britain' due to its pioneering bicycle and motor industries."
    ],
    "The Wave Waterpark": [
        "The Wave is an award-winning indoor waterpark that cost £36 million to construct.",
        "It features six high-speed digital water slides, a wave pool, and a lazy river.",
        "The building's unique circular design is wrapped in a distinctive metal mesh screen."
    ],
    "Herbert Art Gallery & Museum": [
        "The museum is named after Sir Alfred Herbert, a local industrialist who donated the funds to build it.",
        "It houses extensive collections covering local history, visual arts, and natural history.",
        "It previously hosted 'Dippy', the famous Natural History Museum Diplodocus skeleton tour."
    ],
    "St Mary's Guildhall": [
        "Dating back to 1342, St Mary's Guildhall is one of the finest surviving medieval guildhalls in the UK.",
        "Mary, Queen of Scots was held prisoner inside the guildhall in 1569.",
        "It holds the Coventry Tapestry, a stunning 500-year-old Flemish textile still hanging on its original wall."
    ],
    "Belgrade Theatre": [
        "Opened in 1958, it was the first civic theatre built in Britain after the Second World War.",
        "It was named in gratitude to the Serbian capital of Belgrade, which gifted timber to help rebuild the city.",
        "It is famous for originating the Theatre in Education (TiE) movement in 1965."
    ],
    "Holy Trinity Church": [
        "Holy Trinity is one of the few medieval buildings in Coventry's city centre to survive the Blitz intact.",
        "Inside is the magnificent 1430s 'Doom Painting', a wall fresco depicting the Last Judgment.",
        "The spire reaches 237 feet into the skyline and was rebuilt in 1667 after blowing down in a storm."
    ],
    "Lower Precinct Shopping Centre": [
        "Built in the 1950s, Lower Precinct was part of Sir Donald Gibson's revolutionary post-war pedestrianised city plan.",
        "It features the iconic Ernest Cole mural above the entrance depicting local historic figures.",
        "It was one of the first multi-level pedestrian shopping precincts designed in Europe."
    ],
    "West Orchards Shopping Centre": [
        "West Orchards opened in 1991 on the historic site of former orchard gardens.",
        "The central atrium features a prominent indoor food court with a large glass curtain wall.",
        "It spans over 220,000 square feet of retail space in the heart of the city centre."
    ],
    "Coventry Railway Station": [
        "Opened in 1962 as part of the post-war reconstruction, it is now a Grade II listed modernist building.",
        "It was designed with an open glass concourse that was revolutionary for British railway architecture at the time.",
        "A major redevelopment in 2022 added a brand new multi-story entrance bay and bus interchange."
    ],
    "Skydome Arena / Ice Rink": [
        "The Skydome Arena is a 3,000-seat multi-purpose arena that opened in 1999.",
        "It serves as the home ice rink for the Coventry Blaze ice hockey team.",
        "The complex also features an ODEON cinema, gym, and various entertainment venues."
    ],
    "Coventry Market": [
        "Coventry Market opened in 1958 and features a unique circular layout with a rooftop car park.",
        "The interior walls are decorated with historic murals painted by artist David Anderson.",
        "It won the award for Britain's Best Indoor Market in 2007."
    ],
    "The Phoenix Pub": [
        "Formerly known as The Sir Charles Napier, the pub has been a favorite student hub for decades.",
        "It sits close to the university and is known for live sports, craft beers, and pub quizzes.",
        "The pub takes its name from the mythical bird symbolizing Coventry's rebirth from wartime ash."
    ],

    /* =================================================================
       COVENTRY: CV6 AREA
       ================================================================= */
    "The Craftsman Pub": [
        "A long-standing local community pub located in the heart of Holbrooks.",
        "Known for hosting local sports teams, dart tournaments, and traditional pub gatherings.",
        "It reflects the suburban industrial history of the surrounding neighborhood."
    ],
    "Glentworth Fish and Chips": [
        "Glentworth Fish and Chips is a beloved local eatery serving traditional British fish and chips for years.",
        "Known among Holbrooks locals for its golden batter and generous portions.",
        "It sits on a historic trade route running through CV6."
    ],
    "Morrisons Parkgate Road": [
        "This major supermarket site was built to serve the growing residential area of CV6.",
        "It sits near historical tractor and engine manufacturing hubs that once defined Holbrooks.",
        "It features a wide range of services including a fuel station and local recycling center."
    ],
    "CBS Arena (Coventry Building Society Arena)": [
        "Opened in 2005 as the Ricoh Arena, it has a capacity of over 32,600 seats.",
        "It is the home stadium of Coventry City Football Club (the Sky Blues).",
        "It hosted football matches during the 2012 London Olympic Games."
    ],
    "Arena Park Shopping Centre": [
        "Located adjacent to the CBS Arena, this retail park features one of the largest Tesco Extra stores in the UK.",
        "Built on former industrial brownfield land as part of the late-1990s regeneration of northern Coventry.",
        "It offers direct access to the Arena railway station."
    ],
    "Keresley Jubilee Wood": [
        "Planted in 2012 to celebrate the Diamond Jubilee of Queen Elizabeth II.",
        "Spans over 12 acres of young native woodland, wildflower meadows, and walking paths.",
        "It provides an important green corridor and wildlife habitat in the CV6 area."
    ],
    "The Royal Oak Keresley": [
        "A traditional country-style pub serving the historic parish of Keresley.",
        "Features a spacious beer garden and serves classic British pub meals.",
        "The name 'Royal Oak' commemorates King Charles II hiding in an oak tree in 1651."
    ],
    "The Hare and Hounds Keresley": [
        "A classic pub building situated on the rural border of Keresley village.",
        "Popular stop for walkers exploring the surrounding Warwickshire countryside and trails.",
        "Offers traditional hospitality and seasonal food menus."
    ],
    "Keresley Community Centre": [
        "A vital local hub offering space for community groups, events, and youth activities.",
        "Supported by local volunteers to bring the Keresley and CV6 community together.",
        "Hosts regular markets, fitness classes, and neighborhood meetings."
    ],
    "Holbrooks Park": [
        "A large public park featuring sports pitches, play areas, and tree-lined walking avenues.",
        "It serves as a key recreational space for families across CV6.",
        "Home to community sports events and annual neighborhood gatherings."
    ],
    "The Wheel Pub Holbrooks": [
        "A traditional neighborhood pub named in nod to Coventry's rich wheel, cycle, and motor heritage.",
        "A popular spot for locals to gather for live sports and weekend entertainment.",
        "Sits conveniently close to Holbrooks Park."
    ],
    "Foleshill Community Centre": [
        "Located in one of Coventry's most culturally diverse and vibrant districts.",
        "Offers a wide array of multi-cultural services, workshops, and community events.",
        "Serves as a cornerstone for local integration and support in CV6."
    ],
    "Broad Street Meeting Hall": [
        "A historic meeting place in Foleshill with deep roots in local civic and religious history.",
        "Has served various community assemblies, youth groups, and charity functions over the decades.",
        "Preserves 19th-century architectural elements unique to the area."
    ],
    "Coventry Canal Basin": [
        "The canal basin was completed in 1769 and served as the terminus for the Coventry Canal.",
        "It was vital for transporting coal from northern Warwickshire to the city's factories.",
        "Today it is a restored heritage quarter featuring craft workshops, art studios, and historic warehouses."
    ],
    "Longford Park": [
        "The largest park in the north of Coventry, covering over 60 acres.",
        "Features the River Sowe running through it, along with a nature reserve, duck pond, and play spaces.",
        "Home to Longford Park Disc Golf course and a community-run bistro."
    ],
    "Daisychain Park": [
        "A charming local green space and playground located in the Edgwick/Foleshill area.",
        "Designed specifically as a safe play environment for young children and local families.",
        "Maintained with community involvement to preserve local urban nature."
    ],

    /* =================================================================
       COVENTRY: COOMBE ABBEY & BINLEY
       ================================================================= */
    "Coombe Abbey Hotel Entrance": [
        "Coombe Abbey was originally founded as a Cistercian monastery in the 12th century (1150).",
        "It played a role in the Gunpowder Plot of 1605; conspirators tried to kidnap Princess Elizabeth who was staying here.",
        "It was converted into a luxury country house hotel surrounded by 500 acres of parkland."
    ],
    "Coombe Abbey Visitor Centre": [
        "The visitor centre acts as the gateway to Coombe Abbey Country Park's historic grounds.",
        "The surrounding parkland was landscaped in the 18th century by the famous landscape architect Capability Brown.",
        "It provides information on local wildlife, walking routes, and discovery trails."
    ],
    "Go Ape Coombe Abbey": [
        "Features high ropes courses, zip lines, and treetop adventures set among historic oak trees.",
        "Includes a dramatic 200-meter zip wire soaring over the park grounds.",
        "Designed to offer varying difficulty levels for adults and families alike."
    ],
    "Coombe Pool Fishing Lake": [
        "Coombe Pool is an 80-acre lake created by Capability Brown by damming the local brook.",
        "It is one of the premier coarse fishing waters in the Midlands.",
        "The lake is a designated Site of Special Scientific Interest (SSSI) due to its wetland habitats."
    ],
    "Coombe Abbey Heronry": [
        "The park is home to one of the largest grey heron colonies in Warwickshire.",
        "Bird hides along the lake allow visitors to observe breeding herons, swans, and rare waterfowl.",
        "Specialist conservation efforts help protect the nesting trees around the lake margin."
    ],
    "Binley Woods Village Hall": [
        "Serves as the social and civic center for the village of Binley Woods.",
        "Binley Woods gained fame as the filming location for Hyacinth Bucket's house in the BBC comedy 'Keeping Up Appearances'.",
        "Hosts local clubs, polling stations, and community celebrations."
    ],
    "The Rose & Crown Binley": [
        "A historic roadside pub offering traditional meals and real ales.",
        "Sits along an ancient thoroughfare connecting Coventry to Rugby and eastern villages.",
        "Features a comfortable garden area popular during summer months."
    ],
    "Warwickshire Shopping Park": [
        "A modern retail destination in Binley featuring major high street brands and eateries.",
        "Built to serve eastern Coventry and the surrounding rural villages.",
        "Designed with energy-efficient shopping storefronts and spacious parking."
    ],
    "Binley Fire Station": [
        "A key emergency response station serving eastern Coventry and surrounding rural areas.",
        "Equipped with specialized rescue appliances for major transport corridors like the A46.",
        "Actively participates in local community fire safety education."
    ],

    /* =================================================================
       COVENTRY: OTHER NOTABLE LOCATIONS
       ================================================================= */
    "War Memorial Park (Cenotaph)": [
        "Opened in 1921 to commemorate the 2,587 Coventry citizens who died in the First World War.",
        "The stone Cenotaph monument stands 90 feet high in the center of the park.",
        "Hosts the annual Godiva Festival, one of the UK's largest family music festivals."
    ],
    "University of Warwick Piazza": [
        "The vibrant central square of the University of Warwick campus, established in 1965.",
        "Features a giant outdoor screen used for broadcasting sporting events and student showcases.",
        "Surrounded by Warwick Arts Centre, one of the largest multi-artform venues in the UK outside London."
    ],
    "FarGo Village": [
        "FarGo Village is an artistically repurposed industrial space dedicated to independent creative businesses.",
        "Home to vintage clothing shops, craft breweries, vegan eateries, and an escape room.",
        "Features 'The Box', a 500-capacity venue for gigs, markets, and digital art exhibitions."
    ],
    "Charterhouse Heritage Park": [
        "Charterhouse is a rare surviving 14th-century Carthusian monastery (St Anne's Priory).",
        "It features remarkable medieval and Elizabethan wall paintings hidden for centuries.",
        "Reopened following a major restoration project to create a public heritage park and cafe."
    ],

    /* =================================================================
       DISNEY: MAGIC KINGDOM
       ================================================================= */
    "Cinderella Castle": [
        "Cinderella Castle stands about 189 feet tall, and forced perspective makes it look even taller.",
        "Inside the castle entrance, five mosaic murals tell Cinderella's story using more than a million pieces of glass tile.",
        "There is a secret luxurious suite hidden inside the upper levels of the castle."
    ],
    "Space Mountain": [
        "Space Mountain at Magic Kingdom opened in 1975 as the world's first entirely indoor coaster.",
        "It tops out at under 30 mph, but riding in complete darkness makes it feel much faster.",
        "Astronaut Gordon Cooper served as a consultant to help ensure the ride felt like real spaceflight."
    ],
    "Haunted Mansion": [
        "The Haunted Mansion is said to be home to 999 happy haunts, with room for one more.",
        "Magic Kingdom's mansion is styled as a Hudson Valley Dutch Gothic house in Liberty Square.",
        "The iconic ghostly ballroom effect is achieved using a 19th-century illusion technique called Pepper's Ghost."
    ],
    "Big Thunder Mountain Railroad": [
        "Big Thunder Mountain Railroad opened at Magic Kingdom in 1980.",
        "The story centers on a runaway mine train in a gold-rush town plagued by natural disasters.",
        "The coaster features six real antique mining equipment pieces purchased as authentic props."
    ],
    "Pirates of the Caribbean": [
        "Pirates of the Caribbean was the last attraction Walt Disney personally helped design before his passing.",
        "The ride inspired the blockbuster film franchise, which in turn led to Captain Jack Sparrow being added to the ride.",
        "The ride's signature song 'Yo Ho (A Pirate's Life for Me)' was written by Xavier Atencio and George Bruns."
    ],
    "Tiana's Bayou Adventure": [
        "Tiana's Bayou Adventure opened in 2024, continuing the story of Princess Tiana after the movie.",
        "It features dozens of brand-new next-generation Audio-Animatronics figures.",
        "The attraction concludes with a thrilling 50-foot drop down into the bayou."
    ],
    "Seven Dwarfs Mine Train": [
        "Seven Dwarfs Mine Train opened in Fantasyland in 2014.",
        "The mine cars feature a patented swinging vehicle mechanism that sways side-to-side around turns.",
        "Several animatronic dwarf figures inside the mine scene were repurposed from the classic Snow White's Scary Adventures ride."
    ],
    "Peter Pan's Flight": [
        "Peter Pan's Flight has been a Magic Kingdom opening day favorite since October 1, 1971.",
        "Ride vehicles hang from an overhead track, creating the illusion of gliding over nighttime London and Neverland.",
        "The fiber-optic glowing lights in London give the effect of miniature moving traffic below."
    ],
    "It's a Small World": [
        "It's a Small World was created for the 1964–1965 New York World's Fair before coming to Disney parks.",
        "Its iconic theme song was written by the Sherman Brothers to convey a message of global harmony.",
        "There are over 300 audio-animatronic children representing cultures from around the globe."
    ],
    "Dumbo the Flying Elephant": [
        "Dumbo moved into Storybook Circus in 2012 and now features two spinning rides that rotate in opposite directions.",
        "It includes an interactive air-conditioned indoor circus tent queue with a playground for kids.",
        "Dumbo has been a beloved staple of Magic Kingdom since opening day in 1971."
    ],
    "Buzz Lightyear's Space Ranger Spin": [
        "Buzz Lightyear's Space Ranger Spin opened at Magic Kingdom in 1998.",
        "You score points by shooting laser cannons at 'Z' targets mounted on interactive animatronic scenes.",
        "Hitting the top target on the secret volcano can award you the maximum score of 999,999 points."
    ],
    "Tron Lightcycle / Run": [
        "Tron Lightcycle / Run opened at Magic Kingdom in 2023, based on Tron: Legacy.",
        "Riders lean forward onto lightcycles on one of the fastest coasters across all Disney parks worldwide.",
        "The canopy above the track features dynamic color-changing LED effects called the Wave Porch."
    ],
    "Emporium Gift Shop": [
        "The Emporium is the largest retail shop in Magic Kingdom, stretching the full length of Main Street, U.S.A.",
        "Main Street's design is inspired by small-town America around 1900 and Walt Disney's boyhood town of Marceline, Missouri.",
        "The shop's Victorian interior decor changes subtly as you walk through different additions added over time."
    ],
    "Main Street Confectionery": [
        "Serves fresh handmade Disney treats including fudge, caramel apples, and custom-flavored popcorn.",
        "The store's backstory revolves around sweet-making inventions from the turn of the 20th century.",
        "Fresh candy scents are subtly pumped out onto Main Street to entice passing guests."
    ],
    "Cinderella's Royal Table": [
        "Located inside Cinderella Castle, offering character dining with Disney Princesses.",
        "Before 1997, the restaurant was actually named 'King Stefan's Banquet Hall' after Sleeping Beauty's father.",
        "Guests dine surrounded by stained-glass windows overlooking Fantasyland."
    ],
    "Be Our Guest Restaurant": [
        "Features three themed dining rooms: the Grand Ballroom, the Rose Gallery, and the mysterious West Wing.",
        "The West Wing contains the Enchanted Rose with petals that periodically fall off.",
        "It was the first restaurant in Magic Kingdom to serve wine and beer during dinner service."
    ],
    "Pecos Bill Tall Tale Inn & Cafe": [
        "Named after the mythical Texas cowboy Pecos Bill who was featured in Disney's 1948 film 'Melody Time'.",
        "The walls are decorated with 'artifacts' left behind by famous legendary figures of the Old West.",
        "It is one of the largest quick-service dining locations in Magic Kingdom."
    ],

    /* =================================================================
       DISNEY: EPCOT
       ================================================================= */
    "Spaceship Earth": [
        "Spaceship Earth stands 180 feet tall and its sphere is made up of 11,324 triangular silver panels.",
        "It is a complete geodesic sphere elevated on giant legs, engineered so rainwater drains into the World Showcase lagoon.",
        "The ride inside takes guests on a journey through the history of human communication."
    ],
    "Guardians of the Galaxy: Cosmic Rewind": [
        "Cosmic Rewind is EPCOT's first roller coaster and one of the world's longest indoor coasters.",
        "It features the first-ever reverse launch on a Disney roller coaster.",
        "The ride vehicles rotate 360 degrees to point riders toward action scenes while playing retro hit songs."
    ],
    "Test Track": [
        "Test Track reaches speeds up to 65 mph on its outdoor elevated track section.",
        "It is historically the fastest attraction ever built at any Walt Disney World theme park.",
        "Guests can design their own custom concept car and test its efficiency and speed during the ride."
    ],
    "Soarin' Around the World": [
        "Soarin' lifts riders 40 feet into the air inside a massive 80-foot IMAX projection dome screen.",
        "Scent generators release aromas of rose blossoms, grass, and ocean breeze during the flight.",
        "The hang-glider ride mechanism was invented using a working model built from Erector Set toys."
    ],
    "Frozen Ever After (Norway)": [
        "Frozen Ever After opened in 2016 in the Norway pavilion, replacing the classic Maelstrom boat ride.",
        "It features advanced all-electric audio-animatronics for Elsa, Anna, and Olaf.",
        "The boat ride includes a backward plunge down a small icy drop."
    ],
    "Remy's Ratatouille Adventure (France)": [
        "Remy's Ratatouille Adventure uses trackless ride vehicles shaped like cute little rats.",
        "3D projection, oversized props, and water/heat effects shrink riders down to the size of Chef Remy.",
        "It originally debuted at Walt Disney Studios Park in Paris before coming to EPCOT."
    ],
    "San Angel Inn Restaurante": [
        "Situated inside the Mexico pavilion's perpetual twilight pyramid beside a quiet indoor river.",
        "Modeled after an authentic 1690 hacienda in Mexico City.",
        "Dine while watching boats from Gran Fiesta Tour sail past an erupting volcano background."
    ],
    "Plaza de los Amigos Market": [
        "An open-air Mexican village marketplace set under a simulated starry night sky.",
        "Features artisan stalls selling hand-painted alebrijes, traditional pottery, and sombreros.",
        "Designed to mirror traditional town squares across Mexico."
    ],
    "La Cava del Tequila": [
        "A cozy lounge inside the Mexico pavilion stocking over 200 varieties of tequila and mezcal.",
        "Renowned for its specialty handcrafted margaritas created by certified Tequila Ambassadors.",
        "Features walls decorated with Mexican folk art and agave harvesting tools."
    ],
    "Kringla Bakeri og Kafé": [
        "Famous for traditional Norwegian pastries including School Bread ('Skolebrød') topped with toasted coconut.",
        "Designed with traditional Scandinavian timber architecture and turf-roofing style.",
        "Offers savory open-faced sandwiches alongside sweet treats."
    ],
    "The Fjording Gift Shop": [
        "Features a giant 10-foot-tall wooden troll statue that is a famous photo spot for guests.",
        "Sells authentic Norwegian Helly Hansen apparel, Nordic jewelry, and Frozen merchandise.",
        "Modeled after historic Norwegian coastal villages."
    ],
    "Nine Dragons Restaurant": [
        "A fine-dining restaurant featuring pan-Chinese cuisine surrounded by intricate glass carvings.",
        "The decor features ornate dragon woodcarvings and traditional lantern lighting.",
        "Large windows offer views out into the bustling walkways of the China pavilion."
    ],
    "Yong Feng Shangdian Shop": [
        "A vast retail hall offering authentic Chinese silk robes, tea sets, paper lanterns, and umbrellas.",
        "Features fine jade carvings and traditional cloisonné jewelry.",
        "Spans multiple connected rooms reflecting classic Chinese architecture."
    ],
    "Joy of Tea Kiosk": [
        "Located right on the World Showcase Lagoon promenade in front of the China pavilion.",
        "Popular for boba bubble teas, cocktail teas, and pork buns.",
        "Offers a prime viewing spot across the lagoon toward Spaceship Earth."
    ],
    "Biergarten Restaurant": [
        "Celebrates Oktoberfest year-round with buffet dining at communal communal long tables.",
        "Features a live traditional Bavarian Oompah band with accordion players and bell ringers.",
        "Designed to look like an outdoor German village square at twilight."
    ],
    "Der Teddybär Toy Shop": [
        "Sells traditional German toys, clockwork collectibles, and famous Steiff teddy bears.",
        "Located under the watchful eye of a statue of St. George and the Dragon in the pavilion plaza.",
        "Includes a collection of authentic hand-carved Black Forest cuckoo clocks."
    ],
    "Karamell-Küche Candy Shop": [
        "Sponsored by Werther's Original, it is the only Werther's retail bakery location in the world.",
        "Makes fresh warm caramel popcorn, caramel apples, and fudge on-site throughout the day.",
        "Pumps delicious warm caramel aroma into the surrounding German pavilion walkway."
    ],
    "Via Napoli Ristorante e Pizzeria": [
        "Features three massive wood-burning pizza ovens named after active Italian volcanoes: Stromboli, Etna, and Vesuvio.",
        "The water used to make the pizza dough is imported or pH-matched to duplicate water from Naples, Italy.",
        "Known for serving authentic Neapolitan wood-fired pizzas."
    ],
    "Tutto Italia Ristorante": [
        "Offers regional Italian cuisine in a formal dining room adorned with fine frescoes and murals.",
        "Created in partnership with celebrity chef Joachim Splichal.",
        "Features expansive outdoor patio seating facing the Venetian-style plaza."
    ],
    "La Bottega Italiana": [
        "Sells fine Italian leather goods, Venetian masquerade masks, Italian wines, and cookware.",
        "Decorated with Venetian glass and Italian marble finishes.",
        "Located near the central bell tower modeled after St. Mark's Campanile."
    ],
    "Regal Eagle Smokehouse Barbecue": [
        "A craft classic American backyard barbecue joint hosted by Sam Eagle from The Muppets.",
        "Features real pit master smokers cooking regional US barbecue styles.",
        "The outdoor patio houses a large active smoker and craft beer bar."
    ],
    "Art of Disney Gallery": [
        "Showcases collectible Disney artwork, limited-edition prints, figurines, and cell art.",
        "Often hosts visiting Disney artists for live sketch sessions and signings.",
        "Focuses heavily on historical animation art and EPCOT park heritage."
    ],
    "Teppan Edo Hibachi Restaurant": [
        "Chefs perform entertaining culinary knife skills right at your table on flat-top teppan grills.",
        "Located on the upper floor of the Japan pavilion's main building.",
        "Emphasizes the traditional Japanese culinary art of Teppanyaki."
    ],
    "Mitsukoshi Department Store": [
        "Mitsukoshi is a real Japanese retail chain that traces its origins back to a kimono shop in 1673.",
        "Features the popular 'Pick-a-Pearl' station where guests harvest pearls from live oysters.",
        "Sells authentic Japanese anime merchandise, snacks, kimono, and kitchenware."
    ],
    "Spice Road Table": [
        "Offers Mediterranean small plates and tapas right along the waterfront of World Showcase Lagoon.",
        "Decorated with light fixtures and mosaic tilework hand-crafted in Morocco.",
        "Provides prime outdoor covered seating for evening fireworks viewing."
    ],
    "Souk-al-Magreb Gift Shop": [
        "Styled as a traditional outdoor Moroccan market stall along the lagoon promenade.",
        "Sells fez hats, brass lanterns, ceramics, and Moroccan spices.",
        "Designed with intricate geometric tile patterns created by Moroccan craftsmen."
    ],
    "Chefs de France": [
        "A classic French brasserie featuring floor-to-ceiling windows overlooking the France pavilion streets.",
        "Founded by legendary French culinary masters Paul Bocuse, Roger Vergé, and Gaston Lenôtre.",
        "Serves classic French cuisine including escargot, onion soup, and duck breast."
    ],
    "Les Halles Boulangerie-Patisserie": [
        "A traditional French bakery serving freshly baked baguettes, croissants, eclairs, and macarons.",
        "Designed to evoke the historic Les Halles food market of Paris.",
        "Opens early in the morning so guests can grab French coffee and breakfast pastries."
    ],
    "Plume et Palette Perfume Shop": [
        "A high-end boutique selling designer French fragrances, cosmetics, and handbags.",
        "Features elegant Art Nouveau architectural styling inspired by 1920s Paris.",
        "Staffed by cast members from France who provide custom fragrance consultations."
    ],
    "Rose & Crown Pub & Dining Room": [
        "A traditional British pub serving fish and chips, bangers and mash, and draft ales.",
        "Features a live pub musician playing classic sing-along songs.",
        "The pub's name references two of the most common words found in traditional English pub names."
    ],
    "Yorkshire County Fish Shop": [
        "Serves famous beer-battered fish and chips cooked fresh to order.",
        "Located in a cottage building inspired by rural Yorkshire countryside architecture.",
        "Features outdoor seating right along the lagoon opposite the English garden."
    ],
    "The Crown & Crest Shop": [
        "Sells crest gifts, family coat-of-arms prints, Beatles memorabilia, and British tea sets.",
        "The interior features armor and crest shields representing regions of the United Kingdom.",
        "Guests can look up the historical coat-of-arms origin for their surname."
    ],
    "Le Cellier Steakhouse": [
        "Designed to look like the wine cellar of a grand Canadian hotel like Chateau Laurier.",
        "Famous for its signature Canadian Cheddar Cheese Soup and AAA filet mignon.",
        "One of the most sought-after signature dining reservations in all of EPCOT."
    ],
    "Northwest Mercantile Gift Shop": [
        "Housed in a rustic log cabin building inspired by Pacific Northwest timber trading posts.",
        "Sells real maple syrup, heavy flannel apparel, and Canadian wildlife souvenirs.",
        "Located near the entrance to the O Canada! 360-degree Circle-Vision theater."
    ],

    /* =================================================================
       DISNEY: HOLLYWOOD STUDIOS
       ================================================================= */
    "Twilight Zone Tower of Terror": [
        "The Tower of Terror stands 199 feet tall—kept under 200 feet so it didn't require a red flashing aviation beacon.",
        "The drop sequence is completely randomized by computer so no two ride experiences are identical.",
        "The ride elevators don't just fall; they are pulled down faster than the force of gravity by cables."
    ],
    "Rock 'n' Roller Coaster": [
        "Launches riders from 0 to 57 mph in just 2.8 seconds using a linear induction motor system.",
        "Each stretch-limo train features 125 speakers playing a custom-remixed soundtrack by Aerosmith.",
        "It features three inversions and was the first coaster at Walt Disney World to go upside down."
    ],
    "Star Wars: Rise of the Resistance": [
        "Rise of the Resistance is one of Disney's most technologically complex rides ever created.",
        "It combines four different ride systems: trackless vehicles, a motion simulator, a walk-through, and a drop tower.",
        "Features a fleet of 50 fully animatronic Stormtroopers inside a massive Star Destroyer hangar."
    ],
    "Millennium Falcon: Smugglers Run": [
        "Places a crew of six guests directly inside the cockpit of the 'fastest hunk of junk in the galaxy'.",
        "Every button and switch in the cockpit lights up and affects your flight performance in real time.",
        "The real-time computer render engine used for the cockpit screen relies on Unreal Engine."
    ],
    "Toy Story Mania!": [
        "A 4D interactive carnival arcade ride where guests wear 3D glasses and shoot virtual pull-string cannons.",
        "Set inside Andy's room among giant vintage toys and board game boxes.",
        "The ride vehicles spin 360 degrees as they travel between different carnival game screens."
    ],
    "Slinky Dog Dash": [
        "A family coaster themed around Slinky Dog riding on a track Andy assembled using his Dash & Dodge Coaster Kit.",
        "Features two separate mid-course launches to boost the coaster train.",
        "An animatronic Wheezy the Penguin serenades riders at the final brakes with 'You've Got a Friend in Me'."
    ],
    "Dok-Ondar's Den of Antiquities": [
        "Dok-Ondar is an Ithorian collector who can be seen working at his desk inside the shop.",
        "Sells rare Star Wars artifacts, legacy lightsabers, holocrons, and kyber crystals.",
        "The walls feature easter eggs including a taxidermy Wampa head and a Mandalorian armor breastplate."
    ],
    "Oga's Cantina": [
        "The resident DJ is R-3X (Rex), the former pilot droid from the original Star Tours attraction.",
        "Serves exotic alien cocktails and non-alcoholic drinks accompanied by glowing ice and bubbling effects.",
        "The interior design matches the famous cantinas of the Star Wars galaxy with custom booth alcoves."
    ],
    "The Hollywood Brown Derby": [
        "An authentic replica of the famous original Brown Derby restaurant on Vine Street in Hollywood.",
        "The famous Cobb Salad was originally created at the Hollywood Brown Derby in 1937.",
        "The walls are lined with caricatures of famous golden-age Hollywood celebrities."
    ],
    "Tower Hotel Gifts": [
        "Located at the exit of the Tower of Terror, styled as the abandoned hotel's gift shop and boiler room outlet.",
        "Sells Hollywood Tower Hotel branded robes, bellhop hats, and spooky souvenirs.",
        "Features subtle Twilight Zone props and eerie background music from the 1930s."
    ],

    /* =================================================================
       DISNEY: ANIMAL KINGDOM
       ================================================================= */
    "Avatar Flight of Passage": [
        "Guests link with an Avatar to ride on the back of an alien Mountain Banshee over Pandora.",
        "The seat actually breathes beneath you to match the banshee's heartbeat and lung movement.",
        "Scent and water spray effects immerse riders in the alien forest ocean coastlines."
    ],
    "Expedition Everest": [
        "Stands 199.5 feet tall, making it the tallest artificial mountain across all Disney parks.",
        "The coaster track includes a section where the train goes backward in total darkness.",
        "Inside the mountain resides a giant 25-foot audio-animatronic Yeti figure."
    ],
    "Kilimanjaro Safaris": [
        "The open-air safari vehicle drives through over 110 acres of natural African savanna.",
        "Camouflaged landscape features like hidden moats and electric fences keep animals safely separated.",
        "Home to real free-roaming giraffes, rhinos, elephants, lions, and zebras."
    ],
    "Tree of Life Roots": [
        "The Tree of Life stands 145 feet tall and was built around a modified oil rig platform base.",
        "Over 300 intricately detailed animal figures are hand-carved directly into the trunk, branches, and roots.",
        "Inside the base of the tree is an underground theater that plays 'It's Tough to Be a Bug!'."
    ],
    "Tiffins Restaurant & Nomad Lounge": [
        "Tiffins is named after the stainless-steel lunch boxes used by travelers in India.",
        "The restaurant's artwork and design are inspired by the actual travel journals of Disney Imagineers.",
        "Nomad Lounge offers waterfront seating celebrating global travel stories and adventurous spirits."
    ],
    "Windtraders Shop": [
        "Located inside Pandora, designed as a reclaimed RDA research facility converted into a shop.",
        "Features a Banshee Hatchery where guests can adopt interactive moving baby banshees.",
        "Sells glowing Na'vi items, custom avatar action figures, and glowing bioluminescent plants."
    ],
    "Mombasa Marketplace": [
        "An open-air African marketplace selling authentic hand-carved wood items, instruments, and art.",
        "Designed to look like an authentic village shop in East Africa.",
        "Connects directly with Zuri's Sweets Shop serving African-inspired treats."
    ],

    /* =================================================================
       DISNEY SPRINGS
       ================================================================= */
    "World of Disney Store": [
        "World of Disney is officially the largest retail store selling Disney merchandise in the world.",
        "Features enchanted animation sketches on the walls that magically come to life every few minutes.",
        "Divided into distinct rooms themed after classic Disney artist studios."
    ],
    "Aerophile Balloon Ascent": [
        "A tethered helium balloon that ascends 400 feet into the air over Disney Springs.",
        "Holds 210,000 cubic feet of helium and offers 360-degree views up to 10 miles away.",
        "It is one of the world's largest tethered helium passenger balloons."
    ],
    "Gideon's Bakehouse": [
        "Famous for giant half-pound cookies that take over 24 hours to craft by hand.",
        "The shop is themed as an eerie 19th-century bookstore belonging to a mysterious inventor.",
        "Often features hours-long virtual queues due to its immense popularity."
    ],
    "The Boathouse Restaurant": [
        "Features a fleet of authentic vintage Amphicars that drive off a land launch directly into the lake.",
        "Houses a multi-million dollar collection of vintage wooden speedboats docked along its pier.",
        "Serves fresh waterfront seafood and premium steaks."
    ],
    "Lego Store Giant Dragon": [
        "Features a massive sea serpent named 'Brickley' built entirely from Lego bricks emerging from the lake.",
        "The store exterior features huge brick sculptures of scenes from Frozen, Star Wars, and Disney classics.",
        "Includes hands-on Lego building tables and a custom Lego Minifigure Factory."
    ],
    "AMC Disney Springs 24": [
        "A 24-screen movie theater featuring Dine-In theaters with seat-side food service.",
        "Was one of the first movie theaters in the country to feature integrated restaurant service during showtimes.",
        "Regularly hosts red-carpet Disney movie premieres and special fan events."
    ],

    /* =================================================================
       DISNEY RESORTS & TRANSIT HUBS
       ================================================================= */
    "Pioneer Hall (Fort Wilderness)": [
        "Pioneer Hall is built from over 1,250 pine logs imported from Montana.",
        "Home to the Hoop-Dee-Doo Musical Revue, running continuously since 1974 as one of America's longest-running stage shows.",
        "Serves all-you-care-to-enjoy fried chicken and ribs served in metal buckets."
    ],
    "Grand Floridian Resort Entrance": [
        "Opened in 1988 as Walt Disney World's flagship luxury resort hotel.",
        "Designed in grand Victorian seaside style inspired by Florida's classic 19th-century hotels.",
        "The six-story lobby features a live grand pianist and a full orchestra playing Disney melodies."
    ],
    "Contemporary Resort Lobby": [
        "Opened on opening day in October 1971 as a landmark of modern modular architecture.",
        "The Walt Disney World Monorail glides directly through the open interior atrium of the building.",
        "Features a massive 90-foot-tall mosaic tile mural created by legendary Disney artist Mary Blair."
    ],
    "Polynesian Village Resort Lobby": [
        "One of the original opening day resorts at Walt Disney World from October 1, 1971.",
        "Themed after the South Pacific with lush tropical vegetation, tiki torches, and white-sand beaches.",
        "Home to Trader Sam's Grog Grotto, an interactive tiki bar with special room effects."
    ],
    "Disney's Riviera Resort (Skyliner Station)": [
        "Opened in 2019, inspired by the European grandeur along the Mediterranean coast that Walt Disney loved.",
        "The Skyliner station tunnel features two breathtaking mosaic murals depicting Peter Pan and Tangled made of over 500,000 tiles.",
        "Offers direct high-flying access to EPCOT via the Skyliner gondola network."
    ],
    "Caribbean Beach Resort Skyliner Hub": [
        "Serves as the main central junction station for the entire Disney Skyliner transportation network.",
        "Connects routes leading directly to EPCOT, Hollywood Studios, Art of Animation, and Pop Century.",
        "Features a Caribbean market architectural style matching the surrounding resort islands."
    ],
    "Art of Animation & Pop Century Skyliner": [
        "The Skyliner station sits on a bridge across Hourglass Lake connecting two major value resorts.",
        "Pop Century celebrates 20th-century pop culture icons with giant decade props.",
        "Art of Animation features larger-than-life character courtyards from The Lion King, Cars, Finding Nemo, and Little Mermaid."
    ],
    "Disney's BoardWalk Inn Entrance": [
        "Designed to recreate the charming seaside boardwalks of 1930s coastal cities like Atlantic City.",
        "Features a 1/4-mile outdoor promenade with street performers, carnival games, and nightlife.",
        "Sits within easy walking or boat distance of both EPCOT and Disney's Hollywood Studios."
    ],
    "Animal Kingdom Lodge (Jambo House)": [
        "Features four private wildlife savannas home to over 200 hoofed animals and birds.",
        "Houses one of the largest collections of authentic African art outside of the African continent.",
        "The soaring five-story thatched-roof lobby overlooks giant viewing windows directly into the animal habitats."
    ]
};

/* Facts shared by whole groups of stops. `name` and `land` are regexes; either (or both) can be used. */
window.PATTERN_FUN_FACTS = [
    { name: /^Fab 50:/i, facts: [
        "The Fab 50 golden statues were unveiled for Walt Disney World's 50th anniversary celebration.",
        "There are 50 golden Disney character sculptures hidden across all four Walt Disney World theme parks.",
        "MagicBand+ users can interact with these statues to trigger sound effects and character voices."
    ]},
    { land: /Galaxy's Edge/i, facts: [
        "Star Wars: Galaxy's Edge is set on the remote planet of Batuu at Black Spire Outpost.",
        "The land's design includes real full-scale starships like the Millennium Falcon and TIE Echelon.",
        "Cast members in Galaxy's Edge speak in-universe Star Wars phrases like 'Bright Suns' and 'Til the Spire'."
    ]},
    { land: /Toy Story Land/i, facts: [
        "Toy Story Land makes you feel shrunk to the size of a toy in Andy's backyard.",
        "Every footstep Andy took left giant shoe prints pressed directly into the land's concrete pathways.",
        "The land opened in June 2018 at Disney's Hollywood Studios."
    ]},
    { land: /Pandora/i, facts: [
        "Pandora - The World of Avatar is set decades after the Avatar movies on the moons of Polyphemus.",
        "At night, the plants and pathways in Pandora glow with vibrant bioluminescent colors.",
        "The floating mountains towering overhead weigh thousands of tons and rely on clever structural steel engineering."
    ]},
    { land: /Africa/i, facts: [
        "Harambe, the fictional village in Africa, is named after a Swahili word meaning 'all pull together'.",
        "The thatched roofs in Harambe were constructed by native craftsmen brought from South Africa.",
        "The architectural details include simulated aged plaster, electric cables, and authentic African signage."
    ]},
    { land: /\(Mexico/i, facts: [
        "The Mexico pavilion is contained inside an incredible 36-foot Mesoamerican pyramid.",
        "Inside the pyramid, it is perpetually nighttime above a traditional Mexican plaza and marketplace.",
        "The boat ride inside features Donald Duck and the Three Caballeros searching across Mexico."
    ]},
    { land: /\(Norway/i, facts: [
        "The Norway pavilion includes an authentic replica of a traditional 12th-century wooden Stave Church.",
        "The Stave Church inside holds exhibits of traditional Norse artifacts and folklore history.",
        "The pavilion's architecture mirrors historic Norwegian cities like Bergen, Oslo, and Ålesund."
    ]},
    { land: /\(China/i, facts: [
        "The central hall is an exact half-scale replica of the Temple of Heaven in Beijing.",
        "The acoustic design inside the central dome allows a whisper spoken in the center to echo loudly.",
        "The pavilion features peaceful gardens with quiet ponds, bridges, and weeping willows."
    ]},
    { land: /\(Germany/i, facts: [
        "The plaza is centered around a statue of St. George and the Dragon beside a classic clock tower.",
        "The pavilion features a miniature model train village that displays detailed German country scenes.",
        "The architectural styles represent various regions of Germany, including Bavaria and the Rhine."
    ]},
    { land: /\(Italy/i, facts: [
        "The pavilion features a 105-foot replica of St. Mark's Campanile bell tower from Venice.",
        "The outdoor plaza includes authentic Venetian gondolas docked alongside lagoon piers.",
        "The buildings mirror classic Italian architectural masterpieces like the Doge's Palace."
    ]},
    { land: /\(American/i, facts: [
        "The central building is designed in classic Colonial Georgian architectural style.",
        "It features the American Adventure stage show utilizing a massive computer-controlled elevator system.",
        "The gardens showcase classic American flora along with historic patriotic monuments."
    ]},
    { land: /\(Japan/i, facts: [
        "The 85-foot red Torii gate in the lagoon is modeled after the famous Itsukushima Shrine gate in Japan.",
        "The five-story pagoda is designed based on the 7th-century Horyu-ji temple in Nara.",
        "A peaceful Japanese rock garden with cascading waterfalls sits toward the back of the pavilion."
    ]},
    { land: /\(Morocco/i, facts: [
        "King Hassan II of Morocco sent royal artisans to hand-craft the intricate mosaic tilework throughout the pavilion.",
        "Because of Islamic religious traditions, the geometric mosaic tile patterns intentionally contain subtle flaws.",
        "The pavilion features a replica of the Koutoubia Minaret in Marrakech."
    ]},
    { land: /\(France/i, facts: [
        "The replica Eiffel Tower standing above the pavilion was constructed using forced perspective at 1/10th scale.",
        "The gardens are designed to evoke the romantic Parisian parks along the Seine river.",
        "The pavilion expanded in 2021 to include a new street dedicated to Disney-Pixar's Ratatouille."
    ]},
    { land: /\(UK/i, facts: [
        "The architectural styles span centuries of British history, from Tudor timber frames to Victorian brickwork.",
        "Includes a maze garden behind the shops inspired by classic English country estates.",
        "The thatched-roof cottage is inspired by Anne Hathaway's famous cottage in Stratford-upon-Avon."
    ]},
    { land: /\(Canada/i, facts: [
        "Features an impressive 30-foot artificial waterfall inspired by the Canadian Rockies.",
        "The formal gardens are patterned after the world-famous Butchart Gardens in Victoria, British Columbia.",
        "The main building is designed to look like the iconic Hotel Château Laurier in Ottawa."
    ]}
];

window.PARK_FUN_FACTS = {
    "coventry": [
        "Coventry was the world's pioneer in pedestrianized city centers after WWII.",
        "The city's historic symbol is the elephant carrying a castle on its back.",
        "Coventry was historically renowned for clock making, bicycle manufacturing, and motor industries."
    ],
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
