import { useEffect, useState } from "react";
import Movies from "../../components/Movies/Movies";
import axios from "axios";

function NowPlaying() {
  const [movies, setMovies] = useState([]);

  const API_KEY = process.env.REACT_APP_API_KEY;
  const URL = `
  https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}`;

  const fetchNowPlaying = async () => {
    const response = await axios(URL);
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
