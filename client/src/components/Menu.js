import React from 'react';
import Navbar from '../components/Navbar';
import '../styles/login.css';
import Logo from './Logo'

const Menu = (props) => {
// debugger 
    return (
        <div className='menu'>
            <Logo/>
            <Navbar logoutUser={props.logoutUser}/>
    </div>
    )
};

export default Menu;