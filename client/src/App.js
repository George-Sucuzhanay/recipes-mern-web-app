import './App.css';
import { Button } from '@mui/material';
import {Route, Routes, useLocation } from "react-router-dom";
import Home from "./componets/routes/Home";
import ShowRecipe from "./componets/routes/ShowRecipe";
import ListRecipes from "./componets/routes/ListRecipes";
import CreateRecipe from "./componets/routes/CreateRecipe";
import EditRecipe from "./componets/routes/EditRecipe";


function App() {

  const location = useLocation();
  
  return (
    <div className="App">
      <h3>{location.state ? location.state.message: null }</h3>

      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/recipes" element={<ListRecipes/>}/>
        <Route path="/create-recipe" element={<CreateRecipe/>}/>
        <Route path="/recipes/:id" element={<ShowRecipe/>}/>
        <Route path="/recipes/:id/edit" element={<EditRecipe/>}/>
      </Routes>

      <div className='bg-black text-white text-3x1'>
          Code Test
      </div>
      <div>
          <Button variant="text" className="bg-sky-500">Text</Button>
          <Button variant="contained">Contained</Button>
          <Button variant="outlined">Outlined</Button>
      </div>
    </div>
  );
}

export default App;
