import React from "react";
import ExpenseList from "../ExpenseList/ExpenseList";
import ExpenseListFilters from "../ExpenseListFilters/ExpenseListFilters";
import ExpensesSummary from "../ExpensesSummary/ExpensesSummary";

const ExpenseDashboardPage = () => (
  <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
    <div style={{ flex: 1 }}>
      <ExpensesSummary />
      <ExpenseListFilters />
      <ExpenseList />
    </div>
  </div>
);

export default ExpenseDashboardPage;
