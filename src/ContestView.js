import React, { Component } from 'react';
import { contests, difficulties } from './Data';
import ContestData from './ContestData';

class ContestView extends Component {
  render() {
    return (
      <div className="ContestView">
        <h3>Hasil</h3>
        <p>Cara submit: {contests[this.props.contestId].submit}, ke <a href="mailto:skoringiidx@herbert.id">skoringiidx@herbert.id</a></p>
        <ul className="nav nav-tabs" id="myTab" role="tablist">
          {difficulties.map(function(d, idx) {
            return (<li key={idx} className="nav-item">
              <a className={`nav-link${idx === 2 ? ' active' : ''}`} id={`${d}-tab`} data-toggle="tab" href={`#${d}`} role="tab" aria-controls={d} aria-selected={idx === 2}>{d}</a>
            </li>);
          })}
        </ul>
        <div className="tab-content" id="myTabContent">
          {difficulties.map(function(d, idx) {
            return (<div key={d} className={`tab-pane fade show${idx === 2 ? ' active' : ''}`} id={d} role="tabpanel" aria-labelledby="home-tab">
              <ContestData contestId={0} difficulty={idx} />
            </div>);
          })}
        </div>
      </div>
    );
  }
}

export default ContestView;
