import React from 'react';
// import Login from '../components/Login';
// import Home from '../components/Home';
// import Signup from '../components/Signup';
import Navbar from '../components/Navbar';
// import SearchContainer from '../containers/SearchContainer'
import '../styles/login.css';
import { BrowserRouter as Router} from 'react-router-dom'
import Logo from './Logo'

const Menu = (props) => {
// debugger 
    return (
        <div>
            <Logo/>
            <Navbar logoutUser={props.logoutUser}/>
    </div>
    )
};

export default Menu;