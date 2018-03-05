updateSearch, addMovie, movieInfo;

export function updateSearch(searchTerm) {
  return {
    type: 'UPDATE_SEARCH',
    payload: { searchTerm }
  };
}

export function addMovie(movie) {
  return {
    type: 'ADD_MOVIE',
    payload: movie
  };
}

export function movieInfo(movie) {
  return {
    type: 'MOVIE_INFO',
    payload: movie
  };
}
