import React, { useEffect, useState } from 'react'
import { API_BASE_URL } from '../config'
import Swal from 'sweetalert2';
import axios from 'axios';
import Homepagetweet from '../components/Homepagetweet';

const Alltweets = () => {
    const CONFIG_OBJ = {
        headers: {
            "Content-Type": "application/json",
            "authentication": localStorage.getItem("authentication")
        }
    }

    const [allposts, setAllposts] = useState([]);

    const getAllPosts = async () => {

        console.log('Get all posts');
        const response = await axios.get(`${API_BASE_URL}/allposts`, CONFIG_OBJ);

        if (response.status === 200) {
            setAllposts(response.data)
        } else {
            Swal.fire({
                icon: 'error',
                title: 'Some error occured while getting all posts '
            });
        }

    }

    useEffect(() => {
        getAllPosts();
        // eslint-disable-next-line
    }, []);

    return (
        <>
            <div className='col-md-7'>

                <div>
                    <div className="mb-3">
                        <label htmlFor="exampleFormControlTextarea1" className="form-label fs-4 fw-semibold pt-1">Home</label>
                        <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" placeholder='Tweet something....'></textarea>
                        <div className='pt-2'>
                            <button className='btn btn-primary make-a-tweet' type='submit'>Tweet</button>
                        </div>
                    </div>
                </div>

                <div>
                    {allposts.map((post) => {
                        return (
                            <div>
                                <Homepagetweet postData={post} />
                            </div>
                        )
                    })}
                </div>
            </div>
        </>
    )
}

export default Alltweets