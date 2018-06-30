import React, { Component } from 'react';
import { contests } from './Data';

class ContestSummary extends Component {
  render() {
    const contest = contests[this.props.contestId]

    return (
      <div className="ContestSummary">
        <table>
          <caption>{contest.name}</caption>
          <thead>
            <tr>
              <th>Nama Lagu</th>
              <th>Normal</th>
              <th>Hyper</th>
              <th>Another</th>
            </tr>
          </thead>
          <tbody>
            {
              contest.songs.map(function(obj) {
                return (
                  <tr>
                    <td>{obj.song}</td>
                    { obj.charts.map(c => <td>{c.level}</td>) }
                  </tr>
                );
              })
            }
          </tbody>
        </table>
      </div>
    );
  }
}

export default ContestSummary;
