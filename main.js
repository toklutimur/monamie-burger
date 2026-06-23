const PRODUCTS = {
  'Chicken Menüs': [
    { id: 'clausthalburgermenu', name: 'Clausthal Burger Menü', price: 15.50, desc: 'Käse überbacken, mit Clausthal Salat' },
    { id: 'yoyo', name: 'YoYo Menü', price: 14.00, desc: '1x YoYo Burger mit Jalapeño und Cheese "L", 1x Klein Pommes oder Wedges, 1x Ketchup/Mayo, ca. 130 g HotWings (2-3 Stk.)' },
    { id: 'bbq', name: 'BBQ Menü', price: 10.00, desc: '1x BBQ Burger mit Cheese "L", 1x Clausthalsalat' },
    { id: 'kingwings', name: 'King Wings Menü', price: 13.50, desc: 'Deep-Fried Chicken Wings (Scharf) ca. 400g (7-10), 1x Klein Pommes oder Wedges' },
    { id: 'a1', name: 'A1', price: 13.50, desc: 'HotWings ca. 400g (7-10 Stk.), 1x Klein Pommes oder Wedges, 1x Ketchup/Mayo' },
    { id: 'a2', name: 'A2 (Crispyfilets)', price: 11.50, desc: '5x Crispyfilets, 1x Klein Pommes oder Wedges, 1x Ketchup/Mayo' },
    { id: 'a3', name: 'A3 (2x Monamie Burger)', price: 14.50, desc: '2x Monamie Burger "L", 1x Klein Pommes oder Wedges, 1x Ketchup/Mayo' },
    { id: 'a4', name: 'A4', price: 11.50, desc: '1x Monamie Burger "L", 1x Klein Pommes oder Wedges, 1x Clausthal Salat, 1x Ketchup/Mayo' },
    { id: 'bigmama', name: 'Big Mama', price: 14.00, desc: '1x Big Mama Burger mit Cheese "XL", 1x Groß Pommes oder Wedges, 1x Ketchup/Mayo' },
    { id: 'happybox', name: 'Happy Box', price: 7.90, desc: '1x Quick Chicken Burger oder 2x Crispyfilets, 1x Klein Pommes oder Wedges, 1x Überraschung, 1x Caprisonne, 1x Ketchup/Mayo' },
    { id: 'nuggetsbox', name: 'Nuggets Box', price: 7.50, desc: 'Chicken Nuggets Box' },
    { id: 'crispybox', name: 'Crispy Box', price: 7.50, desc: 'Crispy Chicken Box' },
    { id: 'falafelbox', name: 'Falafel Box', price: 7.50, desc: 'Falafel Box' },
    { id: 'hotwingsbox', name: 'HotWings Box', price: 7.50, desc: 'Hot Wings Box' },
    { id: 'crushburger', name: 'Crush Menü', price: 14.00, desc: '1x Crush Burger mit Cheese "XL", 1x Groß Pommes oder Wedges, 1x Ketchup/Mayo' },
    { id: 'doublcrush', name: 'Double Crush Menü', price: 16.00, desc: '1x Double Crush Burger mit Cheese "XXL", 1x Groß Pommes oder Wedges, 1x Ketchup/Mayo' },
    { id: 'b3', name: 'B3', price: 13.00, desc: '1x Monamie Burger "L", 2x Crispyfilets, 1x Klein Pommes oder Wedges, 1x Ketchup/Mayo' },
    { id: 'chickenwrapmenu', name: 'Chicken-Wrap Menü', price: 11.00, desc: '1x Chickenwrap, 1x Klein Pommes oder Wedges, 1x Ketchup/Mayo' },
    { id: 'nuggetwrapmenu', name: 'Nugget-Wrap Menü', price: 11.00, desc: '1x Nugget-Wrap, 1x Klein Pommes oder Wedges, 1x Ketchup/Mayo' },
    { id: 'filetburgermenu', name: 'Filet Burger Menü', price: 12.00, desc: '1x Filet Burger, 1x Klein Pommes oder Wedges, 1x Ketchup/Mayo' },
    { id: 'nuggetburgermenu', name: 'Nugget Burger Menü', price: 11.50, desc: '1x Nugget Burger, 1x Klein Pommes oder Wedges, 1x Ketchup/Mayo' },
    { id: 'redreaper', name: 'Red Reaper Menü', price: 11.00, desc: '1x Red Reaper Burger "L", 1x Klein Pommes oder Wedges, 1x Ketchup/Mayo' },
    { id: 'bbqwrapmenu', name: 'BBQ-Wrap Menü', price: 11.00, desc: '1x BBQ-Wrap, 1x Klein Pommes oder Wedges, 1x Ketchup/Mayo' },
  ],
  'Beef Burger Menüs': [
    { id: 'beefburger', name: 'Beef Burger', price: 9.00, desc: '1x Beef Burger "L" (100 Gramm saftiges Rindfleisch, frische Tomaten, knackiger Eisbergsalat, Zwiebeln, Gurken und hausgemachte Sauce), 1x Klein Pommes oder Wedges, 1x Ketchup und Mayonnaise' },
    { id: 'doublebeef', name: 'Double Beef Burger', price: 13.00, desc: '1x Beef Burger "XL" (2x 100 Gramm saftiges Rindfleisch, frische Tomaten, knackiger Eisbergsalat, Zwiebeln, Gurken und hausgemachte Sauce), 1x Groß Pommes oder Wedges, 1x Ketchup und Mayonnaise' },
    { id: 'cheeseburger', name: 'Cheeseburger', price: 10.00, desc: '1x Beef Burger mit Cheese "L" (100 Gramm saftiges Rindfleisch, frische Tomaten, knackiger Eisbergsalat, Zwiebeln, Gurken und hausgemachte Sauce), 1x Klein Pommes oder Wedges, 1x Ketchup und Mayonnaise' },
    { id: 'doublecheese', name: 'Double Cheeseburger', price: 13.50, desc: '1x Beef Burger mit Cheese "XL" (2x 100 Gramm saftiges Rindfleisch, frische Tomaten, knackiger Eisbergsalat, Zwiebeln, Gurken und hausgemachte Sauce), 1x Groß Pommes oder Wedges, 1x Ketchup und Mayonnaise' },
    { id: 'royalbeef', name: 'Royal Beef Burger', price: 13.00, desc: '1x Beef Burger "XL" (180 Gramm saftiges Rindfleisch, frische Tomaten, knackiger Eisbergsalat, Zwiebeln, Gurken und hausgemachte Sauce), 1x Groß Pommes oder Wedges, 1x Ketchup und Mayonnaise' },
    { id: 'royalcheese', name: 'Royal Cheeseburger', price: 13.50, desc: '1x Beef Burger mit Cheese (180 Gramm saftiges Rindfleisch, frische Tomaten, knackiger Eisbergsalat, Zwiebeln, Gurken und hausgemachte Sauce), 1x Groß Pommes oder Wedges, 1x Ketchup und Mayonnaise' },
    { id: 'doubleroy', name: 'Double Royal Beef Burger', price: 15.50, desc: '1x Beef Burger "XXL" (2x 180 Gramm saftiges Rindfleisch, frische Tomaten, knackiger Eisbergsalat, Zwiebeln, Gurken und hausgemachte Sauce), 1x Groß Pommes oder Wedges, 1x Ketchup und Mayonnaise' },
    { id: 'doubleroyalcheese', name: 'Double Royal Cheeseburger', price: 16.00, desc: '1x Beef Burger mit Cheese "XXL" (2x 180 Gramm saftiges Rindfleisch, frische Tomaten, knackiger Eisbergsalat, Zwiebeln, Gurken und hausgemachte Sauce), 1x Groß Pommes oder Wedges, 1x Ketchup und Mayonnaise' },
    { id: 'brobeef', name: 'Bro Beef Burger Menü', price: 15.00, desc: '2x Beef Burger "L" (je 100 Gramm saftiges Rindfleisch, frische Tomaten, knackiger Eisbergsalat, Zwiebeln, Gurken und hausgemachte Sauce), 1x Klein Pommes oder Wedges, 1x Ketchup und Mayonnaise' },
    { id: 'chilibeef', name: 'Chili Beef Menü', price: 13.00, desc: '1x Beef Burger mit Jalapeño und Cheese "L" (100 Gramm saftiges Rindfleisch, frische Tomaten, knackiger Eisbergsalat, Zwiebeln, Gurken und hausgemachte Sauce), 3x Chili Cheese, 1x Klein Pommes oder Wedges, 1x Ketchup und Mayonnaise' },
    { id: 'beefwrap', name: 'Beef Wrap', price: 13.00, desc: '1x Beef Wrap (100 Gramm saftiges Rindfleisch, frische Tomaten, knackiger Eisbergsalat, Zwiebeln, Gurken und hausgemachte Sauce), 1x Groß Pommes oder Wedges, 1x Ketchup und Mayonnaise' },
  ],
  'Single Burgers': [
    { id: 's_quickchicken', name: 'Quick Chicken Burger "S"', price: 2.50, desc: 'Single Burger' },
    { id: 's_quickbeef', name: 'Quick Beef Burger "S"', price: 3.00, desc: 'Single Burger' },
    { id: 's_monamie', name: 'Monamie Burger "L"', price: 5.90, desc: 'Single Burger' },
    { id: 's_yoyo', name: 'Yoyo Burger "L"', price: 6.90, desc: 'Single Burger' },
    { id: 's_veggie', name: 'Veggie Burger "L"', price: 7.50, desc: 'Single Burger' },
    { id: 's_bbq', name: 'BBQ Burger "L"', price: 7.50, desc: 'Single Burger' },
    { id: 's_filet', name: 'Filet Burger', price: 8.20, desc: 'Single Burger' },
    { id: 's_bigmama', name: 'Big Mama "XL"', price: 8.90, desc: 'Single Burger' },
    { id: 's_halloumi', name: 'Halloumi Burger "L"', price: 7.50, desc: 'Single Burger' },
    { id: 's_crush', name: 'Crush Burger "XL"', price: 8.90, desc: 'Single Burger' },
    { id: 's_doublecrush', name: 'Double Crush Burger "XXL"', price: 12.90, desc: 'Single Burger' },
    { id: 's_nugget', name: 'Nugget Burger', price: 5.90, desc: 'Single Burger' },
    { id: 's_beefburger', name: 'Beef Burger', price: 6.50, desc: 'Single Burger' },
    { id: 's_cheeseburger', name: 'Cheeseburger', price: 7.00, desc: 'Single Burger' },
    { id: 's_royalbeef', name: 'Royal Beef Burger', price: 8.50, desc: 'Single Burger' },
    { id: 's_royalcheese', name: 'Royal Cheeseburger', price: 9.50, desc: 'Single Burger' },
    { id: 's_chilibeef', name: 'Chili Beef Burger', price: 7.50, desc: 'Single Burger' },
    { id: 's_redreaper', name: 'Red Reaper Burger "L"', price: 6.90, desc: 'Single Burger' },
    { id: 's_doublebeef', name: 'Double Beef Burger', price: 8.50, desc: 'Single Burger' },
    { id: 's_doublecheese', name: 'Double Cheeseburger', price: 9.50, desc: 'Single Burger' },
    { id: 's_doubleroyal', name: 'Double Royal Beef Burger', price: 12.90, desc: 'Single Burger' },
    { id: 's_doubleroyalcheese', name: 'Double Royal Cheeseburger', price: 13.50, desc: 'Single Burger' },
    { id: 'clausthalburger', name: 'Clausthal Burger', price: 12.00, desc: 'Käse überbacken, mit Clausthal Salat' },
  ],
  'Wraps & Dürüm': [
    { id: 's_chickenwrap', name: 'Chicken-Wrap', price: 8.50, desc: 'Single Wrap' },
    { id: 's_veggietwister_single', name: 'Veggie Twister', price: 8.50, desc: 'Single Wrap' },
    { id: 's_beefwrap', name: 'Beef-Wrap', price: 9.50, desc: 'Single Wrap' },
    { id: 's_nuggetwrap', name: 'Nugget-Wrap', price: 8.50, desc: 'Single Wrap' },
    { id: 's_bbqwrap', name: 'BBQ-Wrap', price: 8.50, desc: 'Single Wrap' },
    { id: 'duerum1', name: 'Dürüm mit Hähnchenspieß', price: 13.00, desc: 'Hähnchen am Spieß gerollt mit Salat und Soße' },
    { id: 'duerum2', name: 'Dürüm mit Siskebab (Kusbasi Dürüm)', price: 15.00, desc: 'Rinderspieß gerollt mit Salat und Soße' },
    { id: 'duerum3', name: 'Adana Dürüm', price: 13.00, desc: 'Gegrillter Hackfleischspieß gerollt mit Salat und Soße' },
    { id: 'falafelduerum', name: 'Falafel Dürüm', price: 11.00, desc: 'Falafel Dürüm' },
    { id: 'pomwrap', name: 'Pomwrap', price: 5.00, desc: '1x Knusprige Pommes in einem frischen Wrap' },
  ],
  'Grill-Spezialitäten': [
    { id: 'adanakebab', name: 'Adana Kebab (Scharf)', price: 17.50, desc: 'Scharfes gehacktes vom Rind am Spieß, Bulgur oder Pommes, als Beilage Joghurt und gemischter Salat, dazu Brot' },
    { id: 'urfakebab', name: 'Urfa Kebab', price: 17.50, desc: 'Gehacktes vom Rind am Spieß, Bulgur oder Pommes, als Beilage Joghurt und gemischter Salat, dazu Brot' },
    { id: 'siskebab', name: 'Sis Kebab (Schisch Kebab)', price: 19.00, desc: 'Rinderspieß, Bulgur oder Pommes, als Beilage Joghurt und gemischter Salat, dazu Brot' },
    { id: 'kanat', name: 'Hähnchenflügel', price: 17.50, desc: 'Schön gegrillte Hähnchenflügel, Bulgur oder Pommes, als Beilage Joghurt und gemischter Salat, dazu Brot' },
    { id: 'tavukgoesue', name: 'Hähnchenbrustfilet', price: 17.50, desc: 'Schön gegrillte Hähnchenbrust, Bulgur oder Pommes, als Beilage Joghurt und gemischter Salat, dazu Brot' },
    { id: 'tavuksis', name: 'Hähnchenspieß', price: 17.50, desc: 'Hähnchenstücke am Spieß, Bulgur oder Pommes, als Beilage Joghurt und gemischter Salat, dazu Brot' },
    { id: 'koefte', name: 'Köfteteller', price: 17.50, desc: 'Gegrillte Frikadellen aus Rindfleisch, Bulgur oder Pommes, als Beilage Joghurt und gemischter Salat, dazu Brot' },
  ],
  'Combi-Grill': [
    { id: 'comb1', name: 'Hähnchenspieß und Kusbasi', price: 19.00, desc: 'Mit Bulgur oder Pommes, als Beilage Joghurt und gemischter Salat, dazu Brot' },
    { id: 'comb2', name: 'Hähnchenspieß und Adana', price: 18.50, desc: 'Mit Bulgur oder Pommes, als Beilage Joghurt und gemischter Salat, dazu Brot' },
    { id: 'comb3', name: 'Kusbasi und Adana', price: 19.00, desc: 'Mit Bulgur oder Pommes, als Beilage Joghurt und gemischter Salat, dazu Brot' },
    { id: 'comb4', name: 'Hähnchenspieß und Köfte', price: 18.50, desc: 'Mit Bulgur oder Pommes, als Beilage Joghurt und gemischter Salat, dazu Brot' },
    { id: 'comb5', name: 'Adana und Köfte', price: 18.50, desc: 'Mit Bulgur oder Pommes, als Beilage Joghurt und gemischter Salat, dazu Brot' },
  ],
  'Vegetarisch': [
    { id: 'hallohalloumi', name: 'Hallo Halloumi', price: 11.00, desc: '1x Halloumi Burger "L", 1x Pommes Klein, 1x Ketchup/Mayo' },
    { id: 'halloumiteller', name: 'Halloumi Teller', price: 13.00, desc: '6 Halloumi Stücke, Salat, Pommes, Soße' },
    { id: 'veggietwister', name: 'Veggie Twister', price: 8.50, desc: '1x Veggie Twister, 1x Pommes Klein, 1x Ketchup/Mayo' },
    { id: 'veggiemenu', name: 'Veggie Menü', price: 11.00, desc: '1x Veggie Burger "L", 1x Pommes Klein, 1x Ketchup/Mayo' },
    { id: 'falafelteller', name: 'Falafel Teller', price: 13.00, desc: 'Falafel Teller' },
  ],
  'Vorspeisen': [
    { id: 'joghurt', name: 'Joghurt', price: 6.00, desc: 'Joghurt' },
    { id: 'reis', name: 'Reis', price: 6.00, desc: 'Reis' },
    { id: 'bulgur', name: 'Bulgur', price: 6.00, desc: 'Bulgur' },
    { id: 'aciezme', name: 'Scharfe Soße', price: 6.00, desc: 'Scharfe Soße' },
  ],
  'Chicken Snacks': [
    { id: 'hotwings230', name: 'HotWings (230g/4-6 Stk.)', price: 7.00, desc: 'HotWings ca. 230g (4-6 Stück)' },
    { id: 'hotwings350', name: 'HotWings (350g/7-9 Stk.)', price: 10.50, desc: 'HotWings ca. 350g (7-9 Stück)' },
    { id: 'hotwings540', name: 'HotWings (540g/10-14 Stk.)', price: 16.20, desc: 'HotWings ca. 540g (10-14 Stück)' },
    { id: 'crispy4', name: 'Crispy Filet (4x)', price: 7.00, desc: '4x Crispyfilets' },
    { id: 'crispy6', name: 'Crispy Filet (6x)', price: 9.90, desc: '6x Crispyfilets' },
    { id: 'crispy9', name: 'Crispy Filet (9x)', price: 15.20, desc: '9x Crispyfilets' },
    { id: 'chickenbites6', name: 'Chicken Bites (6x)', price: 5.50, desc: '6x Chicken Bites' },
    { id: 'chickenbites9', name: 'Chicken Bites (9x)', price: 8.00, desc: '9x Chicken Bites' },
    { id: 'chickenbites15', name: 'Chicken Bites (15x)', price: 13.00, desc: '15x Chicken Bites' },
    { id: 'geflugel', name: 'Geflügel-Bratwurst Menü', price: 9.00, desc: '1x Geflügel-Bratwurst, 1x Klein Pommes oder Wedges' },
  ],
  'Finger Food': [
    { id: 'nuggets6', name: 'Chicken Nuggets (6x)', price: 4.50, desc: '6x Chicken Nuggets' },
    { id: 'nuggets10', name: 'Chicken Nuggets (10x)', price: 7.50, desc: '10x Chicken Nuggets' },
    { id: 'chili6', name: 'Chili Cheese (6x)', price: 4.50, desc: '6x Chili Cheese Nuggets' },
    { id: 'chili10', name: 'Chili Cheese (10x)', price: 7.50, desc: '10x Chili Cheese Nuggets' },
    { id: 'onion6', name: 'Onion Rings (6x)', price: 4.50, desc: '6x Onion Rings' },
    { id: 'onion10', name: 'Onion Rings (10x)', price: 7.50, desc: '10x Onion Rings' },
    { id: 'mozz6', name: 'Mozzarella Sticks (6x)', price: 4.50, desc: '6x Mozzarella Sticks' },
    { id: 'mozz10', name: 'Mozzarella Sticks (10x)', price: 7.50, desc: '10x Mozzarella Sticks' },
    { id: 'kroketten6', name: 'Kroketten (6x)', price: 4.50, desc: '6x Kroketten' },
    { id: 'kroketten10', name: 'Kroketten (10x)', price: 7.50, desc: '10x Kroketten' },
  ],
  'Buckets': [
    { id: 'bucket2', name: 'Small Mix Bucket (2p)', price: 29.90, desc: 'Gönnt Euch zu zweit den Bucket mit ca. 540g HotWings (10-14 Stück) und 10 mild gewürzten Crispy Filets. Dazu gibt es 2 Beilagen nach Wahl und 3 Dips.' },
    { id: 'bucket3', name: 'Medium Mix Bucket (3p)', price: 34.90, desc: 'Unser beliebter Bucket für 3 Personen mit ca. 400g HotWings (7-10 Stück), 8 knusprigen Crispy Filets und 8 mild gewürzten Filet Bites. Dazu gibt es 3 Beilagen nach Wahl und 4 Dips.' },
    { id: 'bucketparty', name: 'Party Bucket (4p)', price: 44.90, desc: 'Unser Bucket für großen Hunger mit 4 Quick Chicken Burger "S", ca. 640g HotWings (12-16 Stück) und 8 knusprig leckeren Crispy Filets. Dazu gibt es 4 Beilagen Deiner Wahl und 2 Dips.' },
    { id: 'bucketfilet', name: 'Filet Bucket', price: 24.90, desc: '14 Filet Bites, 4 Crispy Filets, 2 Beilagen nach Wahl, 2 Dips nach Wahl.' },
    { id: 'bucketsnack', name: 'Snack Bucket', price: 22.00, desc: '6 Mozzarella, 6 Zwiebelringe, 6 Kroketten, 6 Nuggets, 6 Chilli Cheese, nach Wahl 4 Dip.' },
  ],
  'Beilagen': [
    { id: 'pomssmall', name: 'Pommes Klein', price: 2.90, desc: 'Klassische Pommes' },
    { id: 'pomslarge', name: 'Pommes Groß', price: 3.90, desc: 'Klassische Pommes' },
    { id: 'wedgessmall', name: 'Wedges Klein', price: 2.90, desc: 'Wedges' },
    { id: 'wedgeslarge', name: 'Wedges Groß', price: 3.90, desc: 'Wedges' },
    { id: 'salat', name: 'Clausthalsalat', price: 3.50, desc: 'Frischer Salat' },
    { id: 'gemischtersalat', name: 'Gemischter Salat (Klein)', price: 3.50, desc: 'Gemischter Salat' },
    { id: 'yoyochili', name: 'Yoyo\'s Chili Pommes', price: 4.50, desc: 'Yoyo\'s Chili Pommes' },
  ],
  'Dips & Soßen': [
    { id: 'bbqsauce', name: 'BBQ Soße', price: 0.70, desc: 'BBQ Soße' },
    { id: 'knoblauch', name: 'Knoblauchsauce', price: 0.70, desc: 'Knoblauchsauce' },
    { id: 'ketchup', name: 'Ketchup', price: 0.50, desc: 'Ketchup' },
    { id: 'mayo', name: 'Mayonnaise', price: 0.50, desc: 'Mayonnaise' },
  ],
  'Softdrinks': [
    { id: 'cola', name: 'Coca-Cola (0,33l)', price: 2.50, desc: '0,33l' },
    { id: 'colazero', name: 'Coca-Cola Zero (0,33l)', price: 2.50, desc: '0,33l' },
    { id: 'fanta', name: 'Fanta (0,33l)', price: 2.50, desc: '0,33l' },
    { id: 'sprite', name: 'Sprite (0,33l)', price: 2.50, desc: '0,33l' },
    { id: 'cola125', name: 'Coca-Cola (1,25l)', price: 7.00, desc: '1,25l' },
    { id: 'colazero125', name: 'Coca-Cola Zero (1,25l)', price: 7.00, desc: '1,25l' },
    { id: 'fanta125', name: 'Fanta (1,25l)', price: 7.00, desc: '1,25l' },
    { id: 'sprite125', name: 'Sprite (1,25l)', price: 7.00, desc: '1,25l' },
    { id: 'apfelschorle', name: 'Apfelschorle (0,33l)', price: 2.50, desc: '0,33l' },
    { id: 'water', name: 'Wasser (0,33l)', price: 2.20, desc: '0,33l' },
    { id: 'gingerale', name: 'Ginger Ale (0,33l)', price: 2.90, desc: '0,33l' },
    { id: 'bitterlemon', name: 'Bitter Lemon (0,33l)', price: 2.90, desc: '0,33l' },
    { id: 'tonic', name: 'Tonic Wasser (0,33l)', price: 2.90, desc: '0,33l' },
    { id: 'schokolade', name: 'Kalte Schokolade (0,5l)', price: 3.00, desc: '0,5l' },
    { id: 'erdbeermilch', name: 'Kalte Erdbeermilch (0,5l)', price: 3.00, desc: '0,5l' },
    { id: 'icetea', name: 'Ice Tea (0,33l)', price: 2.50, desc: '0,33l' },
    { id: 'ayran', name: 'Ayran (0,25l)', price: 2.50, desc: '0,25l' },
    { id: 'uludag', name: 'Uludag (0,33l)', price: 2.50, desc: '0,33l' },
    { id: 'apfelsaft', name: 'Apfelsaft (0,2l)', price: 2.90, desc: '0,2l' },
    { id: 'kirschsaft', name: 'Kirschsaft (0,2l)', price: 2.90, desc: '0,2l' },
    { id: 'orangensaft', name: 'Orangensaft (0,2l)', price: 2.90, desc: '0,2l' },
  ],
  'Biere': [
    { id: 'krombacher', name: 'Krombacher Pils (0,33l)', price: 3.90, desc: '0,33l' },
    { id: 'korbi_alkfrei', name: 'Krombacher Alkoholfrei (0,33l)', price: 3.90, desc: '0,33l Alkoholfrei' },
    { id: 'koestritzer', name: 'Köstritzer Schwarzbier (0,33l)', price: 3.90, desc: '0,33l' },
    { id: 'radler', name: 'Radler (0,33l)', price: 3.90, desc: '0,33l' },
    { id: 'radler_alkfrei', name: 'Radler Alkoholfrei (0,33l)', price: 3.90, desc: '0,33l Alkoholfrei' },
    { id: 'erdinger', name: 'Erdinger Weißbier (0,5l)', price: 4.90, desc: '0,5l' },
    { id: 'erdinger_alkfrei', name: 'Erdinger Alkoholfrei (0,5l)', price: 4.90, desc: '0,5l Alkoholfrei' },
  ],
  'Desserts': [
    { id: 'baklava', name: 'Baklava (4 Stück)', price: 4.00, desc: '4 Stück Baklava' },
    { id: 'kuchen', name: 'Kuchen (pro Stück)', price: 2.50, desc: 'Pro Stück' },
  ],
};

const imageMap = {
  'A1': 'A1.jpeg',
  'A2 (Crispyfilets)': 'A2.jpeg',
  'A3 (2x Monamie Burger)': 'A3.jpeg',
  'A4': 'A4.jpeg',
  'B3': 'B3.jpeg',
  'BBQ Menü': 'bbqmenü.jpeg',
  'BBQ-Wrap Menü': 'bbq wrap menü.jpeg',
  'Beef Burger': 'beef burger menü.jpeg',
  'Beef Wrap': 'beef wrap menü.jpeg',
  'Big Mama': 'big mama menü.jpeg',
  'Bro Beef Burger Menü': 'bro beef burger menü.jpeg',
  'Cheeseburger': 'cheeseburger menü.jpeg',
  'Chicken-Wrap Menü': 'chicken wrap menü.jpeg',
  'Chili Beef Menü': 'chilli beefburger menü.jpeg',
  'Clausthal Burger Menü': 'clausthal burger menü.jpeg',
  'Crispy Box': 'crispy box.jpeg',
  'Crush Menü': 'crush burger menü.jpeg',
  'Double Beef Burger': 'double beef menü.jpeg',
  'Double Cheeseburger': 'double cheeseburger menü.jpeg',
  'Double Crush Menü': 'double crush burger menü.jpeg',
  'Double Royal Beef Burger': 'double royal beefburger menü.jpeg',
  'Double Royal Cheeseburger': 'double royal cheeseburger menü.jpeg',
  'Falafel Box': 'falafelbox.jpeg',
  'Filet Bucket': 'fillet bucket.jpeg',
  'HotWings Box': 'hot wings box.jpeg',
  'King Wings Menü': 'king wings.jpeg',
  'Medium Mix Bucket (3p)': 'medium mix bucket.jpeg',
  'Nugget-Wrap Menü': 'nuget wrap menü.jpeg',
  'Nuggets Box': 'nugget box.jpeg',
  'Nugget Burger Menü': 'nugget burger menü.jpeg',
  'Party Bucket (4p)': 'party bucket.jpeg',
  'Pomwrap': 'pomwrap.jpeg',
  'Red Reaper Menü': 'redreapermenü.jpeg',
  'Royal Beef Burger': 'royal beef burger menü.jpeg',
  'Royal Cheeseburger': 'royal cheese burger menü.jpeg',
  'Small Mix Bucket (2p)': 'small mix bucket.jpeg',
  'Snack Bucket': 'snack bucket.jpeg',
  'YoYo Menü': 'yoyo menü.jpeg',
  'Happy Box': 'happyboxmenü.png',
  'Coca-Cola (0,33l)': 'menus/drinks/colafantasprite033.png',
  'Coca-Cola Zero (0,33l)': 'menus/drinks/colafantasprite033.png',
  'Fanta (0,33l)': 'menus/drinks/colafantasprite033.png',
  'Sprite (0,33l)': 'menus/drinks/colafantasprite033.png',
  'Coca-Cola (1,25l)': 'menus/drinks/cola-fanta-sprite-125.jpg',
  'Coca-Cola Zero (1,25l)': 'menus/drinks/cola-fanta-sprite-125.jpg',
  'Fanta (1,25l)': 'menus/drinks/cola-fanta-sprite-125.jpg',
  'Sprite (1,25l)': 'menus/drinks/cola-fanta-sprite-125.jpg',
  'Krombacher Pils (0,33l)': 'menus/drinks/Krombacher-pils033.jpg',
  'Krombacher Alkoholfrei (0,33l)': 'menus/drinks/Krombacheralcoholfrei033.jpg',
  'Radler (0,33l)': 'menus/drinks/krombacher radler 033.webp',
  'Radler Alkoholfrei (0,33l)': 'menus/drinks/krombacher radler 033.webp',
};

function getImgUrl(name, category) {
  if (category === 'Single Burgers') {
    return 'placeholder.png';
  }
  if (imageMap[name]) {
    const img = imageMap[name];
    if (img.startsWith('menus/')) return img;
    return 'menus/popular menus/' + img;
  }
  if (name.toLowerCase().includes('burger')) return 'menus/popular menus/clausthal burger menü.jpeg';
  if (name.toLowerCase().includes('wrap')) return 'menus/popular menus/chicken wrap menü.jpeg';
  if (name.toLowerCase().includes('bucket')) return 'menus/popular menus/medium mix bucket.jpeg';
  return null;
}

function openImageModal(imgUrl, title) {
  document.getElementById('imageModalImg').src = imgUrl;
  document.getElementById('imageModalTitle').textContent = title;
  document.getElementById('imageModal').classList.add('show');
  document.body.style.overflow = 'hidden';
}

function closeImageModal() {
  document.getElementById('imageModal').classList.remove('show');
  document.body.style.overflow = '';
}

let cart = JSON.parse(localStorage.getItem('cart')) || {};

// Clean up cart from local storage if any items are no longer in PRODUCTS
let cartCleaned = false;
Object.keys(cart).forEach(id => {
  const baseId = id.split('|')[0];
  let found = false;
  Object.values(PRODUCTS).forEach(category => {
    if (category.some(p => p.id === baseId)) found = true;
  });
  if (!found) {
    delete cart[id];
    cartCleaned = true;
  }
});
if (cartCleaned) {
  localStorage.setItem('cart', JSON.stringify(cart));
}

let cartVisible = false;
let menuOpen = false;

function toggleMenu() {
  const nav = document.getElementById('categoryNav');
  const overlay = document.getElementById('navOverlay');
  menuOpen = !menuOpen;
  if (menuOpen) {
    nav.classList.add('open');
    overlay.classList.add('show');
  } else {
    nav.classList.remove('open');
    overlay.classList.remove('show');
  }
}

function toggleMobileSearch() {
  const searchEl = document.querySelector('.header-search');
  const isOpen = searchEl.classList.toggle('open');
  if (isOpen) {
    document.getElementById('searchInput').focus();
  }
}

function filterMenu() {
  const query = document.getElementById('searchInput').value.toLowerCase();
  renderMenu(query);
}

function scrollToCategory(categoryName) {
  const target = document.getElementById('cat-' + categoryName.replace(/\s+/g, '-'));
  if (target) {
    const y = target.getBoundingClientRect().top + window.scrollY - 180;
    window.scrollTo({ top: y, behavior: 'smooth' });
    if (window.innerWidth <= 768) toggleMenu();
  }
}

function renderMenu(searchQuery = '') {
  const menu = document.getElementById('menu');
  const categoryNav = document.getElementById('categoryNav');
  // Hero section'ı koru
  const heroSection = menu.querySelector('.hero-feature');
  menu.innerHTML = '';
  if (heroSection) {
    menu.appendChild(heroSection);
  }
  if (categoryNav && searchQuery === '') {
    categoryNav.querySelectorAll('.category-pill').forEach(el => el.remove());
  }

  Object.entries(PRODUCTS).forEach(([category, products]) => {
    const filteredProducts = products.filter(p =>
      p.name.toLowerCase().includes(searchQuery) ||
      (p.desc && p.desc.toLowerCase().includes(searchQuery))
    );

    if (filteredProducts.length === 0) return;

    if (categoryNav && searchQuery === '') {
      const pill = document.createElement('div');
      pill.className = 'category-pill';
      pill.textContent = category;
      pill.onclick = () => {
        const target = document.getElementById('cat-' + category.replace(/\s+/g, '-'));
        if (target) {
          const y = target.getBoundingClientRect().top + window.scrollY - 180;
          window.scrollTo({ top: y, behavior: 'smooth' });
          if (window.innerWidth <= 768) toggleMenu();
        }
      };
      categoryNav.appendChild(pill);
    }

    const categoryDiv = document.createElement('div');
    categoryDiv.className = 'category';
    categoryDiv.id = 'cat-' + category.replace(/\s+/g, '-');

    const title = document.createElement('div');
    title.className = 'category-title';
    title.innerHTML = `<span class="category-title-label">${category}</span>`;
    categoryDiv.appendChild(title);

    const list = document.createElement('div');
    list.className = 'products-list';

    filteredProducts.forEach(product => {
      const productDiv = document.createElement('div');
      productDiv.className = 'product';

      const qty = Object.entries(cart).reduce((sum, [cartKey, amount]) => {
        if (cartKey === product.id || cartKey.startsWith(product.id + '|')) {
          return sum + amount;
        }
        return sum;
      }, 0);
      let imgUrl = getImgUrl(product.name, category);
      const isFood = !['Softdrinks', 'Biere', 'Desserts', 'Dips & Soßen'].includes(category);
      if (!imgUrl && isFood) {
        imgUrl = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%2394a3b8'%3E%3Cpath d='M11 9H9V2H7v7H5V2H3v7c0 2.12 1.66 3.88 3.75 3.99V22h2.5v-9.01C11.34 12.88 13 11.12 13 9V2h-2v7zm5-7v6.6l-2.4 1.8v1.6h5V2h-2.6zM15 22h2.5v-9.5h-2.5V22z'/%3E%3C/svg%3E";
      }
      const isSvg = imgUrl && imgUrl.startsWith('data:image/svg');

      productDiv.innerHTML = `
            ${imgUrl ? `<div class="product-img-wrapper" onclick="openImageModal('${imgUrl}', '${product.name.replace(/'/g, "\\'")}')" style="cursor: pointer;"><img src="${imgUrl}" alt="${product.name}" class="product-img" loading="lazy" ${isSvg ? 'style="padding: 1.5rem;"' : ''}></div>` : ''}
            <div class="product-info" style="${!imgUrl ? 'margin-top: 1rem;' : ''}">
              <div class="product-name">${product.name}</div>
              ${product.desc ? `<div class="product-desc">${product.desc}</div>` : ''}
            </div>
            <div class="product-actions">
              <div class="product-price">€${product.price.toFixed(2).replace('.', ',')}</div>
              <div class="controls">
                ${qty > 0 ? `<button class="btn" onclick="removeBaseItem('${product.id}')">−</button>` : ''}
                ${qty > 0 ? `<span class="qty">${qty}</span>` : ''}
                <button class="btn" onclick="openCustomModalOrAdd('${product.id}')">+</button>
              </div>
            </div>
          `;
      list.appendChild(productDiv);
    });

    categoryDiv.appendChild(list);
    menu.appendChild(categoryDiv);
  });

  updateTotal();
  if (document.getElementById('scrollIndicator')) {
    lastActiveCatId = null;
    if (typeof handleScrollSpy === 'function') handleScrollSpy();
  }
}

let currentCustomizingId = null;

function openCustomModalOrAdd(id) {
  let isCustomizable = false;
  let productName = '';
  let productCategory = '';
  let productDesc = '';

  Object.entries(PRODUCTS).forEach(([catName, category]) => {
    const product = category.find(p => p.id === id);
    if (product) {
      productName = product.name;
      productCategory = catName;
      productDesc = product.desc || '';
      const n = product.name.toLowerCase();

      if (id === 'kingwings') {
        isCustomizable = false;
      } else if (n.includes('burger') || n.includes('menü') || n.includes('menu') || n.includes('wrap') || n.includes('dürüm') || id === 'a4' || id === 'bigmama' || id === 's_bigmama' || id === 'b3' || id === 'happybox' || id === 'bucketparty') {
        isCustomizable = true;
      }
    }
  });

  if (isCustomizable) {
    currentCustomizingId = id;
    document.getElementById('customModalTitle').textContent = productName + ' anpassen';

    const n = productName.toLowerCase();

    let subtitleText = 'Im Burger:';
    if (n.includes('wrap')) subtitleText = 'Im Wrap:';
    else if (n.includes('dürüm')) subtitleText = 'Im Dürüm:';
    const subtitleEl = document.getElementById('customModalSubtitle');
    subtitleEl.textContent = subtitleText;
    subtitleEl.style.display = 'block';
    document.querySelector('.modal-options').style.display = 'flex';

    const isQuickChicken = n.includes('quick chicken') || id === 's_quickchicken' || id === 'happybox' || id === 'bucketparty';
    const isBeefOrVeggie = n.includes('beef') || n.includes('cheese') || n.includes('veggie') || n.includes('halloumi');
    const isChickenBurger = (productCategory === 'Chicken Menüs' && !n.includes('wrap')) ||
      (productCategory === 'Burger' && !isBeefOrVeggie) ||
      id === 'a4' || id === 'bigmama' || id === 's_bigmama' || id === 'b3';

    document.querySelectorAll('.custom-cb').forEach(cb => cb.checked = false);

    const labelZwiebeln = document.getElementById('label-zwiebeln');
    const labelSalat = document.getElementById('label-salat');
    const labelTomaten = document.getElementById('label-tomaten');
    const labelGurken = document.getElementById('label-gurken');

    labelZwiebeln.style.display = 'flex';
    labelSalat.style.display = 'flex';
    labelTomaten.style.display = 'flex';
    labelGurken.style.display = 'flex';

    if (isQuickChicken) {
      labelZwiebeln.style.display = 'none';
      labelSalat.style.display = 'none';
      labelTomaten.style.display = 'none';
    } else if (isChickenBurger) {
      labelTomaten.style.display = 'none';
    }

    const descEl = document.getElementById('customModalDesc');
    if (productDesc) {
      descEl.textContent = productDesc;
      descEl.style.display = 'block';
    } else {
      descEl.style.display = 'none';
    }

    const imgEl = document.getElementById('customModalImg');
    const imgUrl = getImgUrl(productName, productCategory);
    if (imgUrl && !imgUrl.startsWith('data:image/svg')) {
      imgEl.src = imgUrl;
      imgEl.alt = productName;
      imgEl.style.display = 'block';
    } else {
      imgEl.style.display = 'none';
    }

    document.getElementById('customModal').classList.add('show');
  } else if (!['Softdrinks', 'Biere', 'Desserts', 'Dips & Soßen'].includes(productCategory) && productDesc) {
    currentCustomizingId = id;
    document.getElementById('customModalTitle').textContent = productName;
    document.getElementById('customModalSubtitle').style.display = 'none';
    document.querySelector('.modal-options').style.display = 'none';
    const descEl = document.getElementById('customModalDesc');
    descEl.textContent = productDesc;
    descEl.style.display = 'block';
    const imgEl2 = document.getElementById('customModalImg');
    const imgUrl2 = getImgUrl(productName, productCategory);
    if (imgUrl2 && !imgUrl2.startsWith('data:image/svg')) {
      imgEl2.src = imgUrl2;
      imgEl2.alt = productName;
      imgEl2.style.display = 'block';
    } else {
      imgEl2.style.display = 'none';
    }
    document.getElementById('customModal').classList.add('show');
  } else {
    addItemExact(id);
  }
}

function closeCustomModal() {
  document.getElementById('customModal').classList.remove('show');
  currentCustomizingId = null;
}

function confirmCustomModal() {
  if (!currentCustomizingId) return;
  const selected = Array.from(document.querySelectorAll('.custom-cb'))
    .filter(cb => cb.checked)
    .map(cb => cb.value);

  let finalId = currentCustomizingId;
  if (selected.length > 0) {
    finalId += '|' + selected.join(', ');
  }
  addItemExact(finalId);
  closeCustomModal();
}

function addItemExact(id) {
  cart[id] = (cart[id] || 0) + 1;
  saveCart();
  renderMenu();
}

function removeBaseItem(baseId) {
  const cartKey = Object.keys(cart).find(key => key === baseId || key.startsWith(baseId + '|'));
  if (cartKey) {
    removeItemExact(cartKey);
  }
}

function removeItemExact(id) {
  if (cart[id] > 1) {
    cart[id]--;
  } else {
    delete cart[id];
  }
  saveCart();
  renderMenu();
}

function saveCart() {
  localStorage.setItem('cart', JSON.stringify(cart));
}

function calculateTotal() {
  if (getTotalItems() === 0) return 0;
  let total = 0;
  Object.entries(cart).forEach(([id, qty]) => {
    const baseId = id.split('|')[0];
    Object.values(PRODUCTS).forEach(category => {
      const product = category.find(p => p.id === baseId);
      if (product) total += product.price * qty;
    });
  });
  total += calculateDeliveryFee();
  return total;
}

function getTotalItems() {
  return Object.values(cart).reduce((sum, qty) => sum + qty, 0);
}

function updateTotal() {
  const totalItems = getTotalItems();
  document.getElementById('itemCount').textContent = totalItems;
  const cartCountEl = document.getElementById('headerCartCount');
  cartCountEl.textContent = totalItems;
  cartCountEl.dataset.count = totalItems;
  const total = calculateTotal();
  document.getElementById('totalPrice').textContent = '€' + total.toFixed(2).replace('.', ',');
  updateCartDetails();
}

function updateCartDetails() {
  const cartDiv = document.getElementById('cartItems');
  const detailsDiv = document.getElementById('cartDetails');
  if (getTotalItems() === 0) {
    document.getElementById('cartModal').classList.remove('show');
    return;
  }

  let html = '';
  Object.entries(cart).forEach(([id, qty]) => {
    const baseId = id.split('|')[0];
    Object.values(PRODUCTS).forEach(category => {
      const product = category.find(p => p.id === baseId);
      if (product) {
        const customizations = id.includes('|') ? id.split('|')[1] : '';
        const customText = customizations ? `<div style="font-size: 0.8rem; color: #64748b; margin-top: 0.25rem;">${customizations}</div>` : '';
        html += `
              <div class="cart-item">
                <div style="flex: 1;">
                  <div>${product.name}</div>
                  ${customText}
                  <div style="color: var(--accent); font-weight: bold;">€${(product.price * qty).toFixed(2).replace('.', ',')}</div>
                </div>
                <div class="controls" style="margin-left: 1rem;">
                  <button class="btn" onclick="removeItemExact('${id}')">−</button>
                  <span class="qty">${qty}</span>
                  <button class="btn" onclick="addItemExact('${id}')">+</button>
                </div>
              </div>
            `;
      }
    });
  });
  html += `<div style="margin-top: 1rem; font-weight: 700; text-align: right; padding-bottom: 0.5rem;">Total: €${calculateTotal().toFixed(2).replace('.', ',')}</div>`;
  cartDiv.innerHTML = html;
}

function toggleCart() {
  const modal = document.getElementById('cartModal');
  if (modal.classList.contains('show')) {
    modal.classList.remove('show');
  } else {
    if (getTotalItems() > 0) {
      modal.classList.add('show');
    } else {
      alert('Ihr Warenkorb ist leer.');
    }
  }
}

function toggleDeliveryType() {
  const isAbholung = document.querySelector('input[name="deliveryType"]:checked').value === 'abholung';
  const lieferungFields = document.getElementById('lieferungFields');
  const abholungFields = document.getElementById('abholungFields');

  if (isAbholung) {
    lieferungFields.style.display = 'none';
    abholungFields.style.display = 'block';
  } else {
    lieferungFields.style.display = 'block';
    abholungFields.style.display = 'none';
  }

  updateDeliveryInfoSummary();
  updateTotal();
}

function updateDeliveryInfoSummary() {
  const summaryEl = document.getElementById('deliveryInfoSummary');
  if (!summaryEl) return;
  const deliveryTypeEl = document.querySelector('input[name="deliveryType"]:checked');
  const isAbholung = deliveryTypeEl ? deliveryTypeEl.value === 'abholung' : false;
  if (isAbholung) {
    summaryEl.textContent = 'Abholung';
  } else {
    const locationEl = document.querySelector('input[name="location"]:checked');
    const location = locationEl ? locationEl.value : 'clausthal';
    summaryEl.textContent = location === 'clausthal' ? 'Lieferung · Clausthal-Zellerfeld' : 'Lieferung · Andere Adresse';
  }
}

let deliveryInfoOpen = false;
function toggleDeliveryInfo() {
  deliveryInfoOpen = !deliveryInfoOpen;
  const body = document.getElementById('deliveryInfoBody');
  const chevron = document.getElementById('deliveryInfoChevron');
  body.classList.toggle('open', deliveryInfoOpen);
  chevron.classList.toggle('open', deliveryInfoOpen);
}

function handleLocationChange() {
  const locationEl = document.querySelector('input[name="location"]:checked');
  const location = locationEl ? locationEl.value : 'clausthal';
  const otherField = document.getElementById('otherAddressField');
  const clausthalNote = document.getElementById('clausthalNote');
  const otherNote = document.getElementById('otherNote');
  const doorAddress = document.getElementById('doorAddress');

  if (location === 'other') {
    otherField.style.display = 'block';
    clausthalNote.style.display = 'none';
    otherNote.style.display = 'block';
    doorAddress.placeholder = 'Lieferadresse (6,00€ Liefergebühr)';
  } else {
    otherField.style.display = 'block';
    clausthalNote.style.display = 'block';
    otherNote.style.display = 'none';
    doorAddress.placeholder = 'Lieferadresse (Clausthal-Zellerfeld)';
  }

  updateDeliveryInfoSummary();
  updateTotal();
}

function calculateDeliveryFee() {
  const deliveryTypeEl = document.querySelector('input[name="deliveryType"]:checked');
  const isAbholung = deliveryTypeEl ? deliveryTypeEl.value === 'abholung' : false;
  if (isAbholung) return 0;

  const locationEl = document.querySelector('input[name="location"]:checked');
  const location = locationEl ? locationEl.value : 'clausthal';
  if (location === 'clausthal') {
    return 1.50;
  }
  return 6.00;
}

function checkout() {
  const total = getTotalItems();
  if (total === 0) {
    alert('Bitte fügen Sie Artikel hinzu, bevor Sie bestellen');
    return;
  }

  const deliveryTypeEl = document.querySelector('input[name="deliveryType"]:checked');
  const isAbholung = deliveryTypeEl ? deliveryTypeEl.value === 'abholung' : false;
  const locationEl = document.querySelector('input[name="location"]:checked');
  const location = isAbholung ? '' : (locationEl ? locationEl.value : 'clausthal');
  let doorName = '';
  let doorAddress = '';
  let deliveryInfo = '';

  if (isAbholung) {
    const abholTime = document.getElementById('abholTime').value.trim();
    if (!abholTime) {
      alert('Bitte geben Sie die geschätzte Abholzeit an.');
      document.getElementById('abholTime').focus();
      return;
    }
    deliveryInfo = `\n\nAbholung (Keine Liefergebühr)\nAbholzeit: ca. ${abholTime} Minuten`;
  } else {
    doorName = document.getElementById('doorName').value.trim();

    if (!doorName) {
      alert('Bitte geben Sie den Namen an der Tür ein');
      document.getElementById('doorName').focus();
      return;
    }

    doorAddress = document.getElementById('doorAddress').value.trim();
    if (!doorAddress) {
      alert('Bitte geben Sie die Lieferadresse ein');
      document.getElementById('doorAddress').focus();
      return;
    }

    const fee = calculateDeliveryFee();
    deliveryInfo = `\n\nName an der Tür: ${doorName}\nLieferadresse: ${doorAddress}`;
  }

  const items = [];
  Object.entries(cart).forEach(([id, qty]) => {
    const baseId = id.split('|')[0];
    Object.values(PRODUCTS).forEach(category => {
      const product = category.find(p => p.id === baseId);
      if (product) {
        const customizations = id.includes('|') ? ` (${id.split('|')[1]})` : '';
        const linePrice = `€${(product.price * qty).toFixed(2).replace('.', ',')}`;
        items.push(`${qty}x ${product.name}${customizations} – ${linePrice}`);
      }
    });
  });

  const message = `Bestellung:\n${items.join('\n')}\n\nGesamt: €${calculateTotal().toFixed(2).replace('.', ',')}${deliveryInfo}${cart['kuchen'] ? '\n\n⚠️ Bitte Kuchenart angeben!' : ''}`;
  const encoded = encodeURIComponent(message);
  window.open(`https://wa.me/4915253415522?text=${encoded}`, '_blank');
}

// PWA Install
let installPrompt = null;

window.addEventListener('beforeinstallprompt', (e) => {
  e.preventDefault();
  installPrompt = e;
  document.getElementById('installBanner').classList.add('show');
});

document.getElementById('installBtn').addEventListener('click', async () => {
  if (installPrompt) {
    installPrompt.prompt();
    const { outcome } = await installPrompt.userChoice;
    console.log(`User response: ${outcome}`);
    installPrompt = null;
    document.getElementById('installBanner').classList.remove('show');
  }
});

window.addEventListener('appinstalled', () => {
  document.getElementById('installBanner').classList.remove('show');
  installPrompt = null;
});

// Service Worker
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('sw.js').catch(err => console.log('SW failed:', err));
}

// Scroll handling: fade out when idle + accurate scroll spy
let scrollIdleTimeout = null;
let lastActiveCatId = null;

renderMenu();
handleLocationChange();
buildScrollIndicator();

function handleScrollSpy() {
  const categories = Object.keys(PRODUCTS);
  if (!categories.length) return;

  let activeCatId = null;

  // 1. Check if scrolled to absolute bottom
  if (Math.ceil(window.innerHeight + window.scrollY) >= document.documentElement.scrollHeight - 10) {
    activeCatId = 'cat-' + categories[categories.length - 1].replace(/\s+/g, '-');
  } else {
    // 2. Find the active category based on offset
    // Trigger point is ~150px down from the viewport top
    const triggerPoint = 150;
    for (let cat of categories) {
      const id = 'cat-' + cat.replace(/\s+/g, '-');
      const el = document.getElementById(id);
      if (el) {
        const rect = el.getBoundingClientRect();
        // Category title is above or right at our trigger line
        if (rect.top <= triggerPoint) {
          activeCatId = id;
        } else {
          break;
        }
      }
    }

    // Fallback to first category
    if (!activeCatId) {
      activeCatId = 'cat-' + categories[0].replace(/\s+/g, '-');
    }
  }

  if (activeCatId && activeCatId !== lastActiveCatId) {
    lastActiveCatId = activeCatId;
    updateScrollIndicatorUI(activeCatId);
  }
}

function updateScrollIndicatorUI(activeId) {
  const allItems = document.querySelectorAll('.scroll-indicator-item');
  if (!allItems.length) return;

  let activeItem = document.querySelector(`.scroll-indicator-item[data-cat="${activeId}"]`);
  if (!activeItem) return;

  allItems.forEach(i => i.classList.remove('active'));
  activeItem.classList.add('active');

  const allItemsArray = Array.from(allItems);
  const activeIndex = allItemsArray.indexOf(activeItem);
  allItemsArray.forEach((item, idx) => {
    item.dataset.dist = Math.abs(idx - activeIndex);
  });

  const slider = document.getElementById('scrollSlider');
  if (slider) {
    const sliderHeight = slider.offsetHeight || 10;
    const y = activeItem.offsetTop + (activeItem.offsetHeight / 2) - (sliderHeight / 2);
    slider.style.transform = `translateY(${y}px)`;
  }
}

window.addEventListener('scroll', () => {
  const indicator = document.getElementById('scrollIndicator');
  if (indicator) {
    indicator.classList.remove('idle');
    clearTimeout(scrollIdleTimeout);
    scrollIdleTimeout = setTimeout(() => {
      indicator.classList.add('idle');
    }, 400); // 0.4s timeout
  }
  handleScrollSpy();
});

function buildScrollIndicator() {
  const indicator = document.getElementById('scrollIndicator');
  if (!indicator) return;
  indicator.innerHTML = '';

  const categories = Object.keys(PRODUCTS);
  categories.forEach(cat => {
    const id = 'cat-' + cat.replace(/\s+/g, '-');
    const item = document.createElement('div');
    item.className = 'scroll-indicator-item';
    item.dataset.cat = id;
    item.innerHTML = `
          <span class="scroll-indicator-label">${cat}</span>
        `;
    item.addEventListener('click', () => {
      const target = document.getElementById(id);
      if (target) {
        const y = target.getBoundingClientRect().top + window.scrollY - 120;
        window.scrollTo({ top: y, behavior: 'smooth' });
      }
    });
    indicator.appendChild(item);
  });

  const slider = document.createElement('div');
  slider.className = 'scroll-indicator-slider';
  slider.id = 'scrollSlider';
  indicator.appendChild(slider);

  lastActiveCatId = null; // force update
  handleScrollSpy();

  // Start idle on mobile so it doesn't overlap on page load
  if (window.innerWidth <= 768) {
    indicator.classList.add('idle');
  }
}

// Expose functions to global scope for inline HTML event handlers (required for ES modules)
window.toggleMenu = toggleMenu;
window.filterMenu = filterMenu;
window.toggleCart = toggleCart;
window.toggleDeliveryInfo = toggleDeliveryInfo;
window.toggleDeliveryType = toggleDeliveryType;
window.handleLocationChange = handleLocationChange;
window.closeCustomModal = closeCustomModal;
window.confirmCustomModal = confirmCustomModal;
window.closeImageModal = closeImageModal;
window.checkout = checkout;
// Dynamically generated onclick handlers inside renderMenu / renderCart
window.openImageModal = openImageModal;
window.removeBaseItem = removeBaseItem;
window.openCustomModalOrAdd = openCustomModalOrAdd;
window.removeItemExact = removeItemExact;
window.addItemExact = addItemExact;
window.toggleMobileSearch = toggleMobileSearch;