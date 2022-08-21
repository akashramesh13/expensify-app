import React from "react";
import { unstable_HistoryRouter as HistoryRouter, Routes, Route } from "react-router-dom";
import AddExpensePage from "../components/AddExpensePage";
import EditExpensePage from "../components/EditExpensePage";
import ExpenseDashboardPage from "../components/ExpenseDashboardPage";
import Header from "../components/Header";
import HelpPage from "../components/HelpPage";
import LoginPage from "../components/LoginPage";
import NotFoundPage from "../components/NotFoundPage";
import { createBrowserHistory } from "history";

export const history = createBrowserHistory();

const AppRouter = () => (
  <HistoryRouter history={history}>
    <Header />
    <Routes>
      <Route index element={<LoginPage />} />
      <Route path="dashboard" element={<ExpenseDashboardPage />} />
      <Route path="edit/:id" element={<EditExpensePage />} />
      <Route path="create" element={<AddExpensePage />} />
      <Route path="help" element={<HelpPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  </HistoryRouter>
);

export default AppRouter;
