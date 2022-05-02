import logo from './logo.svg';
import './App.css';
import { Home } from './Components/Home';
import { About } from './Components/About';
import { Contact } from './Components/Contact';
import { NavBar } from './Components/NavBar';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div>
   <NavBar/>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/about' element={<About/>}></Route>
      <Route path='/contact' element={<Contact/>}></Route>
      </Routes>
      </div>
  )
}

export default App;
