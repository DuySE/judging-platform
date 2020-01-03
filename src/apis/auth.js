import axios from 'axios';

export const login = (username, password) =>
  axios.post('http://localhost:3001/login', {
    username: username,
    password: password
  }).then(res => ({ res })).catch(error => ({ error }))

export const register = (username, password, firstName, lastName) =>
  axios.post('http://localhost:3001/register', {
    username: username,
    password: password,
    firstName: firstName,
    lastName: lastName
  }).then(res => ({ res })).catch(error => ({ error }))
