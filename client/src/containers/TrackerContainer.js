import React from 'react';
import Logo from '../components/Logo';
import Navbar from '../components/Navbar'
import { getItems } from '../actions/getItems'

export default class TrackerContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            searchTerm: ''
        }
    }

    componentDidMount() {
        getItems(this.props.user.id)
        console.log(this.props.user.id)
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