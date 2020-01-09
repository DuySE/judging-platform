import { combineReducers } from 'redux';
import login from './login';
import register from './register';
import problemset from './problemset';
import problem from './problem';

export const REHYDRATE_COMPLETE = 'root/REHYDRATE_COMPLETE';

export default combineReducers({
  login,
  register,
  problemset,
  problem,
});
