import AddMovieForm from "../components/AddMovieForm/AddMovieForm";
import Footer from "../components/Footer/Footer";
import Hero from "../components/Hero/Hero";
import Movies from "../components/Movies/Movies";
import Navbar from "../components/Navbar/Navbar";
import { useState } from "react";
import data from "../components/utils/constants/data";
import Counter from "../components/Counter";

function Home() {
  const [movies, setMovies] = useState(data);

  return (
    <div>
      <Hero />
      <Movies movies={movies} setMovies={setMovies} />
      <AddMovieForm movies={movies} setMovies={setMovies} />
    </div>
  );
  // return <Counter />;
}

export default Home;
