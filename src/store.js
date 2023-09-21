import { configureStore } from "@reduxjs/toolkit";
import moviesReducer from "./App/features/moviesSlice";
import createSagaMiddleware from "@redux-saga/core";
import { moviesSaga } from "./App/features/moviesSaga";
import { responsiveStoreEnhancer } from "redux-responsive";
import { createResponsiveStateReducer } from "redux-responsive";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    movies: moviesReducer,
    responsive: createResponsiveStateReducer({
      defaultMobile: 767,
    }),
  },
  middleware: [sagaMiddleware],
  enhancers: [responsiveStoreEnhancer],
});

sagaMiddleware.run(moviesSaga);

export const selectIsMedia = (state) => state.responsive.is.defaultMobile;

export default store;
