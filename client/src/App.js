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
  }
  render() {
    return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={Signup}/>
       </Switch>
    </Router>
    </div>
    )
  }
}

export default App;
