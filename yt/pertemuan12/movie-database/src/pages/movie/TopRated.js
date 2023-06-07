import { useEffect, useState } from "react";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import Movies from "../../components/Movies/Movies";
import axios from "axios";

function TopRated() {
  const [movies, setMovies] = useState([]);

  const API_KEY = process.env.REACT_APP_API_KEY;
  const URL = `
  https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}`;

  const fetchTopRatedMovie = async () => {
    const response = await axios(URL);
    setMovies(response.data.results);
  };

  useEffect(() => {
    fetchTopRatedMovie();
  }, []);
  return (
    <div>
      <Movies movies={movies} setMovies={setMovies} title="Top Rated" />
    </div>
  );
}
export default TopRated;
