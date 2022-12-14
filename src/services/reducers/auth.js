import {
  LOGIN_SUCCESS,
  LOGOUT_SUCCESS,
  REFRESH_USER,
  RESET_USER,
  SET_TOKEN,
  SET_USER,
  REFRESH_TOKEN
} from "../actions/auth";

const initialState = {
  name: "",
  email: "",
  password: "",
  token: "",
  isAuth: false,
};

export const userData = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER: {
      return {
        ...state,
        email: action.user.email,
        name: action.user.name,
        password: action.user.password,
        token: action.token,
      };
    }
    case LOGIN_SUCCESS: {
      return {
        ...state,
        isAuth: true,
        token: action.token,
      };
    }
    case SET_TOKEN: {
      return {
        ...state,
        token: action.token,
      };
    }
    case REFRESH_USER: {
      return {
        ...state,
        name: action.user.name,
        email: action.user.email,
        token: action.token,
      };
    }
    case RESET_USER: {
      return {
        ...initialState,
      };
    }
    case LOGOUT_SUCCESS: {
      return {
        ...state,
        isAuth: false,
      };
    }
    case REFRESH_TOKEN: {
      return {
        ...state,
        token: action.token,
      }
    }
    default:
      return state;
  }
};