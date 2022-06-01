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
    cook_time: "",
    image: '',
    directions: [''],
    Rating: ""
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
    axios({
      url: `${process.env.REACT_APP_API_URL}/api/recipes`,
      method: 'POST',
      data: recipe
    }).then(res => setCreateRecipe(res.data.recipe)).catch(console.error)

  }

  useEffect(() => {
    if (createRecipe) {
      return navigate(`/recipes`)
    }
  }, [createRecipe, navigate])

  return (
    <Layout>
        <div className="flex justify-center my-10 text-5xl">
            <h1>Create a Recipe</h1>
        </div>
        <div>
      <RecipeForm
        recipe={recipe}
        handleChange={(e) => handleChange(e)}
        handleSubmit={(e) => handleSubmit(e)}
        cancelPath='/'
      />
      </div>
    </Layout>

  )
}

export default CreateRecipe;

