import React from 'react';
import axios from 'axios';

const QueryContainer = (props) =>  {

    function logout() {
        axios.get('http://localhost:3001/logged_in', {}, 
        {withCredentials: true})
        .then(resp => props.logoutUser(false, {}))
        .then(redirect())
    };

    function redirect() {
        props.history.push('/')
    };

        return (
        <div>
            <h2>'QUERY'</h2>
            <button className='signupbtn' onClick={() => {logout()}}>Logout</button>
        </div>
        )
};

export default QueryContainer;