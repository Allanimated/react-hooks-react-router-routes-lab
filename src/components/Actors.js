import React from "react";
import { actors } from "../data";

function Actors() {
  const movieActors = actors.map((actor) => {
    const featuredMovies = actor.movies.map((movie)=> <li key={movie}>{movie}</li>)
    return <div key={actor.name}>
      <h2>Name: {actor.name}</h2>
      <span>Movies:</span>
      <ul>{featuredMovies}</ul>
    </div>
  })
  return (<div>
    <h1>Actors Page</h1>
    {movieActors}
    </div>
  );
}

export default Actors;
