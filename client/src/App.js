import React from 'react';
import Logo from './components/Logo'
import Login from './components/Login'
import Signup from './components/Signup'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

function App(props) {
  return (
    <div>
      <Logo/>
      <Router>
        <Switch>
        <Route exact path="/" component={App} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={Signup}/>
       </Switch>
    </Router>
    </div>

  );
}

export default App;
