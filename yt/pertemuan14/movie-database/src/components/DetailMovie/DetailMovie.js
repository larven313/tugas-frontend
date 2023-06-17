import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Button from "../ui/Button/Button";
import StyledDetailMovie from "./StyledDetailMovie";
import ENDPOINTS from "../utils/constants/endpoints";

function DetailMovie() {
  const API_KEY = process.env.REACT_APP_API_KEY;
  const params = useParams();
  const [movie, setMovie] = useState("");

  async function fetchDetailMovie() {
    // Lakukan fetch detail movie
    const URL = `
    ${ENDPOINTS.BASE_URL}/movie/${params.id}?api_key=${API_KEY}&append_to_response=videos`;
    const response = await axios(URL);

    setMovie(response.data);
  }

  useEffect(() => {
    fetchDetailMovie();
  }, [params.id]);

  const genres = movie && movie.genres.map((genre) => genre.name).join(", ");
  const trailer =
    movie && `https://youtube.com/watch?v=${movie.videos.results[0].key}`;
  return (
    <StyledDetailMovie>
      <h2>{movie.title}</h2>
      <h3>{genres}</h3>
      <img
        src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`}
        alt=""
      />
      <p>{movie.overview}</p>
      <Button as="a" href={trailer}>
        Watch
      </Button>
    </StyledDetailMovie>
  );
}

export default DetailMovie;
