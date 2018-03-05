import { combineReducers } from 'redux';
import MovieSearchReducer from './containers/MovieSearchContainer/MovieSearchReducer';

const reducers = combineReducers({
  movieSearch: MovieSearchReducer
});

export default reducers;