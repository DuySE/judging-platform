import { all } from 'redux-saga/effects';
import loginSaga from './login';
import registerSaga from './register';
import problemsetSaga from './problemset';
import problemSaga from './problem';

export default function* rootSaga() {
  yield all([
    loginSaga(),
    registerSaga(),
    problemsetSaga(),
    problemSaga(),
  ]);
}
