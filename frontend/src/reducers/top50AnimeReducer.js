import {
  TOP_50_SWITCH_PAGE,
  TOP_50_START_API_REQUEST,
  TOP_50_FINISHED_API_REQUEST,
} from "../actionConstants/actionTypes";

const top50AnimeReducer = (
  state = { didMount: false, loading: false, top50Anime: [] },
  action
) => {
  switch (action.type) {
    case TOP_50_START_API_REQUEST:
      return { ...state, didMount: true, loading: true };
    case TOP_50_FINISHED_API_REQUEST:
      return {
        ...state,
        top50Anime: action.payload,
        loading: false,
      };
    case TOP_50_SWITCH_PAGE:
      return { ...state, didMount: false };
    default:
      return state;
  }
};

export default top50AnimeReducer;
