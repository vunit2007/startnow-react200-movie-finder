const defaultState = {
  movieList: [],
  movieInfo: {},
  searchTerm: ''
};

export default function MovieSearchReducer(state = defaultState, action) {
  const { type, payload } = action;

  switch (type) {
    case 'UPDATE_SEARCH': {
      return {
        ...state,
        searchTerm: payload.searchTerm
      };
    }
    case 'ADD_MOVIE': {
      return {
        ...state,
        movieList: payload
      };
    }
    case 'MOVIE_INFO': {
      return {
        ...state,
        movieInfo: payload
      };
    }
    default: {
      return state;
    }
  }
}
