import {
  TOP_50_SWITCH_PAGE,
  TOP_50_FINISHED_API_REQUEST,
} from "../actionConstants/actionTypes";

const top50AnimeReducer = (
  state = { loading: true, top50Anime: [] },
  action
) => {
  switch (action.type) {
    case TOP_50_FINISHED_API_REQUEST:
      return {
        ...state,
        top50Anime: action.payload,
        loading: false,
      };
    case TOP_50_SWITCH_PAGE:
      return { ...state, loading: true };
    default:
      return state;
  }
};

export default top50AnimeReducer;
