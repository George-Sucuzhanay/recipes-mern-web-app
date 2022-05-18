import './App.css';
import { Button } from '@mui/material';

function App() {
  return (
    <div className="App">
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
