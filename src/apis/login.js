import axios from 'axios';

export const login = (username, password) =>
  axios.post('http://localhost:3001/login', {
    username: username,
    password: password
  }).then(res => ({ res })).catch(error => ({ error }))
