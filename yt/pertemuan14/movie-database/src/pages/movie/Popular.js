import { useState } from "react";
import { useEffect } from "react";
import Movies from "../../components/Movies/Movies";
import axios from "axios";
import ENDPOINTS from "../../components/utils/constants/endpoints";
import { updateMovies } from "../../components/features/movieSlice";
import { useDispatch } from "react-redux";

function Popular() {
  const [movies, setMovies] = useState([]);
  const dispatch = useDispatch();

  const fetchPopularMovies = async () => {
    const response = await axios(ENDPOINTS.POPULAR);
    setMovies(response.data.results);
  };

  useEffect(function () {
    fetchPopularMovies();
  }, []);

  async function getPopularMovies() {
    const response = await axios(ENDPOINTS.POPULAR);
    const movies = response.data.results;

    dispatch(updateMovies(movies));
  }
  return (
    <div>
      <Movies movies={movies} setMovies={setMovies} title="Popular Movies" />
    </div>
  );
}
export default Popular;
