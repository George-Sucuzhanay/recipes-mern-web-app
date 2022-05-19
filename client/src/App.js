import { Route, Routes, useLocation } from 'react-router-dom';
import Home from './componets/routes/Home';
import ListRecipes from "./componets/routes/ListRecipes"
import CreateRecipe from "./componets/routes/CreateRecipe"



function App() {
  return (
    <div className="App">
      
      <Routes>

    <Route path='/' element={<Home />} />
    <Route path='/recipes' element={<ListRecipes />} />
    <Route path='/recipes/create' element={<CreateRecipe />} />


      </Routes>
    </div>
  );
}

export default App;
