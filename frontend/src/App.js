import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Homepage } from './pages/Homepage';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Home from './pages/Home';


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login />}></Route>
          <Route path='/signup' element={<Signup />}></Route>
          <Route path='/homepage' element={<Homepage />}></Route>
          <Route path='/home' element={<Home />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
