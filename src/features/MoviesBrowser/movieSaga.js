import { getMovieData } from "./getMovieData";
import { fetchMoviesData, setMoviesData } from "./moviesSlice";
import { call, put, takeEvery } from "redux-saga/effects";

function* fetchMovieDataHandler() {
  try {
    const moviesData = yield call(getMovieData);

    yield put(setMoviesData(moviesData));
  } catch (error) {
    console.error(error);
    yield call(alert, "Something is off");
  }
}

export function* movieSaga() {
  yield takeEvery(fetchMoviesData.type, fetchMovieDataHandler);
}
