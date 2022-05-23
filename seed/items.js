const db = require("../db")
const Recipe = require("../models/item")

db.on("error", console.error.bind(console, "MongoDB connection error:"));

const main = async () => {
  const recipes = [
    {
      title: "Spaghetti and Meatballs",
      ingredients: ["1 lb. spaghetti",
          "1 lb. ground beef",
          "1/3 c. bread crumbs",
          "1/4 c. finely chopped parsley",
          "1/4 c. freshly grated Parmesan, plus more for serving",
          "1 large egg",
          "2 garlic cloves, minced",
          "Kosher salt"],
      cook_time: 50,
      image: "https://natashaskitchen.com/wp-content/uploads/2015/01/spaghetti-and-meatballs.jpg",
      directions: ["In a large pot of salted boiling water, cook pasta until al dente. Drain.", "In a large bowl, combine beef with bread crumbs, parsley, Parmesan, egg, garlic, 1 teaspoon salt, and red pepper flakes. Mix until just combined then form into 16 balls.","In a large pot over medium heat, heat oil. Add meatballs and cook, turning occasionally, until browned on all sides, about 10 minutes. Transfer meatballs to a plate.","Add onion to pot and cook until soft, 5 minutes. Add crushed tomatoes and bay leaf. Season with salt and pepper and bring to a simmer. Return meatballs to pot and cover. Simmer until sauce has thickened, 8 to 10 minutes.","Serve pasta with a healthy scoop of meatballs and sauce. Top with Parmesan before serving."],
      Rating: 5
     

  },
  {
      title: "Chana Masala",
      ingredients: ["1 Tbsp canola oil",
          "2 Tbsp Garam Masala",
          "1/4 cup cilantro, chopped",
          "1/2 jalapeño, minced",
          "1/2 onion, finely diced",
          "3 cloves garlic, minced",
          "1 inch ginger, fresh, minced",
          "1 ¾ cups prepared or canned chickpeas*",
          "1- 14oz can canned diced tomatoes, with juice (not drained)",
          "1/2 lemon, juiced",
],
      cook_time: 25,
      image: "https://www.commonthreads.org/wp-content/uploads/2021/08/IMG_3459-1-compressed.jpg",
      directions: ["Measure out the canola oil, salt, and Garam Masala.", "Wash and dry the cilantro and jalapeno.","Chop the cilantro; mince the garlic, ginger, and jalapeno; dice the onion.","Prepare chickpeas or rinse and drain canned chickpeas.","Heat a large pot over medium heat. Once hot, add oil, onion, and 1⁄4 tsp salt and cook, stirring frequently until onion is tender, about 5 minutes.","Add the garlic, ginger, cilantro, and jalapeno to the pot and cook, stirring continuously, for about 30 seconds.","Add the garam masala and stir until everything is evenly coated with the spices. You can add a little more oil at this point if the pan is looking dry.","Add tomatoes and chickpeas and remaining salt. If the mixture looks a little too thick, add up to 1 cup water.","Increase heat to medium high until it reaches a rolling simmer, then reduce heat to low or medium-low and maintain a simmer (uncovered) for 15-20 minutes, or until thick and stew-like. Stir occasionally.","Remove from heat and add lemon juice.","Serve and enjoy!"],
      Rating: 2
     

  },
  {
    title: "Gumbo",
    ingredients: [
        "1 Lb shrimp (fresh, frozen, and/or dried)",
        "1/2 C vegetable oil",
        "1 C flour (white whole wheat)",
        "2 C okra",
        "1 C onions",
        "1/2 C celery",
        "1/2 C bell pepper",
   "3 cloves garlic",
        "1.5 Qts low-sodium vegetable broth",
        "Sodium free cajun/creole seasoning",
        "3 Bay leaves",
        "1 C green onions",
        "1/4 C parsley"
],
    cook_time: 80,
    image: "https://www.commonthreads.org/wp-content/uploads/2021/08/6B7A7743-scaled.jpg",
    directions: ["Wash and dry produce", "Peel and devein shrimp","Chop onions, celery, bell peppers","Slice the okra","Peel and mince garlic","Measure out the ingredients","In a large stock pot, heat vegetable oil over medium heat, add flour, stirring constantly with a whisk until golden brown for about 10 minutes. Be careful not to burn.","Add okra to the roux, reduce heat to a simmer and let cook for about 10 minutes to soften.","Add onions, peppers, and celery, and stir until softened. Add garlic and Cajun seasoning, salt, and pepper. Slowly stir in vegetable broth and bring to a boil, add bay leaves. Reduce heat to low and simmer until thickened, stirring occasionally, about 35 minutes.","Add shrimp, green onions, and parsley and let cook for about 10 minutes (until shrimp is pink and opaque), taste, and adjust seasonings.","Garnish with green onions and serve over whole grain rice"],
    Rating: 5
   

},
{
    title: "Oven Fried Catfish",
    ingredients: ["1 C yellow cornmeal",
        "2 tsp Creole style seasoning, such as Old Bay",
        "1 tsp paprika",
        "1/2 tsp pepper",
        "2 eggs",
        "1 Tbsp hot sauce",
        "1 1/2 Lb catfish fillets"
],
    cook_time: 15,
    image: "https://www.commonthreads.org/wp-content/uploads/2021/08/IMG_7787-compressed.jpg",
    directions: ["Preheat the oven to 425 degrees F", "Coat a baking sheet with cooking spray.","Measure out all ingredients","In a bowl, combine the cornmeal, Creole seasoning, paprika, and pepper.","In another bowl, mix eggs and hot sauce","Coat the fillets in the egg mixture.","Immediately cover in the breading mixture, coating evenly","Place each breaded fillet onto the prepared baking sheet","Place the baking sheet with fillets into the oven","Bake for 15 minutes, or until golden brown, turning midway through","Season with salt to taste.","Serve immediately with a side of string beans.","Enjoy!"],
    Rating: 3
   

},
{
  title: "String Beans",
  ingredients: [
"2 lb green beans",
"2 Shallot",	
"1 Tbsp lemon peel zest",
"2 Tbsp olive oil",
"Salt and pepper to taste",
"1/4 C almonds, toasted (optional)"
],
  cook_time: 15,
  image: "https://www.commonthreads.org/wp-content/uploads/2021/08/IMG_9444-compressed-scaled-1.jpg",
  directions: ["Wash and dry produce.","Trim the ends of the green beans.","Thinly slice the shallots.","Zest the lemon.","Measure out the ingredients.","Blanch green beans in a large stock pot of well salted boiling water and cook until bright green in color and tender crisp, roughly 2-3 minutes.","Drain and shock in a bowl of ice water to stop cooking.","Heat a saute pan over medium heat. Add the olive oil.","Add the shallots and saute for 2-3 minute.","Add green beans and continue to saute until coated in oil and heated through, about 5 minutes.","Add lemon zest and season with salt and pepper, top with sliced toasted almonds. (optional).","Serve and enjoy!"],
  Rating: 4
},


{
  title: "Flatbread(no yeast)",
  ingredients: [
"2 cups (260 grams) all-purpose flour",
"1 1/2 teaspoons baking powder",
"1 teaspoon fine sea salt",
"2 tablespoons olive oil",
"1 teaspoon pure maple syrup or sugar",
"3/4 cup (175 ml) cold water",
"Vegetable oil for cooking"
],
  cook_time:10,
  image: "https://www.inspiredtaste.net/wp-content/uploads/2020/05/No-Yeast-Flatbread-Recipe-1-1200.jpg",
  directions: ["In a large bowl, whisk the flour, baking powder, and salt together until well blended.","Make a well in the middle of the flour mixture, and then add olive oil, maple syrup, and most of the water (saving a few tablespoons to add later as necessary).","Switch to a rubber spatula or spoon and stir the wet ingredients into the flour mixture. If the dough seems dry, add the remaining water. When the dough comes together, transfer to a floured work surface and knead 5 to 10 times until smooth. Cover with a clean dish cloth and leave for 10 minutes.","Divide the dough into six equal pieces. Dust each piece in flour and roll into a disc that’s between 1/8-inch and 1/4-inch thick. (Rolling thinner will make thinner bread that’s less soft in the middle. Rolling thicker will make thicker, fluffier bread.)","Add one to two tablespoons of oil to a skillet placed over medium heat. When the oil looks shimmery, add a flatbread (or more if they fit), and cook until golden brown on one side, flip and cook until golden brown on the second side, 1 to 2 minutes on each side.","Transfer cooked flatbread to a plate, cover with a clean dish towel to keep warm, and then continue with the remaining flatbreads. If the skillet looks dry, add a little more oil before continuing."],
  Rating: 5
},

{
  title: "Apple and PB Smoothie",
  ingredients: [
"1 apple",
"1 T nut butter or seed butter",
"6 oz. nonfat plain yogurt",
"1 T vanilla extract",
"1/2 C low-fat milk",
"1/4 C oats",
"½ t cinnamon"
],
  cook_time: 10,
  image: "https://www.commonthreads.org/wp-content/uploads/2021/08/IMG_3210-2-compressed-scaled-1.jpg",
  directions: ["Wash and dry produce","Measure all ingredients","With the apple standing up, slice from top, near the stem along the core. Repeat until all the apple are removed from the core. Discard core. Cube apple pieces into ½ inch cubes.","Add all ingredients to the blender.","Blend until smooth.","Pour into glasses, serve and enjoy!"],
  Rating: 3
},

{
  title: "Strawberry Jam",
  ingredients: [
"1 lb fresh strawberries",
"1 1/2 cups sugar",
"2 Tbs lemon juice",
"½ tsp lemon zest optional"
],
  cook_time: 20,
  image: "https://www.kyleecooks.com/wp-content/uploads/2017/08/Small-Batch-Strawberry-Jam-8.jpg",
  directions: ["Wash and slice the strawberries, removing the hulls and green tops.","Add them to a saucepan, and mix the sugar in well.","Stir continually over medium heat, and bring the strawberries to boil.","Once boiling, add the lemon juice and zest (if using).","Boil for about 15 minutes, or until the jam reaches 220F.","Stir often, to make sure the jam doesn’t burn.","Pour into a jar and allow to cool.","Cover and refrigerate.","Use within about 2 weeks (if it lasts that long)."],
  Rating:3
},

  ]
    
  await Recipe.insertMany(recipes);
  console.log("Created Recipes!");
  
}
const run = async() => {
  await main()
  db.close()
}
run()