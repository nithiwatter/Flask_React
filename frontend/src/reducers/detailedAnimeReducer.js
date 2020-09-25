import {
  DETAILED_ANIME_START_API_REQUEST,
  DETAILED_ANIME_FINISHED_API_REQUEST,
  DETAILED_ANIME_SWITCH_PAGE,
} from "../actionConstants/actionTypes";

const detailedAnimeReducer = (
  state = { didMount: false, loading: false, detailedAnime: null },
  action
) => {
  switch (action.type) {
    case DETAILED_ANIME_START_API_REQUEST:
      return { ...state, didMount: true, loading: true };
    case DETAILED_ANIME_FINISHED_API_REQUEST:
      return {
        ...state,
        detailedAnime: action.payload,
        loading: false,
      };
    case DETAILED_ANIME_SWITCH_PAGE:
      return { ...state, didMount: false };
    default:
      return state;
  }
};

export default detailedAnimeReducer;
