export const REGISTER = 'register/REGISTER';
export const REGISTER_SUCCESS = 'register/REGISTER_SUCCESS';
export const REGISTER_FAILED = 'register/REGISTER_FAILED';

const register = (username, password, firstName, lastName) => ({
  type: REGISTER,
  username,
  password,
  firstName,
  lastName,
})

const registerSuccess = data => ({
  type: REGISTER_SUCCESS,
  data,
})

const registerFailed = error => ({
  type: REGISTER_FAILED,
  error,
})

export const actions = {
  register,
  registerSuccess,
  registerFailed,
}

const getData = ({ register }) => register.data;
const getError = ({ register }) => register.error;

export const selectors = {
  getData,
  getError,
}

const initialState = {
  isLoading: false,
  isRegistered: false,
  error: null,
  data: null,
}

export default function (state = initialState, action) {
  switch (action.type) {
    case REGISTER: {
      const newState = { ...state };
      newState.isLoading = true;
      return newState;
    }
    case REGISTER_SUCCESS: {
      const newState = { ...state };
      newState.isRegistered = true;
      newState.error = null;
      newState.data = {
        username: action.data.username,
        password: action.data.password,
        firstName: action.data.firstName,
        lastName: action.data.lastName
      };
      return newState;
    }
    case REGISTER_FAILED: {
      const newState = { ...state };
      newState.error = action.error;
      newState.isRegistered = false;
      newState.data = null;
      return newState;
    }
    default: return state;
  }
}
