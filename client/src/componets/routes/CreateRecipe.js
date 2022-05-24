import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Layout from '../shared/Layout';
import RecipeForm from '../shared/RecipeForm';

function CreateRecipe() {
  const navigate = useNavigate();
  const [recipe, setRecipe] = useState({
    title: '',
    ingredients: [''],
    cook_time: '',
    image: '',
    directions: [''],
    Rating: ''
  })
  const [createRecipe, setCreateRecipe] = useState(null)

  const handleChange = (event) => {
    //created a placeholder grabbing the value from the user input form
    const updatedField = { [event.target.name] : event.target.value }
    //assigned the empty state with the updatedField into one object
    const editedRecipe = Object.assign(recipe, updatedField)
    //assigned the new object to be updated to the state
    setRecipe(editedRecipe)
  }
  
  const handleSubmit = (event) => {
    event.preventDefault()

    //if the entry is created in the database, save the response data
    // in the state
    axios({
      url: `http://localhost:3000/api/recipes`,
      method: 'POST',
      data: recipe
    }).then(res => setCreatedRecipe(res.data.recipe)).catch(console.error)

  }

  useEffect(() => {
    if (createdRecipe) {
      return navigate(`/recipes`)
    }
  }, [createdRecipe, navigate])

  return (
    <Layout>
        <div>
            <h1>Create a Recipe</h1>
        </div>
      <RecipeForm
        recipe={recipe}
        handleChange={(e) => handleChange(e)}
        handleSubmit={(e) => handleSubmit(e)}
        cancelPath='/'
      />
    </Layout>

  )
}

export default CreateRecipe

