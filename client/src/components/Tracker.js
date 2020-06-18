import React from 'react';
import Logo from '../components/Logo';
import Navbar from '../components/Navbar'
import axios from 'axios'
import {Route, BrowserRouter as Router, Link} from 'react-router-dom';
import ItemList from './ItemList';
import LocList from './LocList';


export default class Tracker extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            searchTerm: '',
            user: props.user,
            message: '',
            errors: ''
        }
    }

    componentDidMount() {
        const userId = this.props.user.id
        axios.get(`http://localhost:3001/users/${userId}/items`, {withCredentials:true})
        .then(json => {
            if (json.data.logged_in) {
                this.props.addItems(true, json.data.items)
            } else {
                this.props.logoutUser(false, {})
                this.redirect()
            }
        })
        .catch(error => console.log('api errors:', error))
    };

    redirect = () => {
        this.props.history.push('/menu')
    };

    handleChange = e => {
        this.setState({
            ...this.state,
            searchTerm: e.target.value
        })
    };

    handleSubmit = (e) => {
        e.preventDefault();
        
    }

    render() {
        return (
            <main>
                <Logo/>
                <Navbar/>
                <form onSubmit={this.handleSubmit}>
                    <div className='field'>
                        <input type='text' name='search' className='input' placeholder='enter your search here' onChange={this.handleChange}/>
                    </div>
                </form>
                <div className='error'>
                    <br></br>
                    {'choose a catagory to expand >>'}
                </div>
                <div className='navbar'>    
                    <Router>
                        <Link to='/your_items'><span className='text'>your items</span></Link>
                        <Link to='/your_locations'><span className='text'>your locations</span></Link>
                        <Route exact path="/your_locations" render={ props => (<LocList {...props} user={this.props.user} items={this.props.items} /> )} />
                        <Route exact path="/your_items" render={ props => (<ItemList {...props} user={this.props.user} items={this.props.items} /> )} />
                    </Router>
                </div>
            </main>
        )
    };
};