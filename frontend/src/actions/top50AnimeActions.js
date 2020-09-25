import axios from "axios";
import {
  TOP_50_SWITCH_PAGE,
  TOP_50_FINISHED_API_REQUEST,
} from "../actionConstants/actionTypes";

export function switchPage() {
  return { type: TOP_50_SWITCH_PAGE, payload: null };
}

export function fetchTop50Anime() {
  return async function (dispatch) {
    try {
      const { data } = await axios.get(`/api/anime/topAnime`);

      setTimeout(() => {
        dispatch({ type: TOP_50_FINISHED_API_REQUEST, payload: data.data });
      }, 1000);
    } catch (err) {}
  };
}
