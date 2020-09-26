import { combineReducers } from 'redux';
import userReducer from './userReducer';
import searchReducer from './searchReducer';
import top50AnimeReducer from './top50AnimeReducer';
import detailedAnimeReducer from './detailedAnimeReducer';

const rootReducer = combineReducers({
  user: userReducer,
  search: searchReducer,
  top50Anime: top50AnimeReducer,
  detailedAnime: detailedAnimeReducer,
});

export default rootReducer;
