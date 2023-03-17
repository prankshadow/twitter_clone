import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import './Left.css'

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import axios from 'axios';
import { API_BASE_URL } from '../config'
import Swal from 'sweetalert2';


const Left = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [image, setImage] = useState({ preview: '', data: '' })


    const [show, setShow] = useState(false);
    const [tweet, setTweet] = useState('');

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const CONFIG_OBJ = {
        headers: {
            'Content-Type': 'application/json',
            'authentication': localStorage.getItem('authentication')
        }
    }

    const handleFileSelect = (event) => {
        const img = {
            preview: URL.createObjectURL(event.target.files[0]),
            data: event.target.files[0]
        }
        setImage(img);
    }

    const handleImageUpload = async () => {
        let formData = new FormData();
        formData.append('file', image.data);

        const response = axios.post(`${API_BASE_URL}/uploadFile`, formData)
        return response;
    }
    const addPost = async () => {

        if (image.preview === '') {
            Swal.fire({
                icon: 'error',
                title: 'Image is mandatory'
            })
        } else if (tweet === '') {
            Swal.fire({
                icon: 'error',
                title: 'Tweet is mandatory'
            })
        } else {
            const imgRes = await handleImageUpload();
            //add validation rule for tweet
            const request = { description: tweet, image: `${API_BASE_URL}/files/${imgRes.data.fileName}` }
            // API call to create post
            const postResponse = await axios.post(`${API_BASE_URL}/createpost`, request, CONFIG_OBJ);
            if (postResponse.status === 200) {
                Swal.fire({
                    icon: 'success',
                    title: 'Successfully tweeted'
                })
                setShow(false)
                // navigate('/homepage');
            } else {
                Swal.fire({
                    icon: 'error',
                    title: 'Some error occured while creating post'
                })
            }

        }

    }

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
                                <Form.Control as="textarea" rows={3} placeholder='Write your tweet' onChange={(ev) => setTweet(ev.target.value)} />
                            </Form.Group>

                            <Form.Group>
                                <div className="mb-3">
                                    {/* <label for="formFile" className="form-label">Default file input example</label> */}
                                    <input name='file' className="form-control" type="file" id="formFile" onChange={handleFileSelect} />
                                </div>
                                <div className='d-flex justify-content-center'>
                                    {image.preview && <img src={image.preview} width='400' height='250' alt='preview' />}
                                </div>

                            </Form.Group>
                        </Form>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                        <Button variant="primary" onClick={() => addPost()}>
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