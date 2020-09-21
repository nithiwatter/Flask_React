import {
  SEARCH_PENDING,
  SEARCH_FINISHED,
} from '../actionConstants/actionTypes';

export function startSearching() {
  return async function (dispatch) {
    try {
      dispatch({ type: SEARCH_PENDING });

      // mock API call
      setTimeout(() => {
        dispatch({ type: SEARCH_FINISHED });
      }, 1000);
    } catch (err) {}
  };
}
