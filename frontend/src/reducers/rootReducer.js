import { combineReducers } from "redux";
import userReducer from "./userReducer";
import searchReducer from "./searchReducer";
import searchOverlayReducer from "./searchOverlayReducer";
import top50AnimeReducer from "./top50AnimeReducer";
import detailedAnimeReducer from "./detailedAnimeReducer";

const rootReducer = combineReducers({
  userData: userReducer,
  search: searchReducer,
  searchOverlay: searchOverlayReducer,
  top50Anime: top50AnimeReducer,
  detailedAnime: detailedAnimeReducer,
});

export default rootReducer;
