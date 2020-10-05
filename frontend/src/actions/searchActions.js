import axios from "axios";
import {
  LIST_LOADING,
  LIST_FINISHED,
  SEARCH_PENDING,
  SEARCH_FINISHED,
} from "../actionConstants/actionTypes";

export function startLoadingList() {
  return async function (dispatch) {
    try {
      dispatch({ type: LIST_LOADING });
      const { data } = await axios.get("/api/anime/searchLists");
      setTimeout(() => {
        dispatch({
          type: LIST_FINISHED,
          payload: {
            genre: data.data.genre,
            studio: data.data.studio,
          },
        });
      }, 1000);
    } catch (err) {}
  };
}

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
