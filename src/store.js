import { combineReducers } from "redux";

import { lamasReducer } from "./store/reducers";

export const rootReducer = combineReducers({
  lamas: lamasReducer
});
