import { takeLatest, call, put } from 'redux-saga/effects';
import { actions as LoginActions, LOGIN } from '../../reducers/login';
import { login } from '../../apis/auth';

function* handleLogin(action) {
  const { username, password } = action;
  try {
    const { res, error } = yield call(login, username, password);
    if (res) yield put(LoginActions.loginSuccess(res.data));
    if (error) throw error;
  } catch(error) {
    yield put(LoginActions.loginFailed(error.message || error));
  }
}

export default function* loginRootSaga() {
  yield takeLatest(LOGIN, handleLogin);
}
