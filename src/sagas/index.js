import { all } from 'redux-saga/effects';
import loginSaga from './login';
import registerSaga from './register';

export default function* rootSaga() {
  yield all([
    loginSaga(),
    registerSaga(),
  ]);
}
