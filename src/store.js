import { configureStore } from "@reduxjs/toolkit";
import moviesReducer from "./features/MoviesBrowser/moviesSlice";
import createSagaMiddleware from "@redux-saga/core";
import { moviesSaga } from "./features/MoviesBrowser/moviesSaga";
import { responsiveStoreEnhancer } from "redux-responsive";
import { createResponsiveStateReducer } from "redux-responsive";

const sagaMiddleware = createSagaMiddleware();

const media = {
  smallMobile: 450,
  defaultMobile: 767,
};

const store = configureStore({
  reducer: {
    movies: moviesReducer,
    responsive: createResponsiveStateReducer(media),
  },
  middleware: [sagaMiddleware],
  enhancers: [responsiveStoreEnhancer],
});

sagaMiddleware.run(moviesSaga);

export default store;
