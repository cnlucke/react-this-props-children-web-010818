import React from 'react'
import ReactDOM from 'react-dom';
import Movie from './Movie'
import MovieBrowser from './MovieBrowser'

ReactDOM.render(
  <MovieBrowser>
    <Movie title="Mad Max: Fury Road" />
    <Movie title="Harry Potter and The Goblet Of Fire" />
  </MovieBrowser>,
  document.getElementById('root'));
