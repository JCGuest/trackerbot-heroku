import React from 'react';
import axios from 'axios';
import { NavLink } from 'react-router-dom';
import '../styles/login.css'
// import SearchContainer from '../containers/SearchContainer'

const Navbar = (props) =>  {
    function logout() {
        axios.post('http://localhost:3001/logout', {}, 
        {withCredentials: true})
        .then(resp => props.logoutUser(false, {}))
    };
// debugger 
    return (
        <div>
            <div className='navbar'>
                <NavLink to='/tracker'><span className='text'>Find Item</span></NavLink>
                <NavLink to='/enter_item'><span className='text' >Enter Item</span></NavLink>
                <NavLink to='/' onClick={() => {logout()}} exact><span className='text'>Logout</span></NavLink>
            </div>
        </div>
        )
};

export default Navbar;