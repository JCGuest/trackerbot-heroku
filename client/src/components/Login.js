import React from 'react'
import '../styles/login.css'
 
export default class Login extends React.Component {

    constructor() {
        super();
        this.state = {
            email: 'Email',
            password: 'Password'
        }
    };


    render() {
        return (
        <main>
	<form>
	
		<div className="field">
			<input type="email" name="email" className="input" placeholder={this.state.email}/>
		</div>

		<div className="field">
			<input type="password" name="password" className="input" placeholder="Password"/> 
		</div>
	</form>

    <button>Login</button>
</main>	
)
    }
}