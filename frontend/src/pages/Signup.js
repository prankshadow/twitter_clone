import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './Signup.css'
import { API_BASE_URL } from '../config'
import Swal from 'sweetalert2'
import axios from 'axios';


const Signup = () => {

    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");


    const signup = (event) => {
        event.preventDefault();
        // setLoading(true);
        const requestData = { fullName, email, password }
        axios.post(`${API_BASE_URL}/signup`, requestData)
            .then((result) => {
                if (result.status === 201) {
                    // setLoading(false);
                    Swal.fire({
                        icon: 'success',
                        title: 'User successfully registered'
                    })
                }
                setFullName('');
                setEmail('');
                setPassword('');
            })
            .catch((error) => {
                console.log(error);

                // setLoading(false);
                Swal.fire({
                    icon: 'error',
                    title: 'Some error occurred please try again later'
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
                                <h4 className='fw-bold fs-3'>Register</h4>
                            </div>

                            <form className='px-4 pb-4' onSubmit={(e) => signup(e)}>
                                <div className="mb-3">
                                    <input type="text" className="form-control" id="exampleFormControlTextarea1" placeholder='Full Name'
                                        value={fullName}
                                        onChange={(ev) => setFullName(ev.target.value)}

                                    />
                                </div>
                                <div className="mb-3">
                                    <input type="email" className="form-control" id="exampleInputEmail1" placeholder='Email'
                                        value={email}
                                        onChange={(ev) => setEmail(ev.target.value)}
                                    />
                                </div>
                                <div className="mb-4">
                                    <input type="password" className="form-control" id="exampleInputPassword2" placeholder='Password'
                                        autoComplete="on"
                                        value={password}
                                        onChange={(ev) => setPassword(ev.target.value)}

                                    />
                                </div>
                                <button type="submit" className="btn btn-primary RegisterButton">Register</button>
                                <div className='pt-4'>
                                    <p className='text-muted'>Already a user? <Link to='/' className='signin'>Sign In</Link></p>
                                </div>
                            </form>


                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Signup