import React from "react";
import { directors } from "../data";

function Directors() {
  const movieDirectors = directors.map((director)=>{
    const movies = director.movies.map((movie)=><li key={movie}>{movie}</li>)
    return <div key={director.name}>
      <h2>Name: {director.name}</h2>
      <span>Movies:</span>
      <ul>
        {movies}
      </ul>
    </div>
  })
  return (
    <div>
      <h1>Directors Page</h1>
      {movieDirectors}
    </div>
  );
}

export default Directors;
