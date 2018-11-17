import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './home/Home';
import Login from './login/Login';
import Dashboard from './dash/Dashboard';
import Navigation from './navigation/Navigation';
import './App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div>
        <Navigation/>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route path='/login' component={Login}/>
          <Route path='/dash' component={Dashboard}/>
          <Route path='/dash' component={Dashboard}/>
        </Switch>
      </div>
      
      </BrowserRouter>
    );
  }
}

export default App;
