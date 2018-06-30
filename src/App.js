import React, { Component } from 'react';
import './App.css';
import ContestSummary from './ContestSummary';
import ContestData from './ContestData';

class App extends Component {
  render() {
    return (
      <div class="App">
        <ContestSummary contestId={0} />
        {[0, 1, 2].map(d => <ContestData contestId={0} difficulty={d} />)}
      </div>
    );
  }
}

export default App;
