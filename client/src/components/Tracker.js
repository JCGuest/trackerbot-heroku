import React from 'react';
import Logo from '../components/Logo';
import Navbar from '../components/Navbar'
import axios from 'axios'


export default class Tracker extends React.Component {
    // constructor(props) {
    //     super(props);
    //     // this.state = {
    //     //     searchTerm: '',
    //     //     user: props.user
    //     // }
    // }

    componentDidMount() {
        const userId = this.props.user.id
        axios.get(`http://localhost:3001/users/${userId}/items`, {withCredentials:true})
        .then(json => {
            if (json.data.logged_in) {
                this.props.addItems(true, json.data.items)
            } else {
                this.props.logoutUser(false, {})
            }
        })
        .catch(error => console.log('api errors:', error))
    };

    handleChange = e => {
        console.log(e.target.value)
    }

    render() {
        return (
            <main>
                <Logo/>
                <Navbar/>
                <form>
                    <div className='field'>
                        <input type='text' name='search' className='input' placeholder='enter your search here' onChange={this.handleChange}/>
                    </div>
                </form>
            </main>
        )
    }
};