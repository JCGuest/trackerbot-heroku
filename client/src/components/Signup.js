import React from 'react';
import '../styles/login.css';
import axios from 'axios';
import Logo from './Logo'
import { NavLink } from 'react-router-dom';
 
export default class Signup extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            password_confirmation: '',
            errors: ''
        }
    };

    handleChange = (e) => {
        const {name, value} = e.target
        this.setState({
          [name]: value
        })
      };

    handleSubmit = (e) => {
        e.preventDefault();
        const {username, password, password_confirmation} = this.state
        let user = {
            username: username,
            password: password,
            password_confirmation: password_confirmation
        }
        axios.post('http://localhost:3001/users', {user}, {withCredentials: true})
        .then(json => {
            if (json.data.status === 'created') {
                this.props.loginUser(true, json.data.user)
                this.redirect()
            } else {
                this.setState({
                    errors: json.data.errors
                })
            }
        })
        .catch(error => console.log('api errors:', error))
      };

      redirect = () => {
          this.props.history.push('/menu')
      };

      handleErrors = () => {
          return (
              <div className='error-div'>
                {this.state.errors.map(error => {
                    return (
                    <p className='error' key={error}>ERROR: {error}{<br></br>}</p>
                    ) 
                })}
                <p className='ask'>
                    already have an account? click to <NavLink to='/login'>login</NavLink>
                </p>
            </div>
          )
      };

    render() {
        return (
        <main>
            <Logo/>
	        <form onSubmit={this.handleSubmit}>
                <div className='field'>
                    <input type="text" name="username" className="input"
                    placeholder='username'
                    onChange={this.handleChange}/>
                </div>
                <div className="field">
                    <input type="password" name="password" className="input"
                    placeholder="password"
                    onChange={this.handleChange}/> 
                </div>
                <div className="field">
                    <input type="password" name="password_confirmation" className="input"
                    placeholder="password confirmation"
                    onChange={this.handleChange}/> 
                </div>
                <button type='submit'>sign up</button>
            </form>
            <div>
                {this.state.errors? this.handleErrors() : null}
            </div>
            
        </main>	
)
    }
}