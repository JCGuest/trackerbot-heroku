import React from 'react';
// import '../styles/home.css';
import { NavLink } from 'react-router-dom'
import Logo from './Logo'

const Home = () => {
    return (
        <div className='homediv'>
            <Logo/>
            <NavLink to='/login'><button className='loginbtn'>Login</button></NavLink>
            <NavLink to='/signup'><button className='signupbtn'>Signup</button></NavLink>
        </div>
    )
};

export default Home; 