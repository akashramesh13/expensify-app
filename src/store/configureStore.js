import { configureStore } from "@reduxjs/toolkit";
import expensesReducer from "./expensesSlice";
import filtersReducer from "./filtersSlice";
import authReducer from "./authSlice";

export default () => {
  return configureStore({
    reducer: {
      expenses: expensesReducer,
      filters: filtersReducer,
      auth: authReducer,
    },
  });
};
