import { useState, useEffect } from 'react';
import { NavLink, useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import Layout from '../shared/Layout'

function ShowRecipe(){
    const [recipe, setRecipe] = useState([])
    const [deleted, setDeleted] = useState(false)
    const { id } = useParams();
    let navigate = useNavigate();

    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await axios(`http://localhost:3000/api/recipes/${id}`)
    
            const result = response.data.recipe
            setRecipe(result)
          
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
          url: `http://localhost:3000/api/recipes/${id}`,
          method: 'DELETE'
        }).then(() => setDeleted(true)).catch(console.error)
      }
    
      useEffect(() => {
        if (deleted) {
          return navigate("/")
        }
      }, [deleted, navigate])

      return (
        <Layout>
            
        <h4>{recipe.title}</h4>
        
        <p>Cook Time: {recipe.cook_time}</p>
        <p>Rating: {recipe.Rating}</p>
        <p>Ingredients: {recipe.ingredients}</p>
        <p>Directions: {recipe.directions}</p>
        <img src={recipe.image} alt="" width="100px"/>
  
        <NavLink to={`/recipes/${id}/edit`} >
          <button>Edit</button>
        </NavLink>
  
        <button onClick={() => destroy()}>Delete Recipe</button>
  
  
        <NavLink to={"/recipes"}>Back to all recipess</NavLink>
        
      </Layout>
      )
}
export default ShowRecipe