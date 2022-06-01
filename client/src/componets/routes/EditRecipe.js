import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from 'axios'
import Layout from "../shared/Layout";
import RecipeForm from "../shared/RecipeForm";


function EditRecipe(){
    const navigate = useNavigate()
    const { id } = useParams()  //get the id from the current object to update
    const [recipe, setRecipe] = useState({
        title: '',
        ingredients: [''],
        cook_time: 0,
        image: '',
        directions: [''],
        Rating: 0
    })
    const [updated, setUpdated] = useState(false)
    useEffect(() => {
        const fetchData = async () => {
        try {
            // eslint-disable-next-line
            const response = await axios({
                url:`${process.env.REACT_APP_API_URL}/api/recipes/${id}`,
                method: "GET",
                headers: {'Access-Control-Allow-Origin': '*'}
                
            })
            .then(response => setRecipe(response.data.recipe))
    
        } catch (error) {
            console.log(error)
        }
      }
      fetchData()
    }, [id])
    const handleChange = (event) => {
        //created a placeholder grabbing the value from the user input form
        // const updatedField = { [event.target.name] : event.target.value }
        //assigned the empty state with the updatedField into one object
        const editedRecipe = { ...recipe, [event.target.name]: event.target.value}
        //assigned the new object to be updated to the state
        setRecipe(editedRecipe)
    }
    const handleSubmit = (event) => {
        event.preventDefault()
         axios({
             url: `${process.env.REACT_APP_API_URL}/api/recipes/${id}`,
             method: 'PUT',
             data: recipe,
             headers: {'Access-Control-Allow-Origin': '*'}
         }).then(() => setUpdated(true)).catch(console.error)
    }
    useEffect(() => {
        if(updated) {
            return navigate(`/recipes/${id}`)
        }
    })
     return(
         <Layout>
             <RecipeForm
               recipe={recipe}
               handleChange={(e) => handleChange(e)}
               handleSubmit={(e) => handleSubmit(e)}
               cancelPath={`/recipes/${id}`}
               />
         </Layout>
      )
    }
export default EditRecipe