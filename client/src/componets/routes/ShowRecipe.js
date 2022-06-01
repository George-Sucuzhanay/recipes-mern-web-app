import { useState, useEffect } from 'react';
import { NavLink, useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import Layout from '../shared/Layout'
import { Button } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

import { Rating, Box} from '@mui/material';
import { Typography} from '@mui/material';
import { Edit } from '@mui/icons-material';

function ShowRecipe(){
    const [recipe, setRecipe] = useState([])
    const [deleted, setDeleted] = useState(false)
    const [items,setItems] = useState([])
    const [direc,setDirec] = useState([])
    const [value, setValue] = useState(0);
    const { id } = useParams();
    let navigate = useNavigate();

    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await axios(`${process.env.REACT_APP_API_URL}/api/recipes/${id}`)
    
            const result = response.data.recipe
            setRecipe(result)
            setItems(result.ingredients)
            setDirec(result.directions)
            setValue(result.Rating)
          
          } catch (error) {
            console.error(error)
          }
        }
        fetchData()
      }, [id])
    
      useEffect(() => {
        if (!recipe) {
          return <p>Loading...</p>
        }
      }, [recipe])
    
      const destroy = () => {
       axios({
          url: `${process.env.REACT_APP_API_URL}/api/recipes/${id}`,
          method: 'DELETE'
        }).then(() => setDeleted(true)).catch(console.error)
      }
    
      useEffect(() => {
        if (deleted) {
          return navigate("/recipes")
        }
      }, [deleted, navigate])


   

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


      
      
      return (
        <Layout>

            <Box className="md:grid md:grid-cols-3 md:gap-y-10 mt-20">
                <div className="flex flex-col gap-2 md:gap-0 md:flex-none md:grid md:grid-cols-2 px-3 col-span-3 mb-5 md:mb-0" >
                <NavLink to={`/recipes/${id}/edit`} >
                
                <Button className=" w-full md:w-80 md:h-16  bg-blue-400/70 text-white hover:bg-blue-700 hover:text-white md:transform md:transition-all md:hover:scale-105" >
                  
                  <Edit  />
                  Edit
                  
                  </Button>

                </NavLink>

                <Button  
                onClick={() => destroy()} className="px-5  col-start-3  md:w-80 md:h-16 bg-red-400/70 text-white hover:bg-red-700 hover:text-white md:transform md:transition-all md:hover:scale-105"> 
                
                <DeleteIcon className="md:animate-[wiggle_1s_ease-in-out_infinite]" />
                
                Delete Recipe
                </Button>
                </div>

            




            

           
        
                <div className="flex justify-center items-center " >
           
           <Typography >
               Cook Time: {recipe.cook_time}min 
           </Typography>
           </div>
           <div className="flex justify-center items-center md:col-start-3" >
                <Typography alignItems="center" className="flex" component="legend"> Rating: <Rating name="read-only" value={value} readOnly  /> </Typography>
                </div>
               
                    <div  className="flex flex-col items-center md:row-start-2 md:col-start-2">
                    <h1 className='text-3xl mb-4'>{recipe.title}</h1>
                    <img className='w-full p-5' src={recipe.image} alt="" width="200px"/>
                    </div>

               
            
                <div className="col-span-2 lg:ml-4 p-10 backdrop-blur-sm bg-zinc-900/30"> 
                  <div className="flex justify-center pb-10">
                      <Typography className="text-2xl" >
                        Ingredients:
                      </Typography>
                  </div>
                <ul className="flex flex-col items-right w-full pl-20 list-disc gap-1">
              {ingredient}
                </ul>
                </div>

                <div className="col-start-2 col-span-2 lg:mr-4 p-10 backdrop-blur-sm bg-zinc-900/30" >
                  <div className="flex justify-center pb-10">
            <Typography className="text-2xl">
            Directions:
            </Typography>
            </div>
                <ul className="list-decimal gap-5" >
                {direction}
                </ul>
                </div>
        



              <div className='mt-10 mb-20 col-start-2 flex justify-center w-full' >
             <NavLink to={"/recipes"}>

                <Button className="text-white w-56 h-16 bg-violet-400/70  hover:bg-violet-700 md:transform md:transition-all md:hover:scale-105"  >Back to all recipes</Button>
  
            </NavLink>
            </div>

            </Box>

         
        
      </Layout>
      )
}
export default ShowRecipe