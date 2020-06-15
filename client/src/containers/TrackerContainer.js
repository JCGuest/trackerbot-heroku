import React from 'react';
import Logo from '../components/Logo';
import Navbar from '../components/Navbar'

export default class TrackerContainer extends React.Component {
    constructor(props) {
        super();
        this.state = {
            searchTerm: ''
        }
    }

    render() {
        return (
            <div>
                <Logo/>
                <Navbar/>
                <div className='logo'>
                    TrackerContainer
                </div>
            </div>
        )
    }
};