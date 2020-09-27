import {
  REGISTER_SUCCESS,
  REGISTER_FAILURE,
} from "../actionConstants/actionTypes";

export const registerSuccess = (newUser) => {
  return { type: REGISTER_SUCCESS, payload: newUser };
};

export const registerFailure = () => {
  return { type: REGISTER_FAILURE, payload: null };
};
