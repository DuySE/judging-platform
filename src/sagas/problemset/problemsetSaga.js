import { takeLatest, call, put } from 'redux-saga/effects';
import {
  actions as ProblemsetActions,
  PROBLEMSET_GET
} from '../../reducers/problemset';
import { getAllProblems } from '../../apis/problemset';

function* getProblemset(action) {
  try {
    const { res, error } = yield call(getAllProblems);
    if (res) yield put(ProblemsetActions.getProblemsetSuccess(res.data));
    if (error) throw error;
  } catch (error) {
    yield put(ProblemsetActions.getProblemsetFailed(error.message || error));
  }
}

export default function* problemsetRootSaga() {
  yield takeLatest(PROBLEMSET_GET, getProblemset);
}
