import { call, select, takeEvery } from "@redux-saga/core/effects";
import { selectMovieId, selectPersonId } from "./moviesSlice";
import { setLocalStorage } from "./dataInLocalStorage";

function* saveMovieIdInLocalStorageHandler() {
  try {
    const movieId = yield select(selectMovieId);

    yield call(setLocalStorage, movieId, "movieId");
  } catch (error) {
    console.error(error);
  }
}

function* savePersonIdInLocalStorageHandler() {
  try {
    const PersonId = yield select(selectPersonId);

    yield call(setLocalStorage, PersonId, "PersonId");
  } catch (error) {
    console.error(error);
  }
}

export function* moviesSaga() {
  yield takeEvery("*", saveMovieIdInLocalStorageHandler);
  yield takeEvery("*", savePersonIdInLocalStorageHandler);
}
