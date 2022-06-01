import {Route, Routes, useLocation } from "react-router-dom";
import Home from "./componets/routes/Home";
import ShowRecipe from "./componets/routes/ShowRecipe";
import ListRecipes from "./componets/routes/ListRecipes";
import CreateRecipe from "./componets/routes/CreateRecipe";
import EditRecipe from "./componets/routes/EditRecipe";
import Search from './componets/routes/Search';
import LandingPage from './componets/routes/LandingPage'


function App() {

  const location = useLocation();
  
  return (
    <div className="App">

      <h3>{location.state ? location.state.message: null }</h3>

      <Routes>
        <Route path="/" element={<LandingPage/>}/>
        <Route path="/random" element={<Home/>}/>
        <Route path="/recipes" element={<ListRecipes/>}/>
        <Route path="/create-recipe" element={<CreateRecipe/>}/>
        <Route path="/recipes/:id" element={<ShowRecipe/>}/>
        <Route path="/recipes/:id/edit" element={<EditRecipe/>}/>
        <Route path="/search" element={<Search/>}/>
      </Routes>

    </div>
  );
}

export default App;
