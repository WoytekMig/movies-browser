import { all } from "redux-saga/effects";
import { movieSaga } from "./features/MoviesBrowser/movieSaga";

function* rootSaga() {
  yield all([movieSaga()]);
}

export default rootSaga;
