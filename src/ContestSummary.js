import React, { Component } from 'react';
import { contests, difficulties } from './Data';

function textageLinkMaker(version, id, difficulty, level) {
  difficulty = difficulties[difficulty][0];
  level = level.toString(16).toUpperCase();
  return `http://textage.cc/score/${version}/${id}.html?1${difficulty}${level}00`;
}

class ContestSummary extends Component {
  render() {
    const contestId = this.props.contestId;
    const contest = contests[contestId];

    return (
      <div className="ContestSummary table-responsive">
        <div className="ContestSummary-title">
          <h2>Skoring #{contestId + 1} ({contest.period}): {contest.name}</h2>
          <h5>({contest.subtitle})</h5>
        </div>

        <table className="table table-first-column-special">
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
              contest.songs.map(function(obj, i) {
                return (
                  <tr key={i}>
                    <td>{obj.song}</td>
                    {obj.charts.map(function(c, idx) {
                      return (
                        <td key={idx}>
                          Level {c.level} -- {c.notes} not<br />
                          <small><a href={textageLinkMaker(obj.version, obj.textageID, idx, c.level)}>Textage</a></small>
                        </td>
                      );
                    })}
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
