import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './Signup.css'
import { API_BASE_URL } from '../config'
import Swal from 'sweetalert2';
import axios from 'axios';
import { useDispatch } from 'react-redux';

const Login = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();


  const login = (event) => {
    event.preventDefault();

    // setLoading(true);
    const requestData = { email, password }
    axios.post(`${API_BASE_URL}/login`, requestData)
      .then((result) => {
        if (result.status === 200) {
          // setLoading(false);
          Swal.fire({
            icon: 'success',
            title: 'User login successfully'
          })
          localStorage.setItem('authentication', result.data.result.token);
          localStorage.setItem('user', JSON.stringify(result.data.result.user));
          dispatch({
            type: 'LOGIN_SUCCESS',
            payload: result.data.result.user
          })
          // setLoading(false)
          navigate('/homepage');
        }
        // setEmail('');
        // setPassword('');
      })
      .catch((error) => {
        console.log(error);
        console.log(error.response);
        // setLoading(false);
        Swal.fire({
          icon: 'error',
          title: error.response.data.error
        })
      })
  }



  return (
    <>
      <div className='signup center-screen'>
        <div className='container shadow m-3 mb-5 bg-body rounded'>
          <div className='row'>
            <div className='col-md-5 rounded d-flex align-items-center justify-content-center' style={{ 'backgroundColor': '#00acee' }} >
              <div className='fs-1  d-inline-flex p-2' style={{ "color": "white" }}>
                <i className="fa-brands fa-twitter"></i>
              </div>
            </div>

            <div className='col-md-7'>
              <div className="py-3 ps-2">
                <h4 className='fw-bold fs-3'>Log In</h4>
              </div>

              <form className='px-4 pb-4' onSubmit={(e) => login(e)}>
                <div className="mb-3">
                  <input type="email" className="form-control" id="exampleInputEmail1" placeholder='Email'
                    value={email}
                    onChange={(ev) => setEmail(ev.target.value)}
                  />
                </div>
                <div className="mb-4">
                  <input type="password" className="form-control" id="exampleInputPassword1" placeholder='Password'
                    autoComplete="on"
                    value={password}
                    onChange={(ev) => setPassword(ev.target.value)}
                  />
                </div>
                <button type="submit" className="btn btn-primary RegisterButton">Login</button>
                </form>
                <div className='pt-4'>
                  <p className='text-muted'>Create an account? <Link to='/signup' className='signin'>Sign Up</Link></p>
                </div>
              


            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Login