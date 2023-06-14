import { useEffect, useState } from "react";
import Button from "../ui/Button/Button";
import StyledHero from "./Hero.styled";
import axios from "axios";
import ENDPOINTS from "../../components/utils/constants/endpoints";

function Hero() {
  const [movie, setMovie] = useState("");
  const API_KEY = process.env.REACT_APP_API_KEY;
  const genres = movie && movie.genres.map((genre) => genre.name).join(", ");
  const idTrailer = movie && movie.videos.results[0].key;

  // fetch trendingMovie
  const fetchTrendingMovie = async () => {
    const response = await axios(ENDPOINTS.HERO);

    console.log("response", response);

    return response.data.results[0];
  };

  const getDetailMovie = async () => {
    const trendingMovie = await fetchTrendingMovie();
    const id = trendingMovie.id;

    const URL = `${ENDPOINTS.BASE_URL}/movie/${id}?api_key=${API_KEY}&append_to_response=videos`;
    const response = await axios(URL);

    setMovie(response.data);
  };

  useEffect(() => {
    getDetailMovie();
  }, []);

  return (
    <StyledHero>
      <div className="container">
        <section className="hero">
          <div className="hero__left">
            <h2 className="hero__title">{movie.title}</h2>
            <h3 className="hero__genre">Genre : {genres}</h3>

            <p className="hero__description">{movie.overview}</p>
            <Button
              variant="success"
              size="lg"
              as="a"
              href={`https://www.youtube.com/watch?v=${idTrailer}`}
            >
              Watch
            </Button>
          </div>
          <div className="hero__right">
            <img
              src={
                movie.Poster ||
                `https://image.tmdb.org/t/p/w300/${movie.poster_path}`
              }
              alt=""
              className="hero__image"
            />
          </div>
        </section>
      </div>
    </StyledHero>
  );
}

export default Hero;
