import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app";

import { Provider } from "react-redux";
import configureStore from "./store/configure_store";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store={configureStore()}>
    <App />
  </Provider>,
  rootElement
);
