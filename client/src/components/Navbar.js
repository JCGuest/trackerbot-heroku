import React from 'react';
import axios from 'axios';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import '../styles/login.css'

class Navbar extends React.Component {
    constructor(props) {
        super();
    }

    logout = () => {
        axios.post('http://localhost:3001/logout', {}, 
        {withCredentials: true})
        .then(this.props.logoutUser(false, {}))
    };
    render() {
    return (
        <div>
            <div className='navbar'>
                <NavLink to='/tracker'><span className='text'>:find item</span></NavLink>
                <NavLink to='/add_item'><span className='text' >:enter item</span></NavLink>
                <NavLink to='/' onClick={this.logout} exact><span className='text'>:logout</span></NavLink>
            </div>
        </div>
        )
    }
};


const mapDispatchToProps = dispatch => ({
  logoutUser: (isLoggedIn, user) => dispatch({type: "LOG_OUT", isLoggedIn: isLoggedIn, user: user})
});

export default connect(null, mapDispatchToProps)(Navbar);