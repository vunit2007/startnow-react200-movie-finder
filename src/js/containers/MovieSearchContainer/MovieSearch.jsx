import React from 'react';
import { Link } from 'react-router-dom';
import { updateSearch, addMovie, movieInfo } from './MovieSearchActions';

const axios = require('axios');

class MovieSearch extends React.Component {
  constructor(props) {
    super(props);

    this.handleSearch = this.handleSearch.bind(this);
    this.getMovies = this.getMovies.bind(this);
    this.selectMovie = this.selectMovie.bind(this);
  }
  handleSearch(e) {
    const { dispatch } = this.props;
    const { value } = e.target;
    dispatch(updateSearch(value));
  }
  getMovies() {
    const { dispatch, searchTerm } = this.props;
    const url = `https://www.omdbapi.com/?s=${searchTerm}&apikey=5bb8710f&type=movie`;

    axios
      .get(url)
      .then((result) => {
        const list = result.data;

        if (list.Response === 'True') {
          dispatch(addMovie(list.Search));
        } else {
          alert('No Search Results');
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }
  selectMovie(e) {
    const { dispatch } = this.props;

    const url = `https://www.omdbapi.com/?i=${e.target.id}&apikey=5bb8710f`;

    axios
      .get(url)
      .then((result) => {
        const movie = result.data;
        console.log(movie);
        dispatch(movieInfo(movie));
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    const { searchTerm, movieList } = this.props;
    return (
      <div className='container'>
        <h1 className='text-center'>Movie Finder</h1>
        <div className='input-group'>
          <input
            type='text'
            className='form-control'
            placeholder='Search Movie...'
            value={ searchTerm }
            onChange={ this.handleSearch }
          />
          <div className='input-group-btn'>
            <button className='btn btn-secondary' type='button' onClick={ this.getMovies }>
              Go!
            </button>
          </div>
        </div>
        <div className='row mx-0'>
          {movieList.map(movie => (
            <div key={ movie.imdbID } className='col-4 card border-secondary px-0'>
              {movie.Poster === 'N/A' ? (
                <img
                  className='card-img-top'
                  style={ height }
                  src='https://d32qys9a6wm9no.cloudfront.net/images/movies/poster/500x735.png'
                  alt='placeholder'
                />
              ) : (
                <img className='card-img-top' src={ movie.Poster } alt='placeholder' />
              )}
              <div className='card-body text-center'>
                <div>
                  <h6>{movie.Title}</h6>
                  <p>{movie.Year}</p>
                </div>
                <hr />
                <a href={ `/#/movie/${movie.imdbID}` }>
                  <button
                    id={ movie.imdbID }
                    onClick={this.selectMovie }
                    className='btn btn-primary'
                  >
                    More Information
                  </button>
                </a>
              </div>
            </div>
          ))}
        </div>
        <div />
      </div>
    );
  }
}

export default MovieSearch;
