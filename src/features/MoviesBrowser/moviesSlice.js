import { createSlice } from "@reduxjs/toolkit";
import { getDataFromLocalStorage } from "./dataInLocalStorage";

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    movieId: getDataFromLocalStorage("movieId") ?? null,
  },
  reducers: {
    setMovieId: (state, { payload: id }) => {
      state.movieId = id;
    },
  },
});

const selectMovies = (state) => state.movies;

export const selectMovieId = (state) => selectMovies(state).movieId;
export const { setMovieId } = moviesSlice.actions;
export default moviesSlice.reducer;
