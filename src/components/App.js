import React, { Component } from 'react';
import Trello from "./Trello";
import "./App.css";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Nav from './Nav';
import Projects from './Projects';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Nav />
        <Switch>
          <Route path='/projects' component={Projects} />
          <Route path='/trello/:id' component={Trello} />
        </Switch>
      </BrowserRouter>
    )
  }
}

export default App;