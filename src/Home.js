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
        <ContestSummary contestId={0} />
        <ContestView contestId={0} />
      </Fragment>
    );
  }
}

export default Home;
