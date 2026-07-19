import React from "react";
import './ExpensesSummary.scss';
import { useSelector } from "react-redux";
import selectExpenses from "../../selectors/expenses";
import selectExpensesTotal from "../../selectors/expenses-total";
import { Link } from "react-router-dom";

const ExpensesSummary = () => {
  const visibleExpenses = useSelector((state) =>
    selectExpenses(state.expenses, state.filters)
  );
  
  const expenseCount = visibleExpenses.length;
  const expensesTotal = selectExpensesTotal(visibleExpenses);

  const expenseWord = expenseCount === 1 ? "expense" : "expenses";
  const formattedExpensesTotal = (expensesTotal / 100).toLocaleString("en-IN", {
    maximumFractionDigits: 2,
    style: "currency",
    currency: "INR",
  });

  return (
    <div className="page-header">
      <div className="content-container">
        <div className="page-header__content">
          <div>
            <h1 className="page-header__title">
              <span>{expenseCount}</span> {expenseWord}
            </h1>
            <p className="page-header__total">{formattedExpensesTotal}</p>
          </div>
          <Link className="button button--add" to="/create">
            + Add Expense
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ExpensesSummary;
