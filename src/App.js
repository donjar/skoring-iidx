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
          <Route path="/" component={Home} exact />
          <Route path="/history" component={History} exact />
          <Route path="/about" component={About} exact />
        </div>
      </Router>
    );
  }
}

export default App;
