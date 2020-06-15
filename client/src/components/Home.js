import React from 'react';
// import '../styles/home.css';
import { NavLink } from 'react-router-dom'

const Home = () => {
    return (
        <div className='homediv'>
            <div className='logo'>
                <h4>>_TRACKERBOT</h4>
            </div>
            <NavLink to='/login'><button className='loginbtn'>Login</button></NavLink>
            <NavLink to='/signup'><button className='signupbtn'>Signup</button></NavLink>
        </div>
    )
};

export default Home; 