import { configureStore } from "@reduxjs/toolkit";
import detailsReducer from "./App/features/Details/detailsSlice";
import createSagaMiddleware from "@redux-saga/core";
import { detailsSaga } from "./App/features/Details/detailsSaga";
import { responsiveStoreEnhancer } from "redux-responsive";
import { createResponsiveStateReducer } from "redux-responsive";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    details: detailsReducer,
    responsive: createResponsiveStateReducer({
      defaultMobile: 767,
    }),
  },
  middleware: [sagaMiddleware],
  enhancers: [responsiveStoreEnhancer],
});

sagaMiddleware.run(detailsSaga);

export const selectIsMedia = (state) => state.responsive.is.defaultMobile;

export default store;
