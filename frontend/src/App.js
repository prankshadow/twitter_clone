import './App.css';
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import { Homepage } from './pages/Homepage';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Home from './pages/Home';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';


function App() {

  function DynamicRouting() {

    const dispatch = useDispatch();
    const navigate = useNavigate();


    useEffect(() => {
      const userData = JSON.parse(localStorage.getItem('user'));
      if (userData) {
        dispatch({ type: "LOGIN_SUCCESS", payload: userData })
        navigate('/home')
      } else {
        localStorage.removeItem("authentication");
        localStorage.removeItem("user");
        dispatch({
          type: "LOGIN_ERROR"
        })
        navigate('/')
      }
      // eslint-disable-next-line
    }, []);

    return (
      <Routes>
        <Route path='/' element={<Login />}></Route>
        <Route path='/signup' element={<Signup />}></Route>
        <Route path='/homepage' element={<Homepage />}></Route>
        <Route path='/home' element={<Home />}></Route>
      </Routes>
    )
  }


  return (
    <>
      <BrowserRouter>
        <DynamicRouting />
      </BrowserRouter>
    </>
  );
}

export default App;
