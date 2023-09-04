import { call, select, takeEvery } from "@redux-saga/core/effects";
import { selectMovieId } from "./moviesSlice";
import { setLocalStorage } from "./dataInLocalStorage";

function* saveMovieIdInLocalStorageHandler() {
  try {
    const movieId = yield select(selectMovieId);

    yield call(setLocalStorage(movieId, "movieId"));
  } catch (error) {
    console.error(error);
  }
}

export function* moviesSaga() {
  yield takeEvery("*", saveMovieIdInLocalStorageHandler);
}
