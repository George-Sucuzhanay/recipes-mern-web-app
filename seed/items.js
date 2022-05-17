const db = require("../db")
const Recipe = require("../models/item")

db.on("error", console.error.bind(console, "MongoDB connection error:"));

const main = async () => {
  const recipes = [
    {
        title: "my new recipe",
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
        title: "my new recipe 2",
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
        

    }
  ]
    
  await Recipe.insertMany(recipes);
  console.log("Created Recipes!");
  
}
const run = async() => {
  await main()
  db.close()
}
run()