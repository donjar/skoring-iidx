import React, { Component } from 'react';
import { contests, dans, results } from './Data';

function calculateBpi(scores, maxScore) {
  const max = Math.max(...scores);
  const min = Math.min(...scores);

  return scores.map(function(score) {
    return 100 * Math.pow(Math.log((maxScore - min) / (maxScore - score)), 1.5) /
                 Math.pow(Math.log((maxScore - min) / (maxScore - max)), 1.5);
  });
}

function calculateFinalScores(scores, totalNotes) {
  const maxScore = totalNotes * 2;
  const grades = ['G', 'F', 'E', 'D', 'C', 'B', 'A', 'AA', 'AAA', 'MAX'];

  const bpiResults = calculateBpi(scores, maxScore);

  return scores.map(function(score, idx) {
    const cutoffs = grades.map((_, idx) => Math.ceil(maxScore * idx / (grades.length - 1)));

    const higherIndex = cutoffs.findIndex(elem => (elem > score));
    const lowerGrade = grades[higherIndex - 1];
    const lowerDiff = score - cutoffs[higherIndex - 1];
    const higherGrade = grades[higherIndex];
    const higherDiff = cutoffs[higherIndex] - score;

    return [bpiResults[idx], `${lowerGrade}+${lowerDiff}`, score, `${higherGrade}-${higherDiff}`];
  });
}

class ContestData extends Component {
  processResults() {
    const contestId = this.props.contestId;
    const diff = this.props.difficulty;
    const resultObjects = results[contestId][diff];
    const numOfSongs = contests[contestId].songs.length;
    const totalNotes = contests[contestId].songs.map(s => s.charts[diff].notes);
    const scoresMatrix = Array.from({ length: numOfSongs }).map(function(_, idx) {
      const resultScores = resultObjects.map(r => r.results[idx]);
      const totalNotesOfSong = totalNotes[idx];
      return calculateFinalScores(resultScores, totalNotesOfSong);
    });

    const bpiTotals = resultObjects.map(function(_, idx) {
      return scoresMatrix.map(song => song[idx][0]).reduce((a, b) => a + b, 0)
    })

    return (
      <tbody>
        {resultObjects.map(function(obj, idx) {
          return (
            <tr key={idx}>
              <td>{obj.name}<br/>{dans[obj.dan]}</td>
              {scoresMatrix.map(function(s, i) {
                const score = s[idx]
                return (
                  <td key={i}>
                    {score[0].toFixed(2)}<br />
                    <small className="d-flex">
                      <div class="small-score">{score[1]}</div>
                      <div class="small-score-narrow">{score[2]}</div>
                      <div class="small-score">{score[3]}</div>
                    </small>
                  </td>
                );
              })}
              <td>{bpiTotals[idx].toFixed(2)}</td>
            </tr>
          );
        })}
      </tbody>
    )
  }

  render() {
    const contestId = this.props.contestId;
    const diff = this.props.difficulty;
    const contest = contests[contestId];

    return (
      <div className="ContestData table-responsive">
        <table className="table table-first-column-special">
          <thead>
            <tr>
              <th>Pemain</th>
              {contest.songs.map(s => <th key={s.song}>{s.song}</th>)}
              <th>Total Skor</th>
            </tr>
          </thead>
          {this.processResults(results[contestId][diff])}
        </table>
      </div>
    );
  }
}

export default ContestData;
