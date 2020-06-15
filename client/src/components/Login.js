import React from 'react'
// import '../styles/login.css'
import axios from 'axios'
import { Link } from 'react-router-dom'
 
export default class Login extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            username: '',
            email: '',
            password: '',
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
        const {username, email, password} = this.state
        let user = {
            username: username,
            email: email,
            password: password
            }
        axios.post('http://localhost:3001/login', {user}, {withCredentials: true})
        .then(resp => {
            if (resp.data.logged_in) {
                this.props.loginUser(true, resp.data.user)
                this.redirect()
            } else {
                this.setState({
                  errors: resp.data.errors
                })
            }
        })
        .catch(error => console.log("api_errors:", error))
    };

    redirect = () => {
        this.props.history.push('/menu')
    };

    handleErrors = () => {
        return (
            <div>
                <ul>
                    {this.state.errors.map(error => {
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
                >_TRACKERBOT
            </div>

            <form onSubmit={this.handleSubmit}>
                <div className="field">
                    <input type="text" name="username" 
                    className="input" placeholder='Username'
                    onChange={this.handleChange}/>
                </div>
            
                <div className="field">
                    <input type="email" name="email" 
                    className="input" placeholder='Email'
                    onChange={this.handleChange}/>
                </div>

                <div className="field">
                    <input type="password" name="password"
                    className="input" placeholder="Password"
                    onChange={this.handleChange}/> 
                </div>
                <button type='submit'>Login</button>
            </form>

            <div>
            <Link to='/signup'>sign up</Link>
          </div>
          <div>
          {this.state.errors ? this.handleErrors() : null}
        </div>
        </main>	
)
    }
}