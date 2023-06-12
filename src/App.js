import './App.css';
import { Route, Routes } from 'react-router';
import Home from './Home';
import Room from './Room';

function App() {
  return (
   <Routes>
    <Route path='/' element={<Home/>} />
    <Route path='/room/:roomID' element={<Room/>} />
   </Routes>
    
  );
}

export default App;
