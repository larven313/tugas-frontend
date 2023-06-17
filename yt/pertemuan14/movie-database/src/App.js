import { Route, Routes } from "react-router-dom";
import Counter from "./components/Counter/Counter";
import Home from "./pages/Home";
import CreateMovie from "./pages/movie/Create";
import TopRated from "./pages/movie/TopRated";
import NowPlaying from "./pages/movie/NowPlaying";
import Popular from "./pages/movie/Popular";
import Layout from "./Layout";
import { ThemeProvider } from "styled-components";
import theme from "./components/utils/constants/theme";
import Detail from "./pages/movie/Details";
import { useState } from "react";
import data from "./components/utils/constants/data";

function App() {
  /**
   * Menmapilkan Halaman home.
   * Tag div bisa diganti <>.
   * Tag <> adalah React fragment
   */
  const [movies, setMovies] = useState(data);
  return (
    <div>
      <ThemeProvider theme={theme}>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/movie/create"
              element={<CreateMovie movies={movies} setMovies={setMovies} />}
            />
            <Route path="/movie/popular" element={<Popular />} />
            <Route path="/movie/now" element={<NowPlaying />} />
            <Route path="/movie/top" element={<TopRated />} />
            <Route path="/movie/:id" element={<Detail />}></Route>
            <Route path="*" element={<h2>Halaman 404</h2>} />
          </Routes>
        </Layout>
      </ThemeProvider>
    </div>
  );
}

export default App;
