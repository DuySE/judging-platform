import { takeLatest, call, put } from 'redux-saga/effects';
import {
  REGISTER,
  actions as RegisterActions,
} from '../../reducers/register';
import { register } from '../../apis/auth';

function* handleRegister(action) {
  const {
    username,
    password,
    firstName,
    lastName
  } = action;
  try {
    const { res, error } = yield call(register, username, password, firstName, lastName);
    if (res) yield put(RegisterActions.registerSuccess(res.data));
    if (error) throw error;
  } catch (error) {
    yield put(RegisterActions.registerFailed(error.message || error));
  }
}

export default function* registerRootSagas() {
  yield takeLatest(REGISTER, handleRegister);
}
