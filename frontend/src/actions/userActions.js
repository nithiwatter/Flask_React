import {
  REGISTER_SUCCESS,
  REGISTER_FAILURE,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
} from '../actionConstants/actionTypes';

export const registerSuccess = (newUser) => {
  return { type: REGISTER_SUCCESS, payload: newUser };
};

export const registerFailure = () => {
  return { type: REGISTER_FAILURE, payload: null };
};

export const loginSuccess = (user) => {
  return { type: LOGIN_SUCCESS, payload: user };
};

export const loginFailure = () => {
  return { type: LOGIN_FAILURE, payload: null };
};
