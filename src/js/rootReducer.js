import { combineReducers } from 'redux';
import MovieDetailReducer from './containers/Detail/movieDetailReducer';
import MovieSearchReducer from './containers/Search/movieSearchReducer';

const rootReducer = combineReducers({
  movieDetail: MovieDetailReducer,
  movieSearch: MovieSearchReducer
});

export default rootReducer;
