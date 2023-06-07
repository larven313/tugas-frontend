import { useState } from "react";
import { useEffect } from "react";
import Movies from "../../components/Movies/Movies";
import axios from "axios";

function Popular() {
  const [movies, setMovies] = useState([]);

  const API_KEY = process.env.REACT_APP_API_KEY;
  const URL = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`;

  const fetchPopularMovies = async () => {
    const response = await axios(URL);
    setMovies(response.data.results);
  };

  useEffect(function () {
    fetchPopularMovies();
  }, []);
  return (
    <div>
      <Movies movies={movies} setMovies={setMovies} title="Popular Movies" />
    </div>
  );
}
export default Popular;
