import { createRoot } from "react-dom/client";
import React from "react";
import { Provider } from "react-redux";

import AppRouter, { history } from "./routers/AppRouter";
import "normalize.css/normalize.css";
import "./styles/styles.scss";

import configureStore from "./store/configureStore";
import { startSetExpenses } from "./actions/expenses";
import { sortByDate } from "./actions/filters";

const container = document.getElementById("app");
const root = createRoot(container);
const store = configureStore();

import { auth, onAuthStateChanged } from "./firebase/firebase";

store.dispatch(sortByDate());

store.dispatch(startSetExpenses());

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

onAuthStateChanged(auth, (user) => {
  if (user) {
    console.log("Logged in!!!");
    if (history.location.pathname === "/") {
      history.push("/dashboard");
    }
  } else {
    history.push("/");
  }
});

root.render(jsx);
