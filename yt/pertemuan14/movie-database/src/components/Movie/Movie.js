// import styles from "./Movie.module.css";
import { Link } from "react-router-dom";
import StyledMovie from "./Movie.styled";

// tangkap props
function Movie(props) {
  // Destructing object props
  const { movie } = props;
  return (
    <StyledMovie>
      <img
        src={
          movie.poster || `https://image.tmdb.org/t/p/w300/${movie.poster_path}`
        }
        alt={movie.title}
      />
      <Link to={`/movie/${movie.id}`}>
        <h3>{movie.title}</h3>
      </Link>
      <p>{movie.year || movie.release_date}</p>
      <p>{movie.genre}</p>
    </StyledMovie>
  );
}

export default Movie;
