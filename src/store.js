import { configureStore } from "@reduxjs/toolkit";
import moviesReducer from "./features/MoviesBrowser/moviesSlice";
import createSagaMiddleware from "@redux-saga/core";
import { moviesSaga } from "./features/MoviesBrowser/moviesSaga";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    movies: moviesReducer,
  },
  middleware: [sagaMiddleware],
});

sagaMiddleware.run(moviesSaga);

export default store;
