import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import './Left.css'

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';


const Left = () => {


    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    const dispatch = useDispatch();
    const navigate = useNavigate();

    const logout = () => {
        localStorage.removeItem("authentication");
        localStorage.removeItem("user");
        dispatch({
            type: "LOGIN_ERROR"
        })
        navigate('/')
    }

    return (
        <>
            <div className='col-md-3 d-inline-flex p-2 d-flex flex-column mb-3 px-5'>
                <div className='icons'>
                    <div className='p-4 fs-3' style={{ "color": "#00acee" }}>
                        <i className="fa-brands fa-twitter"></i>
                    </div>
                    <div className='p-2'>
                        <Link to='/home' style={{ "textDecoration": "none", "color": "black" }}><p><i className="fa-solid fa-house pe-4"></i>Home</p></Link>
                    </div>
                    <div className='p-2'>
                        <a href='/' style={{ "textDecoration": "none", "color": "black" }}><p><i className="fa-solid fa-hashtag pe-4"></i>Explore</p></a>
                    </div>
                    <div className='p-2'>
                        <a href='/' style={{ "textDecoration": "none", "color": "black" }}><p><i className="fa-regular fa-bell pe-4"></i>Notifications</p></a>
                    </div>
                    <div className='p-2'>
                        <a href='/' style={{ "textDecoration": "none", "color": "black" }}><p><i className="fa-regular fa-envelope pe-4"></i>Message</p></a>
                    </div>
                    <div className='p-2'>
                        <a href='/' style={{ "textDecoration": "none", "color": "black" }}><p><i className="fa-regular fa-bookmark pe-4"></i>Bookmarks</p></a>
                    </div>
                    <div className='p-2'>
                        <Link to='/homepage' style={{ "textDecoration": "none", "color": "black" }}><p><i className="fa-solid fa-user pe-4"></i>Profile</p></Link>
                    </div>
                    <div className='p-2'>
                        <Link to='/' style={{ "textDecoration": "none", "color": "black" }} onClick={() => logout()}><p><i className="fa-solid fa-right-from-bracket pe-4"></i>Logout</p></Link>
                    </div>
                    <div className='d-grid gap-2'>
                        <button type="button" className="btn btn-primary tweet-button btn-lg" onClick={handleShow}>Tweet</button>
                    </div>
                </div>

                {/* MODAL FOR TWEET BUTTON */}

                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>New Tweet</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form>

                            <Form.Group
                                className="mb-3"
                                controlId="exampleForm.ControlTextarea1"
                            >
                                <Form.Control as="textarea" rows={3} placeholder='Write your tweet' />
                            </Form.Group>

                            <Form.Group>
                                <div className="mb-3">
                                    {/* <label for="formFile" className="form-label">Default file input example</label> */}
                                    <input className="form-control" type="file" id="formFile" />
                                </div>


                            </Form.Group>
                        </Form>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                        <Button variant="primary" onClick={handleClose}>
                            Tweet
                        </Button>
                    </Modal.Footer>
                </Modal>





                <div className='d-flex pt-4'>
                    <img src='http://bit.ly/3yA6Z9D' className='profile-pic img-fluid' alt='profile' />
                    <p className='fw-semibold ps-1 my-auto mx-3'>Prank Shadow</p>
                </div>
            </div>
        </>
    )
}

export default Left