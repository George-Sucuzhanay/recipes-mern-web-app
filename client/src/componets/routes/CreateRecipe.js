import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Layout from '../shared/Layout';
import RecipeForm from '../shared/RecipeForm';

function CreateRecipe() {
  const navigate = useNavigate();
  const [item, setItem] = useState({
    title: '',
    link: '',
  })
  const [createdItem, setCreatedItem] = useState(null)

  const handleChange = (event) => {
    //created a placeholder grabbing the value from the user input form
    const updatedField = { [event.target.name] : event.target.value }
    //assigned the empty state with the updatedField into one object
    const editedItem = Object.assign(item, updatedField)
    //assigned the new object to be updated to the state
    setItem(editedItem)
  }
  
  const handleSubmit = (event) => {
    event.preventDefault()

    //if the entry is created in the database, save the response data
    // in the state
    axios({
      url: `http://localhost:3000/api/recipes`,
      method: 'POST',
      data: item
    }).then(res => setCreatedItem(res.data.item)).catch(console.error)

  }

  useEffect(() => {
    if (createdItem) {
      return navigate(`/recipes`)
    }
  }, [createdItem, navigate])

  return (
    <Layout>
        <div>
            <h1>Create a Recipe</h1>
        </div>
      <RecipeForm
        item={item}
        handleChange={(e) => handleChange(e)}
        handleSubmit={(e) => handleSubmit(e)}
        cancelPath='/'
      />
    </Layout>

  )
}

export default CreateRecipe

