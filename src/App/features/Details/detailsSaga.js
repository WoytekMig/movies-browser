import { call, select, takeEvery, put, delay } from "@redux-saga/core/effects";
import {
  fetchMovieDataById,
  fetchPersonDataById,
  selectMovieId,
  selectPersonId,
  setMovieData,
  setPersonData,
} from "./detailsSlice";
import { getMovie } from "./getMovie";
import { getPerson } from "./getPerson";

function* fetchMovieDataHandler() {
  yield put(setMovieData({ movie: [], credits: [], status: "loading" }));
  yield delay(500);

  try {
    const movieId = yield select(selectMovieId);
    const { movie, credits } = yield call(getMovie, movieId);

    yield put(setMovieData({ movie, credits, status: "success" }));
  } catch (error) {
    console.error(error);
    yield put(setMovieData({ movie: [], credits: [], status: "error" }));
  }
}

function* fetchPersonDataHandler() {
  yield put(setPersonData({ person: [], credits: [], status: "loading" }));
  yield delay(500);

  try {
    const personId = yield select(selectPersonId);
    const { person, credits } = yield call(getPerson, personId);

    yield put(setPersonData({ person, credits, status: "success" }));
  } catch (error) {
    console.error(error);
    yield put(setPersonData({ person: [], credits: [], status: "error" }));
  }
}

function* detailsSaga() {
  yield takeEvery(fetchMovieDataById.type, fetchMovieDataHandler);
  yield takeEvery(fetchPersonDataById.type, fetchPersonDataHandler);
}

export { detailsSaga };
