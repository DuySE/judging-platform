export const PROBLEM_GET = 'problem/GET'
export const PROBLEM_GET_SUCCESS = 'problem/GET_SUCCESS'
export const PROBLEM_GET_FAILED = 'problem/GET_FAILED'

const getProblemDetail = id => ({
  type: PROBLEM_GET,
  id,
})

const getProblemDetailSuccess = problem => ({
  type: PROBLEM_GET_SUCCESS,
  problem,
})

const getProblemDetailFailed = error => ({
  type: PROBLEM_GET_FAILED,
  error,
})

const getProblem = ({ problem }) => problem.problem
const getError = ({ problem }) => problem.error

export const actions = {
  getProblemDetail,
  getProblemDetailSuccess,
  getProblemDetailFailed,
}

export const selectors = {
  getProblem,
  getError,
}

const initialState = {
  isLoading: false,
  problem: {},
  error: null,
}

export default function (state = initialState, action) {
  switch (action.type) {
    case PROBLEM_GET: {
      const newState = { ...state }
      newState.isLoading = true
      return newState
    }
    case PROBLEM_GET_SUCCESS: {
      const newState = { ...state }
      newState.isLoading = false
      newState.problem = action.problem
      newState.error = null
      return newState
    }
    case PROBLEM_GET_FAILED: {
      const newState = { ...state }
      newState.isLoading = false
      newState.error = action.error
      return newState
    }
    default: return state;
  }
}
