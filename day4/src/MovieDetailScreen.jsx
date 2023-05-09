import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useState } from "react";
import { useParams } from "react-router-dom";
const MovieDetailScreen = () => {
  const { id } = useParams();
  const [movieDetail, setMovieDetails] = useState([]);
  const movieDetailQuery = useQuery({
    queryKey: ["movieDetails"],
    queryFn: fetchMovieDetails,
    retry: false,
  });
  async function fetchMovieDetails() {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/${id}?api_key=a4a700dd2dc6d2f0058026af59d9dfe9&append_to_response=videos,images`
    );
    setMovieDetails(response.data);
    return response.data;
  }

  if (movieDetailQuery.isLoading) return <h1>Loading...</h1>;
  if (movieDetailQuery.isError)
    return <pre>{JSON.stringify(movieDetailQuery.error)}</pre>;
  const releaseYear = new Date(movieDetail.release_date);
  const budget = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    //   minimumFractionDigits: 2,
  });
  return (
    <div className="details">
      <div className="movie--details">
        <div className="movie--image">
          <img
            src={`https://image.tmdb.org/t/p/w500${movieDetail.poster_path}`}
            alt={movieDetail.original_title}
          />
        </div>
        <div className="movie--info">
          <p className="movie--title">{movieDetail.original_title}</p>
          <div className="tags movie--genres">
            {movieDetail.genres?.map((g) => {
              return <span>{g.name}</span>;
            })}
          </div>
          <div className="tags">
            <span>Release Year = {releaseYear.getFullYear()}</span>
            <span>Rating = {movieDetail.vote_average}</span>
            <span>Budget = {budget.format(movieDetail.budget)} </span>
          </div>
          <div className="movie--storyline">
            <h1 className="summary">Summary:- </h1>
            <p>{movieDetail.overview}</p>
          </div>
        </div>
      </div>
      <div className="trailer--list">
        <div className="trailers">
          <h1>Trailers:</h1>
          {movieDetail.videos?.results.map((trailer, index) => {
            if (trailer.type.toLowerCase() === "trailer") {
              return (
                <iframe
                  src={`https://www.youtube.com/embed/${movieDetail.videos.results[index].key}`}
                  style={{
                    width: "100%",
                    minHeight: "20rem",
                    margin: "1rem 0px",
                  }}
                ></iframe>
              );
            } else {
              return (
                <iframe
                  src={`https://www.youtube.com/embed/${movieDetail.videos.results[0].key}`}
                  style={{
                    width: "100%",
                    minHeight: "20rem",
                    margin: "1rem 0px",
                  }}
                ></iframe>
              );
            }
          })}
        </div>
      </div>
    </div>
  );
};
export default MovieDetailScreen;
