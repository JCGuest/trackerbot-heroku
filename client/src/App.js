import React from 'react';
import Login from './components/Login';
import Home from './components/Home';
import Signup from './components/Signup';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

function App(props) {
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
  );
};

export default App;
