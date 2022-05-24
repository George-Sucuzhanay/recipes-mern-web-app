import { Box } from "@mui/material";
import Layout from "../shared/Layout";
import { useState, useEffect } from 'react';
import { NavLink } from "react-router-dom";
import axios from 'axios';
import RecipeCard from "../shared/RecipeCard";

export default function ListRecipes (){
  
//pass the results of the array it RecipeCard
//go to RecipeCard to see what to name the props
//example would be name={something} 

const [recipes, setRecipes] = useState([])

  const fetchData = async () => {
    try {
      const response = await axios('http://localhost:3000/api/recipes')
      setRecipes(response.data.recipes)

    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  const recipesData = recipes.map((recipe) => {
    return  (
     <RecipeCard 
    id={recipe._id}
    rating={recipe.Rating}
    title={recipe.title}
    image={recipe.image}
    cooktime={recipe.cook_time}
    />
    )

  })
  
    return(
        <Layout>
            <div className="mb-20">
            <h1 className=" pt-5 text-3xl font-bold flex justify-center">show all recipes</h1>
            </div>
            
            <Box className="flex flex-wrap justify-evenly gap-y-4">
            {recipesData}
            </Box>
        </Layout>
    )
}