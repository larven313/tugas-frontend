// membuat variable api key
const API_KEY = process.env.REACT_APP_API_KEY;

// membuat variable URL API: BASE_URL:
const BASE_URL = "https://api.themoviedb.org/3";
// membuat variable endpoints (object)
const ENDPOINTS = {
  POPULAR: `${BASE_URL}/movie/popular?api_key=${API_KEY}`,
  NOW_PLAYING: `${BASE_URL}/movie/now_playing?api_key=${API_KEY}`,
  TOP_RATED: `${BASE_URL}/movie/top_rated?api_key=${API_KEY}`,
  HERO: `${BASE_URL}/trending/movie/day?api_key=${API_KEY}`,
  BASE_URL: BASE_URL,
  //   DETAIL_MOVIE: `${BASE_URL}//movie/${id}?api_key=${API_KEY}&append_to_response=videos`,

  //   DETAIL: `${BASE_URL}/movie/${params.id}/recommendations?api_key=${API_KEY}`,
};

export default ENDPOINTS;
