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

import { login, logout } from "./actions/auth";
import { auth, onAuthStateChanged } from "./firebase/firebase";
import LoadingPage from "./components/LoadingPage";

store.dispatch(sortByDate());

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

let hasRendered = false;

const renderApp = () => {
  if (!hasRendered) {
    root.render(jsx);
    hasRendered = true;
  }
};

root.render(<LoadingPage />);

onAuthStateChanged(auth, (user) => {
  if (user) {
    store.dispatch(login(user.uid));
    store.dispatch(startSetExpenses()).then(() => {
      renderApp();
    });

    if (
      window.location.pathname === "/expensify-app/" ||
      window.location.pathname === "/expensify-app"
    ) {
      history.push("/expensify-app/dashboard");
    }
  } else {
    store.dispatch(logout());
    renderApp();

    // 🚀 The key fix: Only update if the user is NOT already at the correct page
    if (window.location.pathname !== "/expensify-app/") {
      window.location.pathname = "/expensify-app/"; // Force correct redirect
    }
  }
});
