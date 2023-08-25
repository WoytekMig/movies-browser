import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: "movie",
  initialState: {
    moviesData: [],
    reducers: {
      setMoviesData: (state, { payload: movies }) => {
        state.moviesData = movies;
      },

      fetchMoviesData: () => {},
    },
  },
});

export const selectMovies = (state) => state.moviesData;

export const { setMoviesData, fetchMoviesData } = moviesSlice.actions;
export default moviesSlice.reducer;
