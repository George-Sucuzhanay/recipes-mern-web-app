import { useEffect, useState } from "react";
import Layout from "../shared/Layout";
import axios from "axios"
import { Box, Button, Rating, Typography } from "@mui/material";


export default function Home () {
const [recipes,setRecipes] = useState([])
const [recipe, setRecipe] = useState([])
const [items,setItems] = useState([])
const [direc,setDirec] = useState([])
const [value, setValue] = useState(0);
const [displayed,setDisplayed] = useState({
    recipe:'hidden',
    space:"block h-screen",
})

const fetchSingleData= async (id1) => {
    try {
        const response = await axios(`${process.env.REACT_APP_API_URL}/api/recipes/${id1}`)
 
        console.log(response.data.recipe)



        setRecipe(response.data.recipe)
        setItems(response.data.recipe.ingredients)
        setDirec(response.data.recipe.directions)
        setValue(response.data.recipe.Rating)
        
    }catch (err) {
        console.error(err)
    }
}

const fetchData= async () => {
    try {
        const response = await axios(`${process.env.REACT_APP_API_URL}/api/recipes`)
        console.log(response.data.recipes)
        setRecipes(response.data.recipes)
    }catch (err) {
        console.error(err)
    }
}

 
let handleRandom = () => {
    const index = Math.floor(Math.random() * recipes.length);
        fetchSingleData(recipes[index]._id)
        setDisplayed({
            recipe:'block backdrop-blur-md',
            space:"hidden"
        })
}


useEffect(()=>{
    fetchData()  
},[])

// console.log(items)

 let ingredient = items.map((item,i) => {
    return(
        <li key={i} >{item}</li>
    )
})
 let direction = direc.map((item,i) => {
    return(
        <li key={i}>{item}</li>
    )
})

 const display = (dis) => {
    return(
        
        <Box className="grid gap-y-4 justify-items-center mb-5">
            <div>
                <Button     
                 className="text-white w-56 h-16 bg-violet-400/70  hover:bg-violet-700 md:transform md:transition-all md:hover:scale-105"
                 onClick={handleRandom}
                 > test random output</Button>
            </div>
            <Box className={dis.recipe}>
        <div className="flex justify-center py-5 text-xl "><h1>{recipe.title}</h1></div>
        <div className="px-7 md:px-16">
      <img className="max-h-70" src={recipe.image}  alt=""/>
        </div>

        <div className="flex justify-evenly pt-4 ">
          <h3> Cook Time: {recipe.cook_time}min </h3>
          <Typography className="flex" component="legend">Rating: <Rating name="read-only" value={value} readOnly  /> </Typography>
          
          
        </div>
            <div className="divide-y divide-zinc-100 ">
            <div > 
                 <div className=" flex justify-center pt-3">
                       <h1 className="text-xl font-bold">Ingredients:</h1>
                   </div>
            <ul className="px-10 pb-5 pt-2 flex flex-col items-right w-full  list-disc gap-1">
            {ingredient}
            </ul>
            </div>
               <div className=" rounded-lg">
                   <div className=" flex justify-center pt-2">
                       <h1 className="text-xl font-bold">Directions:</h1>
                   </div>
            <ul className="px-10 pb-5 pt-2 flex flex-col items-right w-full  list-decimal gap-2">
            {direction}
            </ul>
            </div>
            </div>
            </Box>
        </Box>
    )
}



    return(
        <Layout>
             <div className="my-10">
            <h1 className=" pt-5 px-4 text-2xl font-bold flex justify-center">Get A Random Recipe Choice</h1>
            </div>


            {display(displayed)}
            <div className={displayed.space}></div>


        </Layout>
    )
}