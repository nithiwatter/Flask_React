import { combineReducers } from "redux";
import searchReducer from "./searchReducer";
import top50AnimeReducer from "./top50AnimeReducer";

const rootReducer = combineReducers({
  search: searchReducer,
  top50Anime: top50AnimeReducer,
});

export default rootReducer;
