import logo from "./logo.svg";
import "./App.css";
import "./styles.css";
import { useState } from "react";
import { useEffect } from "react";
import MoviesGrid from "./MoviesGrid";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Watchlist from "./Watchlist";

function App() {
  const [movies, setMovies] = useState([]);
  const [watchlistItems, setWatchlist] = useState([]);

  const moviesArray = () =>
    fetch("movies.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then(function (response) {
        console.log(response);
        return response.json();
      })
      .then((data) => setMovies(data));

  useEffect(() => {
    moviesArray();
  }, []);

  const toggleWatchlist = (movieId) => {
    setWatchlist((prev) =>
      prev.includes(movieId)
        ? prev.filter((id) => id !== movieId)
        : [...prev, movieId]
    );
  };

  return (
    <div className="container">
      <header className="header">
        <h1>Welcome to Moviedux</h1>
      </header>
      <div>
        <Router>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>

              <li>
                <Link to="/watchlist">Watchlist</Link>
              </li>
            </ul>
          </nav>

          <Routes>
            <Route
              path="/"
              element={
                <MoviesGrid
                  movies={movies}
                  toggleWatchlist={toggleWatchlist}
                  watchlistItems={watchlistItems}
                ></MoviesGrid>
              }
            ></Route>
            <Route
              path="/watchlist"
              element={
                <Watchlist
                  movies={movies}
                  toggleWatchlist={toggleWatchlist}
                  watchlistItems={watchlistItems}
                ></Watchlist>
              }
            ></Route>
          </Routes>
        </Router>
      </div>
      <footer className="footer">
        <p>Footer content</p>
      </footer>
    </div>
  );
}

export default App;
