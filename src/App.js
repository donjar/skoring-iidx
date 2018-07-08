import React, { Component } from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import AppNav from './AppNav';
import Home from './Home';
import History from './History';
import About from './About';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App container">
          <AppNav />
          <Route path="/skoring-iidx" component={Home} exact />
          <Route path="/skoring-iidx/history" component={History} exact />
          <Route path="/skoring-iidx/about" component={About} exact />
        </div>
      </Router>
    );
  }
}

export default App;
