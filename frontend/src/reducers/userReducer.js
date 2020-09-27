import {
  REGISTER_SUCCESS,
  REGISTER_FAILURE,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
} from '../actionConstants/actionTypes';

const userReducer = (state = { user: null, accessToken: null }, action) => {
  switch (action.type) {
    case REGISTER_SUCCESS:
      return {
        user: action.payload.data,
        accessToken: action.payload.access_token,
      };
    case REGISTER_FAILURE:
      return { user: null, accessToken: null };
    case LOGIN_SUCCESS:
      return {
        user: action.payload.data,
        accessToken: action.payload.access_token,
      };
    case LOGIN_FAILURE:
      return { user: null, accessToken: null };
    default:
      return state;
  }
};

export default userReducer;
