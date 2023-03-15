import React from 'react'
import Left from '../components/Left'
import Alltweets from './Alltweets'

const Home = () => {
    return (

        <div className='row'>
            <Left />
            <Alltweets />
        </div>
    )
}

export default Home