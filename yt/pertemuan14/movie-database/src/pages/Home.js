import AddMovieForm from "../components/AddMovieForm/AddMovieForm";
import Footer from "../components/Footer/Footer";
import Hero from "../components/Hero/Hero";
import Movies from "../components/Movies/Movies";
import Navbar from "../components/Navbar/Navbar";
import { useState } from "react";
import data from "../components/utils/constants/data";
import Counter from "../components/Counter";

function Main() {
  const [movies, setMovies] = useState(data);
  return (
    <div>
      <Hero />
      <Movies movies={movies} title="Latest Movies" />
    </div>
  );
}

function Home(props) {
  const { movies } = props;

  return (
    <>
      <Main movies={movies} />
    </>
  );
  // return <Counter />;
}

export default Home;
