import MovieCard from "./MovieCard";
import Spinner from "./Spinner";

interface Movie {
  id: number;
  title: string;
  vote_average: number;
  poster_path: string | null;
  release_date: string;
  original_language: string;
}

interface MovieListProps {
  movieList: Movie[];
  isLoading: boolean;
  errorMessage: string;
}

const MovieList: React.FC<MovieListProps> = ({
  movieList,
  isLoading,
  errorMessage,
}) => {
  return (
    <section className="all-movies">
      <h2>All Movies</h2>

      {isLoading ? (
        <Spinner />
      ) : errorMessage ? (
        <p className="text-red-500">{errorMessage}</p>
      ) : (
        <ul>
          {movieList.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </ul>
      )}
    </section>
  );
};

export default MovieList;
