import AddMovieForm from "../../components/AddMovieForm/AddMovieForm";
import Footer from "../../components/Footer/Footer";
import Hero from "../../components/Hero/Hero";
import Navbar from "../../components/Navbar/Navbar";

function CreateMovie() {
  return (
    <div>
      <h2>Create movie</h2>
      <Hero />
      <AddMovieForm />
    </div>
  );
}
export default CreateMovie;
