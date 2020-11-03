import { getMatchReducer } from "./../reducers/getMatchReducer";
import { applyMiddleware, createStore, compose } from "redux";

import thunk, { ThunkMiddleware } from "redux-thunk";
import { combineReducers } from "@reduxjs/toolkit";
import { AppActions } from "./action";

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
  getMatchReducer: getMatchReducer,
});
export type AppState = ReturnType<typeof rootReducer>;
export const store = createStore(
  rootReducer,
  composeEnhancers(
    applyMiddleware(thunk as ThunkMiddleware<AppState, AppActions>)
  )
);
