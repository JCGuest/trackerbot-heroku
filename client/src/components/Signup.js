import React from 'react';
import '../styles/login.css';
import axios from 'axios';
 
export default class Signup extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            username: '',
            email: '',
            password: '',
            password_confirmation: '',
            errors: ''
        }
    };

    handleChange = e => {
        const {name, value} = e.target
        this.setState({
          [name]: value
        })
      };

    handleSubmit = e => {
        e.preventDefault();
        const {username, email, password, password_confirmation} = this.state
        let user = {
            username: username,
            email: email,
            password: password,
            password_confirmation: password_confirmation
        }
        axios.post('http://localhost:3001/users', {user}, {withCredentials: true})
        .then(resp => {
            if (resp.data.status === 'created') {
                this.props.handleLogin(resp.data)
                this.redirect()
            } else {
                this.setState({
                    errors: resp.data.errors
                })
            }
        })
        .catch(error => console.log('api errors:', error))
      };

      redirect = () => {
          this.props.history.push('/')
      };

      handleErrors = () => {
          return (
              <div>
                  <ul>{this.state.errors.map(error => {
                      return <li key={error}>{error}</li>
                  })}
                  </ul>
              </div>
          )
      };

    render() {
        return (
        <main>
            <div className='logo'>
                <h4>>_TRACKERBOT</h4>
            </div>

	        <form onSubmit={this.handleSubmit}>
                <div className='field'>
                    <input type="text" name="username" className="input"
                    placeholder='Username'
                    onChange={this.handleChange}/>
                </div>
                <div className="field">
                    <input type="email" name="email" className="input"
                     placeholder='Email'
                     onChange={this.handleChange}/>
                </div>
                <div className="field">
                    <input type="password" name="password" className="input"
                    placeholder="Password"
                    onChange={this.handleChange}/> 
                </div>
                <div className="field">
                    <input type="password" name="password_confirmation" className="input"
                    placeholder="Password Confirmation"
                    onChange={this.handleChange}/> 
                </div>
                <button type='submit'>Sign Up</button>
            </form>
            <div>
                {this.state.errors? this.handleErrors() : null}
            </div>
            
        </main>	
)
    }
}