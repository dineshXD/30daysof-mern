import { useState } from "react";
import { useNavigate } from "react-router-dom";

const MovieCard = ({
  imageUrl,
  releaseYear,
  rating,
  movieTitle,
  adult,
  language,
  id,
}) => {
  const [movieId, setMovieId] = useState(0);
  const navigate = useNavigate();
  function handleMovieId() {
    setMovieId(id);
    navigate(`/${id}`);
  }
  return (
    <div className="movie--card" onClick={handleMovieId}>
      <div className="card">
        <img
          src={`https://image.tmdb.org/t/p/w500${imageUrl}`}
          alt={movieTitle}
        />
        <div className="card--details">
          <div className="tags">
            <span>{releaseYear}</span>
            <span>{rating}</span>
            {adult ? <span>18+</span> : ""}
            <span>{language}</span>
          </div>
          <h5 className="card--title">{movieTitle}</h5>
        </div>
      </div>
    </div>
  );
};
export default MovieCard;
