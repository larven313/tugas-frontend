import { useEffect, useState } from "react";
import Movies from "../../components/Movies/Movies";
import axios from "axios";
import ENDPOINTS from "../../components/utils/constants/endpoints";

function NowPlaying() {
  const [movies, setMovies] = useState([]);

  const fetchNowPlaying = async () => {
    const response = await axios(ENDPOINTS.NOW_PLAYING);
    setMovies(response.data.results);
  };

  useEffect(() => {
    fetchNowPlaying();
  }, []);
  return (
    <div>
      <Movies movies={movies} setMovies={setMovies} title="Now Playing" />
    </div>
  );
}
export default NowPlaying;
