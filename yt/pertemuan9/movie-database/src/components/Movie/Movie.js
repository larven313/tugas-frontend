import styles from "./Movie.module.css";

// tangkap props
function Movie(props) {
    // Destructing object props
    const { movie } = props;
    return (
        <div className={styles.movie}>
        <img
          className={styles.movie__image}
          src={movie.poster}
          alt=""
        />
        <h3 className={styles.movie__title}>{movie.title}</h3>
        <p className={styles.movie__date}>{movie.year}</p>
        <p className={styles.movie__date}>{movie.genre}</p>
      </div>
    )
}

export default Movie;