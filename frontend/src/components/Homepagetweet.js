import React from 'react'
// import { useSelector } from 'react-redux'
import './Tweetloginuser.css'
import { API_BASE_URL } from '../config'
// import Swal from 'sweetalert2';
import axios from 'axios';

const HomepageTweet = (props) => {

    
    const CONFIG_OBJ = {
        headers: {
            "Content-Type": "application/json",
            "authentication": localStorage.getItem("authentication")
        }
    }

    // const user = useSelector(state => state.userReducer);
    // console.log(user);
    // const xyz = localStorage.getItem("user")
    // console.log(props.postData.author);
    // console.log(user.user._id);


    // localStorage.setItem('headers.user', JSON.stringify(CONFIG_OBJ))
    // var val = localStorage.getItem('user')
    // var object = JSON.parse(val);
    // console.log('id: ', object);
    const getUser = window.localStorage.getItem('user')
    let specificUser = JSON.parse(getUser);
    // console.log(specificUser._id);


    //Likes
    const likeTweet = async (postId) => {
        const request = { "postId": postId };
        const response = await axios.put(`${API_BASE_URL}/like`, request, CONFIG_OBJ);
        if (response.status === 200) {
            props.getAllPosts();
        }
    }
    //comment
    


    return (
        <div className='card'>
            <div className='d-flex p-2 d-flex justify-content-between'>
                <div className='d-inline-flex p-2 '>
                    <img src='http://bit.ly/3yA6Z9D' className='profile-pic img-fluid' alt='profile' />
                    <h6 className='my-auto ps-2'>{props.postData.author}</h6>
                </div>
                {props.postData.author === specificUser._id ? <div className='justify-content-end my-auto me-3'>
                    <div className="btn-group dropstart">
                        <button className='btn btn-secondary' data-bs-toggle="dropdown" aria-expanded="false" style={{ 'textDecoration': 'none', 'color': 'black', 'border': 'none', 'backgroundColor': 'transparent' }}><i className="fa-solid fa-ellipsis-vertical fs-4"></i></button>
                        <ul className="dropdown-menu">
                            <li><button className="dropdown-item">Edit</button></li>
                            <li><button className="dropdown-item" onClick={() => props.deletePost(props.postData._id)}>Delete</button></li>
                        </ul>
                    </div>
                </div> : ''}
            </div>
            <div className='card-body'>
                <p className='card-text'>{props.postData.description}</p>
                <img src={props.postData.image} className='tweet-pic img-fluid pb-3' alt='tweet' />

                <div className='ps-3'>
                    <button className='pe-3' style={{ 'textDecoration': 'none', 'color': 'black', 'border': 'none', 'backgroundColor': 'transparent' }}><i className="fa-regular fa-heart pe-1" onClick={() => likeTweet(props.postData._id)} style={{ 'color': 'red' }}></i>{props.postData.likes.length}</button>
                    <button className='pe-3' style={{ 'textDecoration': 'none', 'color': 'black', 'border': 'none', 'backgroundColor': 'transparent' }}><i className="fa-regular fa-comment pe-1" style={{ 'color': 'blue' }}></i>0</button>
                    <button className='pe-3' style={{ 'textDecoration': 'none', 'color': 'black', 'border': 'none', 'backgroundColor': 'transparent' }}><i className="fa-solid fa-retweet pe-1"  style={{ 'color': '#00C301' }}></i>0</button>
                </div>
                
            </div>
        </div>


    )
}

export default HomepageTweet