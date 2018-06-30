import React, { Component } from 'react';
import { contests, dans, difficulties, results } from './Data';

class ContestData extends Component {
  render() {
    const contestId = this.props.contestId;
    const diff = this.props.difficulty;
    const contest = contests[contestId];

    return (
      <div className="ContestData">
        <h1>{contest.name} [{difficulties[diff]}]</h1>
        <table>
          <thead>
            <tr>
              <th>Pemain</th>
              {contest.songs.map(s => <th>{s.song}</th>)}
            </tr>
          </thead>
          <tbody>
            {
              results[contestId][diff].map(function(r) {
                return (
                  <tr>
                    <td>{r.name}<br />{dans[r.dan]}</td>
                    {r.results.map(s => <td>{s}</td>)}
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

export default ContestData;
