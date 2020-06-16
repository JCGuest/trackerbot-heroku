import React from 'react';
import Logo from '../components/Logo';
import Navbar from '../components/Navbar'
import axios from 'axios'


export default class TrackerContainer extends React.Component {
    // constructor(props) {
    //     super(props);
    //     // this.state = {
    //     //     searchTerm: '',
    //     //     user: props.user
    //     // }
    // }

    componentDidMount() {
        const userId = this.props.user.id

        console.log(userId)
        axios.get(`http://localhost:3001/users/${userId}/items`, {withCredentials:true})
        .then(json => {
            if (json.data.logged_in) {
                this.props.addItems(true, json.data.items)
            } else {
                this.props.logoutUser(false, {})
            }
        })
        .catch(error => console.log('api errors:', error))
    }

    render() {
        return (
            <div>
                <Logo/>
                <Navbar/>
                <div className='logo'>
                    TrackerContainer <br></br>
                    {typeof(this.props.items)}
                </div>
            </div>
        )
    }
};