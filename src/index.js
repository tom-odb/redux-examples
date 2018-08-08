import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import { rootReducer } from "./store";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

import "./styles.css";

import App from "./App";

const store = createStore(rootReducer);

const rootElement = document.getElementById("root");
ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>,
  rootElement
);
