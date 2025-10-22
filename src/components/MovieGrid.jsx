import React, { useState } from "react";
import movies from "../movies";

function MovieGrid() {
  const [hoveredMovie, setHoveredMovie] = useState(null);
  const [selectedMovie, setSelectedMovie] = useState(null);

  if (selectedMovie) {
    return (
      <div className="player-container" onClick={() => setSelectedMovie(null)}>
        <video
          className="player-video"
          src={selectedMovie.video}
          autoPlay
          controls
        />
        <button className="back-button" onClick={() => setSelectedMovie(null)}>
          Back
        </button>
      </div>
    );
  }

  return (
    <div className="movie-row">
      {movies.map((movie) => (
        <div
          key={movie.id}
          className="movie-card"
          onMouseEnter={() => setHoveredMovie(movie.id)}
          onMouseLeave={() => setHoveredMovie(null)}
          onClick={() => setSelectedMovie(movie)}
        >
          {hoveredMovie === movie.id ? (
            <video src={movie.video} autoPlay muted loop />
          ) : (
            <img src={movie.poster} alt={movie.title} />
          )}
          <div className="movie-info">
            <h4>{movie.title}</h4>
          </div>
        </div>
      ))}
    </div>
  );
}

export default MovieGrid;
