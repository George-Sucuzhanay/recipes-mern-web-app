import { Box } from "@mui/material";
import Layout from "../shared/Layout";


export default function ListRecipes (){
  
//pass the results of the array it RecipeCard
//go to RecipeCard to see what to name the props
//example would be name={something} 
    return(
        <Layout>
            <div className="mb-20">
            <h1 className=" pt-5 text-3xl font-bold flex justify-center">show all recipes</h1>
            </div>
            
            <Box className="flex flex-wrap justify-evenly gap-y-4">
            {/*here is where to put the results to display*/}
            </Box>
        </Layout>
    )
}