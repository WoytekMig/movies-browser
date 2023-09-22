import { call, select, takeEvery, put, delay } from "@redux-saga/core/effects";
import {
  fetchMovieDataById,
  fetchPersonDataById,
  selectMovieId,
  selectPersonId,
  setMovieData,
  setPersonData,
} from "./detailsSlice";
import { getDetailsData } from "./getDetailsData";

function* fetchMovieDataHandler() {
  yield put(setMovieData({ details: [], credits: [], status: "loading" }));
  yield delay(500);

  try {
    const movieId = yield select(selectMovieId);
    const { details, credits } = yield call(getDetailsData, movieId, "movie");

    yield put(setMovieData({ details, credits, status: "success" }));
  } catch (error) {
    console.error(error);
    yield put(setMovieData({ details: [], credits: [], status: "error" }));
  }
}

function* fetchPersonDataHandler() {
  yield put(setPersonData({ details: [], credits: [], status: "loading" }));
  yield delay(500);

  try {
    const personId = yield select(selectPersonId);
    const { details, credits } = yield call(getDetailsData, personId, "person");

    yield put(setPersonData({ details, credits, status: "success" }));
  } catch (error) {
    console.error(error);
    yield put(setPersonData({ details: [], credits: [], status: "error" }));
  }
}

function* detailsSaga() {
  yield takeEvery(fetchMovieDataById.type, fetchMovieDataHandler);
  yield takeEvery(fetchPersonDataById.type, fetchPersonDataHandler);
}

export { detailsSaga };
