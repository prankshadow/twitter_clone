import React from 'react'
import './Middle.css'
import Tweetloginuser from './Tweetloginuser'

const Middle = () => {
  return (
    <>
      <div className='col-md-7 pe-5'>
        <div className='pt-5'>
          <img src='http://bit.ly/3yA6Z9D' className='profile-pic-m img-fluid' alt='profile' />
          <button className='btn btn-primary edit-button float-end'>Edit Profile</button>
        </div>
        <div className='pt-2'>
          <h1 className='user-name'>Prank Shadow</h1>
        </div>

        <hr />
        <div className='d-flex justify-content-center'>
          <h5 className='m-auto'>Tweet and replies</h5>
        </div>
        <hr />
        <Tweetloginuser />
        <Tweetloginuser />
        <Tweetloginuser />
        <Tweetloginuser />
        <Tweetloginuser />
        <Tweetloginuser />
        <Tweetloginuser />
      </div>
    </>
  )
}

export default Middle