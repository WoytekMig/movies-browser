import { createSlice } from "@reduxjs/toolkit";
import { getDataFromLocalStorage } from "./dataInLocalStorage";

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    movieId: getDataFromLocalStorage("movieId") ?? null,
    personId: getDataFromLocalStorage("personId") ?? null,
  },
  reducers: {
    setMovieId: (state, { payload: movieId }) => {
      state.movieId = movieId;
    },
    setPersonId: (state, { payload: personId }) => {
      state.personId = personId;
    },
  },
});

const selectMovies = (state) => state.movies;

export const selectMovieId = (state) => selectMovies(state).movieId;
export const selectPersonId = (state) => selectMovies(state).personId;

export const { setMovieId, setPersonId } = moviesSlice.actions;

export default moviesSlice.reducer;
