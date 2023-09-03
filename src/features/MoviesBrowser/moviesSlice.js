import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    movieId: null,
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
