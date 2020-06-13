import React from 'react';
import Login from '../components/Login';
import Home from '../components/Home';
import Signup from '../components/Signup';
import QueryContainer from '../containers/QueryContainer';
import axios from 'axios';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { connect } from 'react-redux';

class Routes extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     isLoggedIn: false,
  //     user: {}
  //   };
  // };

// handleLogin = (data) => {
//     this.setState({
//       isLoggedIn: true,
//       user: data.user
//     });
//   };

// handleLogout = () => {
//     this.setState({
//       isLoggedIn: false,
//       user: {}
//     });
//   };

  loginStatus = () => {
    axios.get('http://localhost:3001/logged_in', 
   {withCredentials: true})
    .then(response => {
      if (response.data.logged_in !== false) {
        // this.handleLogin(response)
        this.props.loginUser(true, response.user)
      } else {
        // this.handleLogout()
        this.props.logoutUser(false, {})
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
          <Route exact path="/" render={ props => (<Home {...props} loggedInStatus={this.props.isLoggedIn}/> )} />
          <Route exact path="/login" render={ props => (<Login {...props} loginUser={this.props.loginUser} loggedInStatus={this.props.isLoggedIn}/> )} />
          <Route exact path="/signup" render={ props => (<Signup {...props} loginUser={this.props.loginUser} loggedInStatus={this.props.isLoggedIn}/> )} />
          <Route exact path="/query" render={ props => (<QueryContainer {...props} logoutUser={this.props.logoutUser} /> )} />
       </Switch>
    </Router>
    </div>
    )
  };


};

const mapStateToProps = state => ({ isLoggedIn: state.isLoggedIn, user: state.user })

const mapDispatchToProps = dispatch => ({
  loginUser: (isLoggedIn, user) => dispatch({type: "LOG_IN", isLoggedIn: isLoggedIn, user:user }),
  logoutUser: (isLoggedIn, user) => dispatch({type: "LOG_OUT", isLoggedIn: isLoggedIn, user: user})
});

export default connect(mapStateToProps, mapDispatchToProps)(Routes);
