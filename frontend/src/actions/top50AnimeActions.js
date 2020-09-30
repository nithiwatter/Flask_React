import axios from 'axios';
import {
  TOP_50_SWITCH_PAGE,
  TOP_50_START_API_REQUEST,
  TOP_50_FINISHED_API_REQUEST,
} from '../actionConstants/actionTypes';

export function switchPage() {
  return { type: TOP_50_SWITCH_PAGE, payload: null };
}

export function fetchTop50Anime(page, size) {
  return async function (dispatch) {
    try {
      dispatch({ type: TOP_50_START_API_REQUEST, payload: null });
      const { data } = await axios.get(
        `/api/anime/topAnime?page=${page}&size=${size}`
      );

      setTimeout(() => {
        dispatch({ type: TOP_50_FINISHED_API_REQUEST, payload: data.data });
      }, 500);
    } catch (err) {}
  };
}
