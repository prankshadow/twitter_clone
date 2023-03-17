import React from 'react'
import { useSelector } from 'react-redux'
// import { Link } from 'react-router-dom'
import './Tweetloginuser.css'

const Tweet = (props) => {

    const user = useSelector(state => state.userReducer)

    return (
        <div className='pb-3'>
            <div className='card'>
                <div className='d-flex p-2 d-flex justify-content-between'>
                    <div className='d-inline-flex p-2 '>
                        <img src='http://bit.ly/3yA6Z9D' className='profile-pic img-fluid' alt='profile' />
                        {/* <h6 className='my-auto ps-2'>{props.postData.author}</h6> */}
                        <h6 className='my-auto ps-2'>{user.user.userName}</h6>
                    </div>
                    <div className='justify-content-end my-auto me-3'>
                        <div className="btn-group dropstart">
                            <button className='btn btn-secondary' data-bs-toggle="dropdown" aria-expanded="false" style={{ 'textDecoration': 'none', 'color': 'black', 'border': 'none', 'backgroundColor': 'transparent' }}><i className="fa-solid fa-ellipsis-vertical fs-4"></i></button>
                            <ul className="dropdown-menu">
                                <li><button className="dropdown-item">Edit</button></li>
                                <li><button className="dropdown-item" onClick={() => props.deletePost(props.postData._id)}>Delete</button></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className='card-body'>
                    <p className='card-text'>{props.postData.description}</p>
                    <img src={props.postData.image} className='tweet-pic img-fluid pb-3' alt='tweet' />

                </div>
            </div>
        </div >
    )
}

export default Tweet