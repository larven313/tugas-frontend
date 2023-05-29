// import styles from "./Movie.module.css";
import StyledMovie from "./Movie.styled";

// tangkap props
function Movie(props) {
  // Destructing object props
  const { movie } = props;
  return (
    <StyledMovie>
      <img src={movie.poster} alt="poster" />
      <h3>{movie.title}</h3>
      <p>{movie.year}</p>
      <p>{movie.genre}</p>
    </StyledMovie>
  );
}

export default Movie;
