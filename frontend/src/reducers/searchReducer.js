import {
  LIST_LOADING,
  LIST_FINISHED,
  SEARCH_PENDING,
  SEARCH_FINISHED,
} from "../actionConstants/actionTypes";

const searchReducer = (
  state = {
    didMount: false,
    listPending: false,
    searchPending: false,
    searchResults: [],
    genreList: [],
    studioList: [],
    genreObj: {}
  },
  action
) => {
  switch (action.type) {
    case LIST_LOADING:
      return { ...state, didMount: true, listPending: true };
    case LIST_FINISHED:
      return {
        ...state,
        listPending: false,
        genreList: action.payload.genre,
        studioList: action.payload.studio,
        genreObj: action.payload.genreObj
      };
    case SEARCH_PENDING:
      return { ...state, searchPending: true };
    case SEARCH_FINISHED:
      return { ...state, searchPending: false };
    default:
      return state;
  }
};

export default searchReducer;
