// working on RecipeForm by passing in props down
import { CancelScheduleSend, SaveAlt, SendAndArchive } from '@mui/icons-material';
import { Box, TextField, Button, ListItemIcon } from '@mui/material';
import { Link } from 'react-router-dom';

const RecipeForm = ({recipe, handleChange, handleSubmit, cancelPath}) => {

    return (
        <form onSubmit={(e) => handleSubmit(e)} className="grid justify-center lg:grid-cols-2 gap-y-10 gap-x-5 p-10 mb-10 lg:mb-28 backdrop-blur-xl bg-zinc-200/70 mt-10 ">

            {/* <label>Title: </label>
            <input
            placeholder="Smashed Potatoes"
            defaultValue={recipe.title}
            name="title"
            onChange={(e) => handleChange(e)} /> */}
            <TextField
                id="outlined-textarea"
                label="Title"
                placeholder="Smashed Potatoes"
                multiline
                name="title"
                className="w-96"
                defaultValue={recipe.title}
                onChange={(e) => handleChange(e)}
                variant="filled"
            />

            {/* <label>Cook Time: </label>
            <input
            placeholder="30 mins"
            defaultValue={recipe.cook_time}
            name="cook_time"
            onChange={(e) => handleChange(e)} /> */}
             <TextField
                id="outlined-textarea"
                label="Cook Time"
                placeholder="30 mins"
                multiline
                name="cook_time"
                className="w-96"
                defaultValue={recipe.cook_time}
                onChange={(e) => handleChange(e)}
                variant="filled"
            />

            <TextField
                id="outlined-textarea"
                label="ImageURL"
                placeholder="https://media-cldnry.s"
                multiline
                name="image"
                className="w-96"
                defaultValue={recipe.image}
                onChange={(e) => handleChange(e)}
                variant="filled"
            />

            {/* <label>Rating: </label>
            <input
            placeholder="5"
            defaultValue={recipe.Rating}
            name="Rating"
            onChange={(e) => handleChange(e)} /> */}
             <TextField
                id="outlined-textarea"
                label="Rating"
                placeholder="5"
                multiline
                name="Rating"
                className="w-96"
                defaultValue={recipe.Rating}
                onChange={(e) => handleChange(e)}
                variant="filled"
            />

            {/* <label>Ingredients: </label>
            <input
            placeholder="Ingredients"
            defaultValue={recipe.ingredients}
            name="ingredients"
            onChange={(e) => handleChange(e)} /> */}
             <TextField
                id="outlined-textarea"
                label="Ingredients"
                placeholder="Ingredients"
                multiline
                name="ingredients"
                className="w-96"
                defaultValue={recipe.ingredients}
                onChange={(e) => handleChange(e)}
            />

            {/* <label>Directions: </label>
            <input
            placeholder="Directions"
            defaultValue={recipe.directions}
            name="directions"
            onChange={(e) => handleChange(e)} /> */}
             <TextField
                id="outlined-textarea"
                label="Directions"
                placeholder="Directions"
                multiline
                name="directions"
                className="w-96"
                defaultValue={recipe.directions}
                onChange={(e) => handleChange(e)}
            />

            <Box className="flex justify-evenly lg:col-span-2 ">
            <Button variant="outlined" className="px-14 py-3 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:bg-violet-600 hover:text-zinc-100  duration-500 item-center" type="submit">Submit</Button>

            <Link to={cancelPath}>
                <Button variant="outlined" className="px-14 py-3 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:bg-violet-600 hover:text-zinc-100   duration-500" >Cancel</Button>
            </Link>
            </Box>
            
        </form>
    )
}
export default RecipeForm;