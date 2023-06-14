import { useEffect, useState } from "react";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import Movies from "../../components/Movies/Movies";
import axios from "axios";
import ENDPOINTS from "../../components/utils/constants/endpoints";

function TopRated() {
  const [movies, setMovies] = useState([]);

  const fetchTopRatedMovie = async () => {
    const response = await axios(ENDPOINTS.TOP_RATED);
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
