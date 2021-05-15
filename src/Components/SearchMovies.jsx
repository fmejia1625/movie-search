import React, { useState, useEffect } from 'react';
import MovieDescription from './MovieDescription';
import SearchBox from './SearchBox';

function SearchMovies() {
  const [movies, setMovies] = useState([]);
  // Create state object to handle search
  const [searchValue, setSearchValue] = useState('')
  
  const getMovieRequest = async (searchValue) => {
    const movieUrl = `http://www.omdbapi.com/?s=${searchValue}&?i=&apikey=f54e19ec`;
    // const movieUrl = `http://www.omdbapi.com/?i=tt3896198&apikey=f54e19ec`;


    const response = await fetch(movieUrl);
    const responseJson = await response.json();

    if(responseJson.Search) {
      console.log(responseJson)
      setMovies(responseJson.Search);
    }
  };

  useEffect (()=> {
    getMovieRequest(searchValue);
  },[searchValue]);

  return (
    <div>
      <h1>Search for the movie you want here</h1>
      <div className="row">
        <SearchBox searchValue = {searchValue} setSearchValue = {setSearchValue} />
      </div>
      <div className="container">
        <MovieDescription movies = {movies} />
      </div>
    </div>
  );
}

export default SearchMovies;

// const url = `http://www.omdbapi.com/?i=tt3896198&apikey=${apiKey}&t=${result}`;