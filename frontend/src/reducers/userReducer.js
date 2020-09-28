import {
  REGISTER_SUCCESS,
  REGISTER_FAILURE,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT,
  SET_CALLBACK_ROUTE,
} from '../actionConstants/actionTypes';

const userReducer = (
  state = { user: null, accessToken: null, previousPath: '/topAnime' },
  action
) => {
  switch (action.type) {
    case REGISTER_SUCCESS:
      return {
        ...state,
        user: action.payload.data,
        accessToken: action.payload.access_token,
      };
    case REGISTER_FAILURE:
      return { ...state, user: null, accessToken: null };
    case LOGIN_SUCCESS:
      return {
        ...state,
        user: action.payload.data,
        accessToken: action.payload.access_token,
      };
    case LOGIN_FAILURE:
      return { ...state, user: null, accessToken: null };
    case LOGOUT:
      return { ...state, user: null, accessToken: null };
    case SET_CALLBACK_ROUTE:
      return { ...state, previousPath: action.payload };
    default:
      return state;
  }
};

export default userReducer;
