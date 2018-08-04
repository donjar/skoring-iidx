import React, { Component, Fragment } from 'react';
import ContestSummary from './ContestSummary';
import ContestView from './ContestView';

class Home extends Component {
  render() {
    return (
      <Fragment>
        <div className="jumbotron">
          <h1 className="display-4">Skoring Beatmania IIDX Indonesia!</h1>
        </div>
        <ContestSummary contestId={1} />
        <ContestView contestId={1} />
      </Fragment>
    );
  }
}

export default Home;
