//

import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import MovieCard from "./components/MovieCard";

const SearchMovies = () => {
  const { movieName } = useParams();
  const [searchMovie, setSearchMovie] = useState([]);
  const searchMovieQuery = useQuery({
    queryKey: ["searchMovie"],
    queryFn: getSearchMovies,
    retry: false,
  });
  async function getSearchMovies() {
    console.log(movieName);
    const response = await axios.get(
      `https://api.themoviedb.org/3/search/movie?api_key=a4a700dd2dc6d2f0058026af59d9dfe9&query=${movieName}`
    );
    setSearchMovie(response.data);
    return response.data;
  }
  useEffect(() => {
    getSearchMovies();
  }, [movieName]);
  if (searchMovieQuery.isLoading) return <h1>Loading...</h1>;
  if (searchMovieQuery.isError)
    return <pre>{JSON.stringify(searchMovieQuery.error)}</pre>;

  return (
    <div className="movies">
      <div className="title">
        <h1>Searched Movies</h1>
      </div>
      <div className="movies--grid">
        {searchMovie.length > 0 || searchMovie.results?.length ? (
          searchMovie.results.map((movie) => {
            const releaseYear = new Date(movie.release_date);
            return (
              <MovieCard
                key={movie.id}
                id={movie.id}
                imageUrl={movie.backdrop_path ?? movie.poster_path}
                releaseYear={releaseYear.getFullYear()}
                rating={movie.vote_average}
                movieTitle={movie.title}
                adult={movie.adult}
                language={movie.original_language}
              />
            );
          })
        ) : (
          <h1 className="loading">Loading...</h1>
        )}
      </div>
    </div>
  );
};
export default SearchMovies;
