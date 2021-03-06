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
      const genre = [
        { genre_id: "All", genre_name: "All" },
        ...data.data.genre,
      ];
      const studio = [
        { studio_id: "All", studio_name: "All" },
        ...data.data.studio,
      ];
      const genreObj = {};

      for (const g of genre) {
        genreObj[g["genre_name"]] = true;
      }

      setTimeout(() => {
        dispatch({
          type: LIST_FINISHED,
          payload: {
            genre,
            studio,
            genreObj,
          },
        });
      }, 1000);
    } catch (err) {}
  };
}

export function startSearching(queryString) {
  return async function (dispatch) {
    try {
      dispatch({ type: SEARCH_PENDING });
      console.log(
        "sending API request to /api/anime/advancedSearch" + queryString
      );
      const { data } = await axios.get(
        `/api/anime/advancedSearch${queryString}`
      );

      const searchResults = data.data;
      const total = data.total;
      // mock API call
      setTimeout(() => {
        dispatch({ type: SEARCH_FINISHED, payload: { searchResults, total } });
      }, 1000);
    } catch (err) {
      setTimeout(() => {
        dispatch({ type: SEARCH_FINISHED });
      }, 1000);
    }
  };
}
