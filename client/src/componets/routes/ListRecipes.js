import { Box } from "@mui/material";
import Layout from "../shared/Layout";
import { useState, useEffect } from 'react';
import { NavLink } from "react-router-dom";
import axios from 'axios';

export default function ListRecipes (){
  
//pass the results of the array it RecipeCard
//go to RecipeCard to see what to name the props
//example would be name={something} 

const [items, setItems] = useState([])

  const fetchData = async () => {
    try {
      const response = await axios('http://localhost:3000/api/items')
      setItems(response.data.items)

    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  const recipesData = items.map((item) => {
    return <li key={item._id}>
      <NavLink to={`/items/${item._id}`} >{item.title}</NavLink>
    </li>
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