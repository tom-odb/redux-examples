import { createStore, combineReducers } from "redux";

import { lamasReducer } from "./store/reducers";
import { LAMAS_INITIAL_STATE } from "./store/initial-state";

const initialState = {
  lamas: LAMAS_INITIAL_STATE,
};

const enhancers = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

export const rootReducer = combineReducers({
  lamas: lamasReducer
});

export const store = createStore(
  rootReducer,
  initialState,
  enhancers
);
