import { configureStore } from "@reduxjs/toolkit";
import moviesReducer from "./features/MoviesBrowser/moviesSlice";

export default configureStore({
  reducer: {
    movies: moviesReducer,
  },
});
