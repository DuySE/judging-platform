import axios from 'axios';

export const getAllProblems = () =>
  axios.get('http://localhost:3001/problems').then(res => ({ res })).catch(error => ({ error }))
