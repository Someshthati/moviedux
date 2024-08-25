import "./styles.css";
import MovieCard from "./MovieCard";
import React from "react";

export default function Watchlist({ movies, toggleWatchlist, watchlistItems }) {
  return (
    <div className="watchlist">
      {watchlistItems.map((id) => {
        const movie = movies.find((movie) => movie.id === id);
        return (
          <MovieCard
            movie={movie}
            toggleWatchlist={toggleWatchlist}
            isWatchlisted={true}
            key={movie.id}
          />
        );
      })}
    </div>
  );
}
