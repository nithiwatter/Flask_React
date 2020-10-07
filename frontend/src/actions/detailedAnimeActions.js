import axios from 'axios';
import {
  DETAILED_ANIME_START_API_REQUEST,
  DETAILED_ANIME_FINISHED_API_REQUEST,
} from '../actionConstants/actionTypes';

export function fetchDetailedAnime(animeId) {
  return async function (dispatch) {
    try {
      dispatch({ type: DETAILED_ANIME_START_API_REQUEST, payload: null });
      const { data } = await axios.get(`/api/anime/${animeId}`);

      setTimeout(() => {
        dispatch({
          type: DETAILED_ANIME_FINISHED_API_REQUEST,
          payload: data.data,
        });
      }, 500);
    } catch (err) { }
  };
}
