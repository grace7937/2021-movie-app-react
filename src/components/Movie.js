import React from 'react';
// import PropTypes from 'prop-types';
import './Movie.css';
import {Link} from 'react-router-dom';

function Movie({ year, title, summary, poster, genres }) {
  return (
    <Link
    to={{
      pathname:'/movie-detail',
      state: {
        year,
        title,
        summary,
        genres
      }
    }}
    >
      
    <div className='movie'>
      <img src={poster} alt={title} title={title} />
      <div className='movie__data'>
        <h3 className='movie__title'>{title}</h3>
        <h5 className='movie__year'>{year}</h5>
        <ul className='genres'>
          {genres.map((genre, index) => (
              <li key={index} className='genres__genre'>{genre}</li>
              ))}
        </ul>
              <p className='movie__summary'>{summary.slice(0,180)}...</p>
      </div>
    </div>
    </Link>
  );
}

export default Movie;
