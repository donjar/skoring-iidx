import React, { Component } from 'react';
import './App.css';
import ContestSummary from './ContestSummary';
import ContestView from './ContestView';

class App extends Component {
  render() {
    return (
      <div className="App container">
        <div className="jumbotron">
          <h1 className="display-4">Skoring Beatmania IIDX Indonesia!</h1>
        </div>
        <ContestSummary contestId={0} />
        <ContestView contestId={0} />
      </div>
    );
  }
}

export default App;
