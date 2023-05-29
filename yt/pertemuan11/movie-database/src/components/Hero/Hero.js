import { useEffect, useState } from "react";
import Button from "../ui/Button/Button";
import StyledHero from "./Hero.styled";

function Hero() {
  const [movie, setMovie] = useState("");

  useEffect(() => {
    async function fetchMovie() {
      // lakukan fetching data di sini

      const url = "https://www.omdbapi.com/?apikey=fcf50ae6&i=tt2975590";
      const response = await fetch(url);
      const data = await response.json();

      setMovie(data);
      console.log(data);
    }

    fetchMovie();
  }, []);

  return (
    <StyledHero>
      <div className="container">
        <section className="hero">
          <div className="hero__left">
            <h2 className="hero__title">{movie.Title}</h2>
            <h3 className="hero__genre">Genre : {movie.Genre}</h3>
            <p className="hero__description">{movie.Plot}</p>
            <Button variant="success" size="lg">
              Watch
            </Button>
          </div>
          <div className="hero__right">
            <img src={movie.Poster} alt="" className="hero__image" />
          </div>
        </section>
      </div>
    </StyledHero>
  );
}

export default Hero;
