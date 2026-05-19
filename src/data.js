import hero1 from './assets/images/hero/hero-1.jpg'
import r1 from './assets/images/recipes/recipe-1.jpg'
import r2 from './assets/images/recipes/recipe-2.jpg'
import r3 from './assets/images/recipes/recipe-3.jpg'
import r4 from './assets/images/recipes/recipe-4.jpg'
import r5 from './assets/images/recipes/recipe-5.jpg'
import r6 from './assets/images/recipes/recipe-6.jpg'
import b1 from './assets/images/baking/baking-1.jpg'
import b2 from './assets/images/baking/baking-2.jpg'
import b3 from './assets/images/baking/baking-3.jpg'
import k1 from './assets/images/kitchen/kitchen-1.jpg'
import k2 from './assets/images/kitchen/kitchen-2.jpg'
import k3 from './assets/images/kitchen/kitchen-3.jpg'
import bl1 from './assets/images/blog/blog-1.jpg'
import bl2 from './assets/images/blog/blog-2.jpg'
import bl3 from './assets/images/blog/blog-3.jpg'
import c1 from './assets/images/community/c-1.jpg'
import c2 from './assets/images/community/c-2.jpg'
import c3 from './assets/images/community/c-3.jpg'

export const images = { hero1, r1, r2, r3, r4, r5, r6, b1, b2, b3, k1, k2, k3, bl1, bl2, bl3, c1, c2, c3 }

export const categories = [
  { slug: 'family-dinners', name: 'Family Dinners', img: r1, desc: 'Hearty weeknight meals that bring everyone to the table.' },
  { slug: 'baking-recipes', name: 'Baking Recipes', img: b1, desc: 'Pies, breads, cookies — the comforting smell of home.' },
  { slug: 'southern-comfort-food', name: 'Southern Comfort Food', img: r3, desc: 'Slow-cooked classics from the Louisiana kitchen.' },
  { slug: 'holiday-meals', name: 'Holiday Meals', img: r4, desc: 'Thanksgiving, Christmas, and the recipes we wait all year for.' },
  { slug: 'grandmas-recipes', name: "Grandma's Recipes", img: r5, desc: 'Handwritten cards, dog-eared cookbooks, timeless flavor.' },
  { slug: 'kitchen-tips', name: 'Kitchen Tips', img: k1, desc: 'Little tricks that turn good cooks into great ones.' }
]

export const popularRecipes = [
  { id: 1, title: "Grandma Ruth's Buttermilk Biscuits", time: '35 min', servings: '8', img: r1, excerpt: 'Flaky, golden, and ready for butter and sorghum syrup.', full: 'Sift 2 cups flour with 1 tbsp baking powder and 1 tsp salt. Cut in 6 tbsp cold butter until pea-sized. Stir in 3/4 cup buttermilk just until shaggy. Pat to 1-inch thick, fold three times, cut rounds and bake at 425°F for 12-14 minutes until tall and golden. The secret is keeping everything ice cold.' },
  { id: 2, title: 'Slow-Cooked Beef Pot Roast', time: '4 hrs', servings: '6', img: r2, excerpt: 'Sunday afternoon dinner the way mama used to make.', full: 'Season a 4-lb chuck roast generously. Sear on all sides in a Dutch oven. Add onions, carrots, celery, garlic, 2 cups beef stock, a splash of red wine, fresh thyme and bay leaves. Cover and braise at 325°F for 3 to 4 hours until fork tender. Rest 15 minutes before slicing against the grain.' },
  { id: 3, title: 'Louisiana Red Beans & Rice', time: '2 hrs', servings: '6', img: r3, excerpt: 'A Baton Rouge Monday tradition with smoked sausage.', full: 'Soak 1 lb red beans overnight. Sauté the holy trinity (onion, bell pepper, celery) with garlic and andouille sausage. Add beans, water, bay leaves, thyme, and a smoked ham hock. Simmer low for 2 hours until creamy. Smash a few beans against the pot for that classic body. Serve over white rice with hot sauce.' },
  { id: 4, title: 'Cast Iron Skillet Cornbread', time: '30 min', servings: '8', img: r4, excerpt: 'Crispy edges, tender middle — straight from the skillet.', full: 'Preheat a cast iron skillet with 2 tbsp bacon grease at 425°F. Whisk 1.5 cups cornmeal, 1/2 cup flour, 1 tbsp sugar, 2 tsp baking powder and salt. Stir in 2 eggs, 1.5 cups buttermilk and 4 tbsp melted butter. Pour into the screaming hot skillet and bake 22 minutes.' },
  { id: 5, title: 'Mama’s Chicken & Dumplings', time: '1.5 hrs', servings: '6', img: r5, excerpt: 'Pillowy dumplings in a peppery, golden broth.', full: 'Poach a whole chicken with celery, onion, carrot and peppercorns until tender. Shred the meat and strain the broth. Make drop dumplings with 2 cups flour, 1 tsp baking powder, salt, 3 tbsp butter and 3/4 cup milk. Simmer dumplings in the broth covered for 15 minutes. Stir in the chicken and finish with cracked black pepper.' },
  { id: 6, title: 'Apple Crumble Skillet', time: '45 min', servings: '6', img: r6, excerpt: 'Cinnamon apples beneath a buttery oat crumble.', full: 'Toss 6 sliced Granny Smith apples with brown sugar, cinnamon, nutmeg and lemon juice. Pile into a buttered skillet. Top with a crumble of 1 cup oats, 3/4 cup flour, 1/2 cup brown sugar, 1 tsp cinnamon and 1/2 cup cold butter. Bake at 375°F for 35 minutes until bubbly. Serve warm with vanilla ice cream.' }
]

export const bakingRecipes = [
  { id: 1, title: 'Classic Southern Pecan Pie', img: b1, excerpt: 'Buttery crust, toasted pecans, dark karo filling.', full: 'Blind bake a butter crust until just set. Whisk 1 cup dark corn syrup, 3 eggs, 1 cup brown sugar, 4 tbsp melted butter, 1 tsp vanilla and a pinch of salt. Fold in 2 cups toasted pecan halves. Pour into the crust and bake at 350°F for 50-60 minutes until the center is just barely jiggly. Cool completely before slicing.' },
  { id: 2, title: 'Buttermilk Pound Cake', img: b2, excerpt: 'Tight crumb, lemony glaze, never dry.', full: 'Cream 1 cup butter with 3 cups sugar for 8 minutes. Add 6 eggs one at a time. Alternate 3 cups cake flour with 1 cup buttermilk. Add 1 tsp vanilla and 1 tsp lemon zest. Bake in a greased bundt pan at 325°F for 75-85 minutes. Glaze with powdered sugar and fresh lemon juice while warm.' },
  { id: 3, title: 'Brown Butter Chocolate Chip Cookies', img: b3, excerpt: 'Crisp edges, gooey centers, nutty depth.', full: 'Brown 1 cup butter until amber and nutty, cool slightly. Whisk with 1 cup brown sugar and 1/2 cup white sugar. Add 2 eggs and 2 tsp vanilla. Fold in 2.25 cups flour, 1 tsp baking soda, 1 tsp salt and 2 cups chocolate chunks. Chill 24 hours. Scoop and bake at 375°F for 11 minutes. Sprinkle with flaky sea salt.' }
]

export const kitchenStories = [
  { id: 1, title: 'Sunday Mornings at Nana’s Table', img: k1, excerpt: 'The smell of biscuits and bacon drifting up the stairs.', full: 'Every Sunday Nana woke before sunrise. By the time we shuffled downstairs in our sock feet, the kitchen windows were fogged from the heat of the oven and the percolator was hissing on the stove. She kept her recipes in a tin recipe box on top of the icebox — index cards browned at the edges, half of them in pencil. We never measured anything; she measured with her hand. That kitchen taught me that a meal is an act of love before it is anything else.' },
  { id: 2, title: 'The Cast Iron That Built a Family', img: k2, excerpt: 'A 1947 Wagner skillet passed down four generations.', full: 'Mama’s skillet is older than she is. My great-grandfather bought it the year he came home from the war, and it has fried more eggs than anyone could count. It went through a flood in ‘83, a kitchen fire in ‘94, and a move across three states. Every time the seasoning is reborn. When my daughter turns sixteen, that skillet is hers — along with the responsibility of teaching the next cook in the family how to keep it black.' },
  { id: 3, title: 'Holidays in the Magnolia Street Kitchen', img: k3, excerpt: 'Eleven cousins, one oven, and a turkey that always made it.', full: 'For thirty-two years our family Thanksgiving lived in the same Baton Rouge kitchen on Magnolia Street. The aunts arrived with casseroles wrapped in foil, the uncles parked themselves by the gumbo pot, and the kids fought over the corner of the cornbread. There was never enough counter space and somehow always enough food. The recipes on this site were born in that house — and we hope they find their way into your kitchen too.' }
]

export const blogPosts = [
  { id: 1, title: 'How to Build a Pantry Like Your Grandmother Did', img: bl1, date: 'Mar 12, 2026', excerpt: 'The five staples she always had, and why they still matter.', full: 'A well-stocked pantry is the difference between a stressful weeknight and a relaxed one. Your grandmother probably kept flour, sugar, lard, salt, baking powder and a row of mason jars filled with what the garden gave her. Build yours around those bones: a great salt, a fresh leavener, two flours, one good fat, and a vinegar that can wake anything up. From there, every meal is a few steps away.' },
  { id: 2, title: 'Seasoning Cast Iron — The Honest Guide', img: bl2, date: 'Feb 28, 2026', excerpt: 'No myths, just what works after fifty years of skillets.', full: 'Forget every blog telling you cast iron is fragile. Wash it with soap if you want. The truth: heat it dry, rub on a thin film of neutral oil (not olive), wipe off as much as you think you should, then put it upside down in a 450°F oven for an hour. Repeat three times when new and once a season after. The black patina is built by cooking — bacon and cornbread do more than any "seasoning routine" ever will.' },
  { id: 3, title: 'The Best Comfort Foods for a Rainy Day', img: bl3, date: 'Feb 14, 2026', excerpt: 'Six meals that taste like a hug from someone you miss.', full: 'When the rain rolls in off the Gulf, there is only one answer: something braised, something baked, and something warm to drink. Start a pot of chicken and dumplings on the back burner. Slide a peach cobbler into the oven. Put the kettle on for sweet tea. The whole house will smell like a memory by suppertime — and that is the entire point of cooking from this kind of book.' }
]

export const testimonials = [
  { name: 'Eleanor M.', img: c1, quote: 'These recipes brought my grandmother’s Sunday dinners back to life. My kids ask for the biscuits every weekend now.' },
  { name: 'Maggie R.', img: c2, quote: 'The cornbread recipe alone is worth bookmarking the entire site. Tastes exactly like the one my aunt made in Mississippi.' },
  { name: 'Sarah K.', img: c3, quote: 'I love how every recipe comes with a story. It feels less like a blog and more like a family cookbook.' }
]

export const faqs = [
  { q: 'Are these recipes truly traditional?', a: 'Yes — every recipe on the site has been cooked in our family for at least two generations. Some go back four. We test each one in a modern home kitchen before publishing it.' },
  { q: 'Can I substitute ingredients?', a: 'Absolutely. We try to note good swaps in each recipe (gluten-free flours, dairy-free buttermilk, etc.). When you stray far from the original, just stay close to the same fat, acid, and texture as the original.' },
  { q: 'Do you share recipe cards I can print?', a: 'Every recipe page has a clean print view. Just open the recipe, hit print, and you’ll get a card-sized version perfect for the tin on top of the fridge.' },
  { q: 'How often do you publish new recipes?', a: 'We publish a new recipe every Tuesday and a longer kitchen story every other Friday. Sign up for the newsletter to get them in your inbox.' },
  { q: 'Can I submit my own family recipe?', a: 'Please do. Email us at familyrecipelegacy@gmail.com with the recipe, the story behind it, and a photo if you have one. We feature reader recipes on the Community page.' }
]
