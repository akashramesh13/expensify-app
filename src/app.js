import { createRoot } from "react-dom/client";
import React from "react";
import { Provider } from "react-redux";

import AppRouter from "./routers/AppRouter";
import "normalize.css/normalize.css";
import "./styles/styles.scss";

import configureStore from "./store/configureStore";
import { addExpense } from "./actions/expenses";
import { sortByDate } from "./actions/filters";

const container = document.getElementById("app");
const root = createRoot(container);
const store = configureStore();

store.dispatch(
  addExpense({
    description: "Water bill",
    amount: 4500,
  })
);

store.dispatch(
  addExpense({
    description: "Gas bill",
    amount: 1000,
    createdAt: 1000,
  })
);

store.dispatch(
  addExpense({
    description: "Rent",
    amount: 109500,
  })
);

store.dispatch(sortByDate());

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

root.render(jsx);
