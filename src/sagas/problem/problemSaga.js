import { takeLatest, call, put } from 'redux-saga/effects'
import {
  PROBLEM_GET,
  actions as ProblemActions
} from '../../reducers/problem'

import { getProblem } from '../../apis/problem'

function* handleGetProblem(action) {
  try {
    const { res, error } = yield call(getProblem, action.id)
    if (res) yield put(ProblemActions.getProblemDetailSuccess(res.data))
    if (error) throw error
  } catch(error) {
    yield put(ProblemActions.getProblemDetailFailed(error))
  }
}

export default function* problemRootSaga() {
  yield takeLatest(PROBLEM_GET, handleGetProblem)
}
