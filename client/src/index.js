import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app";

import { Provider } from "react-redux";
import configureStore from "./store/configure_store";
import { fetchMessages } from "./actions/main";

const store = configureStore();
store.dispatch(fetchMessages());

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);
