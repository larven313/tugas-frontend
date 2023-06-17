import { createSlice } from "@reduxjs/toolkit";
import data from "../../utils/constants/data";

// Buat Slice
const movieSlice = createSlice({
  name: "Movie Slice",
  initialState: {
    movies: data,
  },
  reducers: {
    addMovies(state, action) {
      state.movies.push(action.payload);
    },
  },
});

// Generate Actions dan Reducer
const { addMovies } = movieSlice.actions;
const moviesReducer = movieSlice.reducer;

export { addMovies };
export default moviesReducer;
