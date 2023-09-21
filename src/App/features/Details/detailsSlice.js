import { createSlice } from "@reduxjs/toolkit";

const detailsSlice = createSlice({
  name: "details",
  initialState: {
    movieData: {
      id: null,
      data: { movie: [], credits: [], status: "loading" },
    },
    personData: {
      id: null,
      data: { person: [], credits: [], status: "loading" },
    },
  },
  reducers: {
    fetchMovieDataById: (state, { payload: movieId }) => {
      state.movieData.id = movieId;
    },
    setMovieData: (state, { payload: fetchedData }) => {
      state.movieData.data = fetchedData;
    },

    fetchPersonDataById: (state, { payload: personId }) => {
      state.personData.id = personId;
    },
    setPersonData: (state, { payload: person }) => {
      state.personData.data = person;
    },
  },
});

const selectMovies = (state) => state.details;

export const selectMovieId = (state) => selectMovies(state).movieData.id;
export const selectMovieData = (state) => selectMovies(state).movieData.data;

export const selectPersonId = (state) => selectMovies(state).personData.id;
export const selectPersonData = (state) => selectMovies(state).personData.data;

export const {
  fetchMovieDataById,
  setMovieData,
  fetchPersonDataById,
  setPersonData,
} = detailsSlice.actions;

export default detailsSlice.reducer;
