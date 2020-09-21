import {
  SEARCH_PENDING,
  SEARCH_FINISHED,
} from '../actionConstants/actionTypes';

const searchReducer = (
  state = { searchPending: false, searchResults: [] },
  action
) => {
  switch (action.type) {
    case SEARCH_PENDING:
      return { ...state, searchPending: true };
    case SEARCH_FINISHED:
      return { ...state, searchPending: false };
    default:
      return state;
  }
};

export default searchReducer;
