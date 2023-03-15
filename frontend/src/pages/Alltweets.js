import React, { useEffect } from 'react'
import Tweet from '../components/Tweet'

const Alltweets = () => {

    const getAllPosts = () => {
        console.log('Get all posts');
    }
    useEffect(() => {
        getAllPosts();
    }, []);

    return (
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
                <Tweet />
                <Tweet />
                <Tweet />
            </div>
        </div>
    )
}

export default Alltweets