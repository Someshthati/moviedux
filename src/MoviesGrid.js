import { React, useState, useEffect } from "react";
import MovieCard from "./MovieCard";

export default function MoviesGrid({
  movies,
  toggleWatchlist,
  watchlistItems,
}) {
  const [searchTerm, setSearchTerm] = useState("");

  const searchTermChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div>
      <input
        type="text"
        className="search-input"
        value={searchTerm}
        onChange={searchTermChange}
      />
      <div className="movies-grid">
        {movies.map((movie) => (
          <MovieCard
            movie={movie}
            key={movie.id}
            toggleWatchlist={toggleWatchlist}
            isWatchlisted={watchlistItems.includes(movie.id)}
          ></MovieCard>
        ))}
      </div>
    </div>
  );
}
