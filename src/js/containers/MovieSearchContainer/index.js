import { connect } from 'react-redux';
import MovieSearch from './MovieSearch';

function mapStoreToProps(store) {
  return {
    searchTerm: store.movieSearch.searchTerm,
    movieList: store.movieSearch.movieList
  };
}

export default connect(mapStoreToProps)(MovieSearch);
