import React from "react";
import './ExpenseList.scss';
import { useSelector } from "react-redux";
import ExpenseListItem from "../ExpenseListItem/ExpenseListItem";
import selectExpenses from "../../selectors/expenses";

const ExpenseList = () => {
  const expenses = useSelector((state) =>
    selectExpenses(state.expenses, state.filters)
  );

  return (
    <div className="content-container">
      <div className="list-header">
        <div className="show-for-mobile">Expenses</div>
        <div className="show-for-desktop">Expense</div>
        <div className="show-for-desktop">Amount</div>
      </div>
      {expenses.length > 0 ? (
        <div>
          {expenses.map((expense) => (
            <ExpenseListItem {...expense} key={expense.id} />
          ))}
        </div>
      ) : (
        <div className="list-item list-item--message">
          <span>No expenses yet — add one to get started</span>
        </div>
      )}
    </div>
  );
};

export default ExpenseList;
