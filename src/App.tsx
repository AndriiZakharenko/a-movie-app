import { useEffect, useState } from "react";
import "./App.css";
import { useDebounce } from "react-use";
import Header from "./sections/Header";
import TrendingMovies from "./components/TrendingMovies";
import MovieList from "./components/MovieList";
import { useMovies } from "./hooks/useMovies";

const App = () => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState("");

  const {
    movieList,
    trendingMovies,
    isLoading,
    errorMessage,
    fetchMovies,
    loadTrendingMovies,
  } = useMovies();

  useDebounce(() => setDebouncedSearchTerm(searchTerm), 500, [searchTerm]);

  useEffect(() => {
    fetchMovies(debouncedSearchTerm);
  }, [debouncedSearchTerm]);

  useEffect(() => {
    loadTrendingMovies();
  }, []);

  return (
    <main className="overflow-hidden">
      <div className="pattern" />

      <div className="wrapper">
        <Header searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

        {trendingMovies.length > 0 && (
          <TrendingMovies trendingMovies={trendingMovies} />
        )}

        <MovieList
          movieList={movieList}
          isLoading={isLoading}
          errorMessage={errorMessage}
        />
      </div>
    </main>
  );
};

export default App;
