import React from 'react';

function MovieDescription(props) {
  return (
    <>
      <h2>View your searched movie here</h2>
      {props.movies.map((movie) => (

      <div>
        <img src = {movie.Poster} alt="movie"></img>
        <div>{movie.Year}</div>
        <div>{movie.Plot}</div>

      </div>

      ))}
    </>
  );
};

export default MovieDescription;

