// working on RecipeForm by passing in props down
import { Link } from 'react-router-dom';

const RecipeForm = ({recipe, handleChange, handleSubmit, cancelPath}) => {

    return (
        <form onSubmit={(e) => handleSubmit(e)}>

            <label>Title: </label>
            <input
            placeholder="Smashed Potatoes"
            defaultValue={recipe.title}
            name="title"
            onChange={(e) => handleChange(e)} />

            <label>Cook Time: </label>
            <input
            placeholder="30 mins"
            defaultValue={recipe.cook_time}
            name="cook_time"
            onChange={(e) => handleChange(e)} />

            <label>Rating: </label>
            <input
            placeholder="5"
            defaultValue={recipe.Rating}
            name="Rating"
            onChange={(e) => handleChange(e)} />

            <label>Ingredients: </label>
            <input
            placeholder="Ingredients"
            defaultValue={recipe.ingredients}
            name="ingredients"
            onChange={(e) => handleChange(e)} />

            <label>Directions: </label>
            <input
            placeholder="Directions"
            defaultValue={recipe.directions}
            name="directions"
            onChange={(e) => handleChange(e)} />


            <button type="submit">Submit</button>

            <Link to={cancelPath}>
                <button>Cancel</button>
            </Link>
            
        </form>
    )
}
export default RecipeForm;