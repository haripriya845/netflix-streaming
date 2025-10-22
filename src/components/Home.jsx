import React, { useState, useEffect } from "react";
import movies from "../movies";
import "./Home.css";
import MovieGrid from "./MovieGrid";

function Home() {
  const [banner, setBanner] = useState(null);
  const [selectedMovie, setSelectedMovie] = useState(null); 

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * movies.length);
    setBanner(movies[randomIndex]);
  }, []);

  if (!banner) return null;

  if (selectedMovie) {
    return (
      <div className="player-container">
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
    <div>
      <h1 className="netflix-head">NETFLIX</h1>
      <header
        className="banner"
        style={{ backgroundImage: `url(${banner.banner})` }}
      >
        <div className="banner-contents">
          <h3 className="banner-title">{banner.title}</h3>
          <p className="banner-description">{banner.description}</p>
          <div className="banner-buttons">
            <button
              className="banner-btn play"
              onClick={() => setSelectedMovie(banner)}
            >
              Play
            </button>
            <button className="banner-btn list">My List</button>
          </div>
        </div>
        <div className="banner-fade"></div>
      </header>

      <MovieGrid />
    </div>
  );
}

export default Home;
