import React, { Component } from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';

import MovieSearch from './containers/Search/index';
import MovieDetail from './containers/Detail/index';
export default class App extends Component {
  render() {
    return (
      <Router>
        <div className='container'>
          <Route exact path='/' component={ MovieSearch } />
          <Route path='/movie/:id' component={ MovieDetail } />
        </div>
      </Router>
    );
  }
}
