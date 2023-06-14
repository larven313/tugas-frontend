import { useParams } from "react-router-dom";
import DetailMovie from "../../components/DetailMovie/DetailMovie";
import { useEffect, useState } from "react";
import axios from "axios";
import Movies from "../../components/Movies/Movies";
import ENDPOINTS from "../../components/utils/constants/endpoints";

function RecomMovie() {
  const params = useParams();
  const API_KEY = process.env.REACT_APP_API_KEY;
  const [movies, setMovies] = useState([]);

  async function fetchRecom() {
    const URL = `${ENDPOINTS.BASE_URL}/movie/${params.id}/recommendations?api_key=${API_KEY}`;
    const response = await axios(URL);

    setMovies(response.data.results);
  }

  useEffect(() => {
    fetchRecom();
  }, [params.id]);
  return (
    <Movies
      movies={movies}
      setMovies={setMovies}
      title="Recomendation Movies"
    />
  );
}

function Detail() {
  return (
    <div>
      <DetailMovie />
      <RecomMovie />
    </div>
  );
}
export default Detail;
