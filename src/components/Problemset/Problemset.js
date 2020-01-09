import React, { Component } from 'react';
import ProblemTable from './ProblemTable';

export default class Problemset extends Component {
  componentDidMount() {
    this.props.getProblemset();
  }
  render() {
    const { result } = this.props;
    return (
      <div>
        <ProblemTable problems={result} />
      </div>
    )
  }
}
