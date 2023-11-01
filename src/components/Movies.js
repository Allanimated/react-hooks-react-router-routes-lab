import React from "react";
import { movies } from "../data";

function Movies() {
  const films = movies.map((movie) => {
    const genres = movie.genres.map((genre)=> <li key={genre}>{genre}</li>)
    return <div key={movie.title}>
      <h2>Name: {movie.title}</h2>
      <p>Time: {movie.time}</p>
      <span>Genres:</span>
      <ul>
        {genres}
      </ul>
    </div>
  })
  return (
    <div>
      <h1>Movies Page</h1>
      {films}
    </div>
  )
}

export default Movies;
