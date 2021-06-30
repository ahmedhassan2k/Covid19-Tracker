import React from 'react';
import './App.css';
import {NavLink, Router, Switch, Route} from 'react-router-dom';
import Header from './components/Header';
import Countries from './components/Countries';
import error from './components/error';
import Global from './components/Global';
import history from './components/History'
function App() {
  return (
    <Router history = {history}>
      <Header />
      <div className = "router">
        <NavLink exact to  = "/"><li>Golbal Information</li></NavLink>
        <NavLink to  = "/components/Countries"><li>Countries Information</li></NavLink>
        <NavLink to  = "/components/error"><li>Graphs</li></NavLink>
      </div>
      <Switch>
        <Route exact path = "/" component={Global} ></Route>
        <Route path = "/components/Countries" component={Countries} ></Route>
        <Route path = "/components/error" component={error} ></Route>
      </Switch>
    </Router>
  )
}

export default App;
