import React from 'react';
import { withRouter } from 'react-router';

const ProblemTable = ({ problems, history }) => (
  <div>
    <table className="table" >
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Name</th>
          <th scope="col">Type</th>
          <th scope="col">Points</th>
          <th scope="col">Rating</th>
          <th scope="col">Tags</th>
        </tr>
      </thead>
      <tbody>
        {problems.map(problem =>
          <tr key={problem.id}>
            <th scope="row" onClick={() => history.push(`/problem/${problem.id}`)}>
              {problem.id}
            </th>
            <td>{problem.name}</td>
            <td>{problem.type}</td>
            <td>{problem.points}</td>
            <td>{problem.rating}</td>
            <td>{problem.tags}</td>
          </tr>
        )}
      </tbody>
    </table >
  </div>
)

export default withRouter(ProblemTable);
