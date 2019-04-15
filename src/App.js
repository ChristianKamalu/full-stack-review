import React, { Component } from 'react';
import './App.css';
import {HashRouter, Route, Switch} from 'react-router-dom';
import Private from './components/Private/Private';
import Login from './components/Login/Login';

class App extends Component {
  render() {
    return (
      <HashRouter>
        <Switch>
          <Route path='/' component={Login} exact />
          <Route path='/private' component={Private} />
        </Switch>
      </HashRouter>
    );
  }
}

export default App;
