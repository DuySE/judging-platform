import axios from 'axios';
export const getProblem = id =>
  axios.get(`http://localhost:3001/problems/${id}`).then(res => ({ res })).catch(error => ({ error }))
