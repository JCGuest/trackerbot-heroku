import React from 'react';
// import '../styles/home.css';
import { NavLink } from 'react-router-dom'
import Logo from './Logo'

const Home = () => {
    return (
        <div className='home'>
                <Logo/>
                <div className='error'>
                    <NavLink to='/login'><button className='loginbtn'>login</button></NavLink>
                    {'  \\  '}
                    <NavLink to='/signup'><button className='signupbtn'>signup</button></NavLink>
                </div>
        </div>
    )
};

export default Home; 