import React from 'react';
import '../styles/login.css'
import Login from '../components/Login';
import Home from '../components/Home';
import Signup from '../components/Signup';
import Menu from '../components/Menu';
import TrackerContainer from "./TrackerContainer"
import { getLoginStatus } from '../actions/getLoginStatus'
import { BrowserRouter as Router, Route, Switch, NavLink } from 'react-router-dom'
import { connect } from 'react-redux';
import SearchContainer from './SearchContainer';

class App extends React.Component {

  componentDidMount() {
    getLoginStatus()
  }

  render() {
    return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/" render={ props => (<Home {...props} loggedInStatus={this.props.isLoggedIn}/> )} />
          <Route exact path="/login" render={ props => (<Login {...props} loginUser={this.props.loginUser} loggedInStatus={this.props.isLoggedIn}/> )} />
          <Route exact path="/signup" render={ props => (<Signup {...props} loginUser={this.props.loginUser} loggedInStatus={this.props.isLoggedIn}/> )} />
          <Route exact path="/menu" render={ props => (<Menu {...props} user={this.props.user} loggedInStatus={this.props.isLoggedIn} logoutUser={this.props.logoutUser}  /> )} />
          <Route exact path="/enter_item" render={ props => (<SearchContainer {...props} user={this.props.user}/> )} />
          <Route exact path="/tracker" render={ props => (<TrackerContainer {...props} user={this.props.user} loggedInStatus={this.props.isLoggedIn} />)} />
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

export default connect(mapStateToProps, mapDispatchToProps)(App);
