import React from 'react';
import Login from './components/Login';
import Home from './components/Home';
import Signup from './components/Signup';
import axios from 'axios';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false,
      user: {}
    };
  };

handleLogin = (data) => {
    this.setState({
      isLoggedIn: true,
      user: data.user
    });
  };
  
handleLogout = () => {
    this.setState({
      isLoggedIn: false,
      user: {}
    });
  };

  loginStatus = () => {
    axios.get('http://localhost:3001/logged_in', 
   {withCredentials: true})
    .then(response => {
      if (response.data.logged_in) {
        this.handleLogin(response)
      } else {
        this.handleLogout()
      }
    })
    .catch(error => console.log('api errors:', error))
  }

  componentDidMount() {
    this.loginStatus()
  }

  render() {
    return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/" render={props => (<Home {...props} loggedInStatus={this.state.isLoggedIn}/> )} />
          <Route exact path="/login" render={props => (<Login {...props} handleLogin={this.handleLogin} loggedInStatus={this.state.isLoggedIn}/> )} />
          <Route exact path="/signup" render={props => (<Signup {...props} handleLogin={this.handleLogin} loggedInStatus={this.state.isLoggedIn}/> )} />
       </Switch>
    </Router>
    </div>
    )
  };
};

export default App;
