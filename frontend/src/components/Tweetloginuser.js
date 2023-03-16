import React from 'react'
// import { Link } from 'react-router-dom'
import './Tweetloginuser.css'

const Tweet = (props) => {
    return (
        <div>
            <div className='card'>
                <div className='d-flex p-2 d-flex justify-content-between'>
                    <div className='d-inline-flex p-2 '>
                        <img src='http://bit.ly/3yA6Z9D' className='profile-pic img-fluid' alt='profile' />
                        <h6 className='my-auto ps-2'>Prank Shadow</h6>
                    </div>
                    <div className='justify-content-end my-auto me-3'>
                        <div class="btn-group dropstart">
                            <button className='btn btn-secondary' data-bs-toggle="dropdown" aria-expanded="false" style={{ 'textDecoration': 'none', 'color': 'black', 'border': 'none', 'backgroundColor': 'transparent' }}><i className="fa-solid fa-ellipsis-vertical fs-4"></i></button>
                            <ul class="dropdown-menu">
                                <li><button className="dropdown-item">Edit</button></li>
                                <li><button className="dropdown-item">Delete</button></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className='card-body'>
                    <p className='card-text'>Descriptiond-flex justify-content-betweend-flex justify-content-betweend-flex justify-content-betweend-flex justify-content-between</p>
                    <img src='https://bit.ly/3FpWmds' className='tweet-pic img-fluid pb-3' alt='tweet' />

                    <div className='ps-3'>
                        <a href='/' className='pe-3' style={{ 'textDecoration': 'none', 'color': 'black' }}><i className="fa-regular fa-heart pe-1" style={{ 'color': 'red' }}></i>0</a>
                        <a href='/' className='pe-3' style={{ 'textDecoration': 'none', 'color': 'black' }}><i className="fa-regular fa-comment pe-1" style={{ 'color': 'blue' }}></i>0</a>
                        <a href='/' className='pe-3' style={{ 'textDecoration': 'none', 'color': 'black' }}><i className="fa-solid fa-retweet pe-1" style={{ 'color': '#00C301' }}></i>0</a>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Tweet