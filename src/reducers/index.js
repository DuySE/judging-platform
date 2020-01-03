import { combineReducers } from 'redux';
import login from './login';
import register from './register';

export const REHYDRATE_COMPLETE = 'root/REHYDRATE_COMPLETE';

export default combineReducers({
  login,
  register,
});
