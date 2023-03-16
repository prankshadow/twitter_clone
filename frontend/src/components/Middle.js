import React, { useEffect, useState } from 'react'
import './Middle.css'
import Tweetloginuser from './Tweetloginuser'
import { API_BASE_URL } from '../config'
import Swal from 'sweetalert2';
import axios from 'axios';
import { useSelector } from 'react-redux';

const Middle = () => {

  const user = useSelector(state => state.userReducer)

  const CONFIG_OBJ = {
    headers: {
      "Content-Type": "application/json",
      "authentication": localStorage.getItem("authentication")
    }
  }

  const [allposts, setAllposts] = useState([]);

  const getmyPost = async () => {

    // console.log('Get all posts');
    const response = await axios.get(`${API_BASE_URL}/myposts`, CONFIG_OBJ);

    if (response.status === 200) {
      setAllposts(response.data)
      // console.log(response.data);
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Some error occured while getting all user posts '
      });
    }

  }

  const deletePost = async (postId) => {
    const response = await axios.delete(`${API_BASE_URL}/deletepost/${postId}`, CONFIG_OBJ);
    if (response.status === 200) {
      getmyPost();
    }
  }


  useEffect(() => {
    getmyPost();
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <div className='col-md-7 pe-5'>
        <div className='pt-5'>
          <img src='http://bit.ly/3yA6Z9D' className='profile-pic-m img-fluid' alt='profile' />
          <button className='btn btn-primary edit-button float-end'>Edit Profile</button>
        </div>
        <div className='pt-2'>
          <h1 className='user-name'>{user.user.fullName}</h1>
        </div>

        <hr />
        <div className='d-flex justify-content-center'>
          <h5 className='m-auto'>Tweet and replies</h5>
        </div>
        <hr />
        <div>
          {allposts.map((post) => {
            return (
              <div key={post._id}>
                <Tweetloginuser postData={post} deletePost={deletePost} />
              </div>
            )
          })}
        </div>
      </div>
    </>
  )
}

export default Middle