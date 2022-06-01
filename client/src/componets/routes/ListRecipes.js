import { Box} from "@mui/material";
import Layout from "../shared/Layout";
import { useState, useEffect } from 'react';
import axios from 'axios';
import RecipeCard from "../shared/RecipeCard";
export default function ListRecipes (){
  
//pass the results of the array it RecipeCard
//go to RecipeCard to see what to name the props
//example would be name={something} 

const [recipes, setRecipes] = useState([])
const [isLoading,setIsLoading] = useState(true)

 
// axios({
//   url: `${process.env.REACT_APP_API_URL}/api/recipes`,
//   method: 'POST',
//   data: recipe
// }).then(res => setCreateRecipe(res.data.recipe)).catch(console.error)

  const fetchData = async () => {
    try {
      // const response = await axios(`${process.env.REACT_APP_API_URL}/api/recipes`, { headers: {'Access-Control-Allow-Origin': '*'}})
      // eslint-disable-next-line
      const response = await axios({
        url: `${process.env.REACT_APP_API_URL}/api/recipes`,
        method: 'GET',
        headers: {'Access-Control-Allow-Origin': '*'}
      })
      .then(response => setRecipes(response.data.recipes) )
      .then(setTimeout(() => {
        setIsLoading(false)
      }, 3000))


    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    fetchData()
   
  }, [])

  const recipesData = recipes.map((recipe,i) => {
    return  (
      <RecipeCard 
      key={i}
      id={recipe._id}
      rating={recipe.Rating}
      title={recipe.title}
      image={recipe.image}
      cooktime={recipe.cook_time}
      isLoading={isLoading}
      />
    
    )

  })
  
    return(
        <Layout>
          
            <div className="my-10">
            <h1 className=" pt-5 text-3xl font-bold flex justify-center">My Recipes</h1>
            </div>
            
            <Box className="flex flex-wrap justify-center gap-4 mb-10 ">
            {recipesData}
            </Box>
            
            

        </Layout>
    )
}