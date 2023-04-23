import Footer from "../components/Footer";
import Cards from "../components/Cards";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Provinces from "../components/Provinces";
import AddCaseForm from "../components/AddCaseForm";
import { useState } from "react";
import data from "./../utils/constants/indonesia";
import data2 from "./../utils/constants/provinces";

function Main() {
  return (
    <main>
      <Hero />
    </main>
  );
}

function Home() {
  const [cards, setCards] = useState(data.indonesia);
  const [provinces, setProvinces] = useState(data2.provinces);

  return (
    <div>
      <Navbar />
      <Main />
      <Cards cards={cards} />
      <Provinces provinces={provinces} />
      <AddCaseForm provinces={provinces} setProvinces={setProvinces} />
      <Footer />
    </div>
  );
}

export default Home;
