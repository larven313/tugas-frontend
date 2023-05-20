import { Route, Routes } from "react-router-dom";
import Counter from "./components/Counter/Counter";
import Home from "./pages/Home";
import CreateMovie from "./pages/movie/Create";
import TopRated from "./pages/movie/TopRated";
import NowPlaying from "./pages/movie/NowPlaying";
import Popular from "./pages/movie/Popular";
import Layout from "./Layout";

function App() {
  /**
   * Menmapilkan Halaman home.
   * Tag div bisa diganti <>.
   * Tag <> adalah React fragment
   */
  return (
    <div>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movie/create" element={<CreateMovie />} />
          <Route path="/movie/popular" element={<Popular />} />
          <Route path="/movie/now" element={<NowPlaying />} />
          <Route path="/movie/top" element={<TopRated />} />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
