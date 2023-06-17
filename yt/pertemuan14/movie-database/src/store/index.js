import { configureStore } from "@reduxjs/toolkit";
import moviesReducer from "../components/features/movieSlice";

const store = configureStore({
  reducer: {
    movies: moviesReducer,
  },
});

export default store;
