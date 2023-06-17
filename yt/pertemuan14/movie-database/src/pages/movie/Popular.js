import { useState } from "react";
import { useEffect } from "react";
import Movies from "../../components/Movies/Movies";
import axios from "axios";
import ENDPOINTS from "../../components/utils/constants/endpoints";

function Popular() {
  const [movies, setMovies] = useState([]);

  const fetchPopularMovies = async () => {
    const response = await axios(ENDPOINTS.POPULAR);
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
