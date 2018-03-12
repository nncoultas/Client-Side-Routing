import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './index.css';
import MovieList from './Movies/MovieList';
import Movie from './Movies/Movie'

const MovieRoutes = () => {
  return (
    <Router>
      <div>
        <Route exact path = "/" component={ MovieList } />
        <Route exact path = "/movies/:id" component={ Movie } />
      </div>
    </Router>  
  )
}



ReactDOM.render(
  <div>
    <MovieRoutes />
  </div>,
  document.getElementById('root')
);
