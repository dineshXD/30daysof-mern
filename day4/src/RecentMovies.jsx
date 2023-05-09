import { useEffect, useState } from "react";
import { useQuery, useMutation } from "@tanstack/react-query";
import MovieCard from "./components/MovieCard";
import axios from "axios";
import { useOutletContext } from "react-router-dom";

const RecentMovies = () => {
  const [movies, setMovies] = useState([]);
  const [genre, isActivated] = useOutletContext();
  const movieQuery = useQuery({
    queryKey: ["movies"],
    queryFn: getMovies,
    retry: false,
  });
  async function getMovies() {
    console.log(genre);
    const response = await axios.get(
      JSON.parse(localStorage.getItem("activatedButton")) === 1
        ? `https://api.themoviedb.org/3/discover/movie?api_key=a4a700dd2dc6d2f0058026af59d9dfe9&with_genres=${genre}`
        : `https://api.themoviedb.org/3/movie/top_rated?api_key=a4a700dd2dc6d2f0058026af59d9dfe9`
    );
    setMovies(response.data);
    return response.data;
  }
  useEffect(() => {
    getMovies();
  }, [genre * 1]);
  useEffect(() => {
    getMovies();
  }, [isActivated]);
  if (movieQuery.isLoading) return <h1>Loading....</h1>;
  if (movieQuery.isError) return <pre>{JSON.stringify(movieQuery.error)}</pre>;
  return (
    <div className="movies">
      <div className="title">
        <h1>Recent Movies</h1>
      </div>
      <div className="movies--grid">
        {movies.length > 0 || movies.results?.length ? (
          movies.results.map((movie) => {
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
export default RecentMovies;
