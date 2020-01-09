export const PROBLEMSET_GET = 'problemset/GET';
export const PROBLEMSET_GET_SUCCESS = 'problemset/GET_SUCCESS';
export const PROBLEMSET_GET_FAILED = 'problemset/GET_FAILED';

const getProblemset = () => ({
  type: PROBLEMSET_GET,
});

const getProblemsetSuccess = result => ({
  type: PROBLEMSET_GET_SUCCESS,
  result,
});

const getProblemsetFailed = error => ({
  type: PROBLEMSET_GET_FAILED,
  error,
})

export const actions = {
  getProblemset,
  getProblemsetSuccess,
  getProblemsetFailed,
}

const getResult = ({ problemset }) => problemset.result;
const getError = ({ problemset }) => problemset.error;

export const selectors = {
  getResult,
  getError,
}

const initialState = {
  isLoading: false,
  error: null,
  result: [],
}

export default function (state = initialState, action) {
  switch (action.type) {
    case PROBLEMSET_GET: {
      const newState = { ...state };
      newState.isLoading = true;
      return newState;
    }
    case PROBLEMSET_GET_SUCCESS: {
      const newState = { ...state };
      newState.isLoading = false;
      newState.result = action.result;
      return newState;
    }
    case PROBLEMSET_GET_FAILED: {
      const newState = { ...state };
      newState.isLoading = false;
      newState.error = action.error;
      return newState;
    }
    default: return state;
  }
}
