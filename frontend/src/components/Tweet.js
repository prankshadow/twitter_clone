import React from 'react'
import './Tweet.css'

const Tweet = (props) => {
    return (
        <div>
            <div className='card'>
                <div className='d-flex p-2'>
                    <img src='http://bit.ly/3yA6Z9D' className='profile-pic img-fluid' alt='profile' />
                    <h6 className='my-auto ps-2'>Prank Shadow</h6>
                </div>
                <div className='card-body'>
                    <p className='card-text'>{props.postData.description}</p>
                    <img src={props.postData.image} className='tweet-pic img-fluid pb-3' alt='tweet' />

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