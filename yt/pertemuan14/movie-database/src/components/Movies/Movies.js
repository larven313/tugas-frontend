import Movie from "../Movie/Movie";
import styles from "./Movies.module.css";
import data from "../utils/constants/data";
import { useState } from "react";
import { nanoid } from "nanoid";
import { useSelector } from "react-redux";

function Movies(props) {
  // destructing props
  const { title } = props;

  const movies = useSelector((state) => state.movies.movies);

  return (
    <div className={styles.container}>
      <section className={styles.movies}>
        <h2 className={styles.movies__title}>
          {title ? title : "Latest Movies"}
        </h2>
        <div className={styles.movie__container}>
          {/**
           * looping data movies : map.
           * Render Component Movie
           * Kirim props movie
           */}
          {movies.map(function (movie) {
            return <Movie key={movie.id} movie={movie} />;
          })}
        </div>
      </section>
    </div>
  );
}

export default Movies;
