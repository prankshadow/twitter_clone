import React from 'react'
import './Tweet.css'

const Tweet = () => {
    return (
        <div>
            <div className='card'>
                <div className='d-flex p-2'>
                    <img src='http://bit.ly/3yA6Z9D' className='profile-pic img-fluid' alt='profile' />
                    <h6 className='my-auto ps-2'>Prank Shadow</h6>
                </div>
                <div className='card-body'>
                    <p className='card-text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </p>
                    
                    <img src='http://bit.ly/3FpWmds' className='tweet-pic img-fluid pb-3' alt='tweet' />

                    <div className='ps-3'>
                        <a href='/' className='pe-3' style={{ 'textDecoration': 'none', 'color': 'black' }}><i className="fa-regular fa-heart pe-1" style={{ 'color': 'red' }}></i>0</a>
                        <a href='/' className='pe-3' style={{ 'textDecoration': 'none', 'color': 'black' }}><i className="fa-regular fa-comment pe-1" style={{ 'color': 'blue' }}></i>0</a>
                        <a href='/' className='pe-3' style={{ 'textDecoration': 'none', 'color': 'black' }}><i className="fa-solid fa-retweet pe-1" style={{ 'color': '#00C301' }}></i>0</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Tweet