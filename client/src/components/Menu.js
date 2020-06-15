import React from 'react';
import Login from '../components/Login';
import Home from '../components/Home';
import Signup from '../components/Signup';
import Navbar from '../components/Navbar';
import SearchContainer from '../containers/SearchContainer'
import '../styles/login.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'


const Menu = (props) => {

    return (
        <div>
            <div className='logo'>
                >_TRACKERBOT
            </div>
        <div>
        <Navbar/>
        <Router>
            <Switch>
                <Route exact path="/enter_item" render={ props => (<SearchContainer {...props} user={props.user}/> )} />
        </Switch>
        </Router>
    </div>
    )
        </div>
    )
};

export default Menu;