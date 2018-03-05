import { combineReducers } from 'redux';
import MovieSearchReducer from './containers/Search/MovieSearchReducer';

const reducers = combineReducers({
  movieSearch: MovieSearchReducer
});

export default reducers;