import { Box, TextField , Rating, Typography  } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import Layout from "../shared/Layout";





export default function Search () {
    const [recipes, setRecipes] = useState([])
    const [text,setText] = useState('')
    const [suggestions,setSuggestions] = useState([])
    const [block , setBlock] = useState('block h-screen')
    
   

  useEffect(() => {
    const fetchData = async () => {
        try {
            
          const response = await axios(`${process.env.REACT_APP_API_URL}/api/recipes`)
          setRecipes(response.data.recipes)
    
        } catch (error) {
          console.error(error)
        }
      }
    fetchData()
  }, [])


  const onChangeHandler = (text) => {
    let matches = []
    if (text.length > 0){
        matches = recipes.filter((recipe) => {
            //const regex = new RegExp[`${text}`, "gi"];
            return recipe.title.match(text) 
        })
    }
    console.log(matches)
    setSuggestions(matches)
    setText(text)
}

const onsuggestion = (text) => {
    setText(text);
    setSuggestions([]);
    setBlock('hidden')
}

onsubmit = () => {
    setText(text);
    setSuggestions([]);
    setBlock('hidden')
}

//the 
// eslint-disable-next-line
const display = recipes.map((recipe) => {
   
    if (text === recipe.title){
        let ingredient = recipe.ingredients.map((item) => {
            return(
                <li>{item}</li>
            )
        })
         let direction = recipe.directions.map((item) => {
            return(
                <li>{item}</li>
            )
        })
        let value = recipe.Rating
    return(
        
        <Box className="grid gap-y-4 justify-items-center mb-5">
            
            <Box >
        <div className="flex justify-center py-5 text-xl "><h1>{recipe.title}</h1></div>
        <div className="px-10 flex justify-center">
      <img className="w-lg " src={recipe.image} alt=""/>
        </div>

        <div className="flex justify-evenly pt-4 ">
          <h3> Cook Time: {recipe.cook_time}min </h3>
          <Typography className="flex" component="legend">Rating: <Rating name="read-only" value={value} readOnly  /> </Typography>
          
          
        </div>
            <div className="divide-y divide-zinc-100  ">
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
}) 
//

    //view
    return (
        <Layout>
            
              <h1 className="flex justify-center my-10 text-3xl" >Search</h1>
            <Box className="flex flex-wrap justify-center " >
          

            <div >
            <TextField className=" md:w-96 bg-zinc-200/80 " id="standard-basic" label="Standard" type="text"  onChange={e => onChangeHandler(e.target.value)}
            value={text} variant="filled"/>
                    <div className="divide-y divide-black md:w-96 absolute">
                {suggestions && suggestions.map((suggestion,i) => 

                <div key={i} className='bg-slate-200/50 hover:shadow-lg hover:bg-slate-400 lg:hover:bg-slate-200/50 lg:hover:shadow-cyan-500/75 lg:transform lg:transition-all lg:hover:scale-110 cursor-pointer px-2 backdrop-blur-sm z-30' onClick={() => onsuggestion(suggestion.title)  }>
                {suggestion.title}</div>

                )}
                </div>
            </div>
            </Box>

            <div>
                {display}
            </div>

            < div className={block}>
            </div>
       
    
        </Layout>
    )
}