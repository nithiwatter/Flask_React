import {
  SHOW_SEARCH_OVERLAY,
  HIDE_SEARCH_OVERLAY,
} from "../actionConstants/actionTypes";

const searchOverlayReducer = (
  state = {
    show: false,
  },
  action
) => {
  switch (action.type) {
    case SHOW_SEARCH_OVERLAY:
      return { ...state, show: true };
    case HIDE_SEARCH_OVERLAY:
      return {
        ...state,
        show: false,
      };
    default:
      return state;
  }
};

export default searchOverlayReducer;
