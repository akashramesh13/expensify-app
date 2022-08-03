import React from "react";
import { connect } from "react-redux";
import ExpenseListItem from "./ExpenseListItem";
import selectExpenses from "../selectors/expenses";

const ExpenseList = (props) => (
  <div>
    {props.expenses.length > 0 ? (
      <div>
        <h1>Expense List</h1>
        {props.expenses.map((expense) => (
          <ExpenseListItem {...expense} key={expense.id} />
        ))}
      </div>
    ) : (
      <h3>No expenses</h3>
    )}
  </div>
);

const mapStateToProps = (state) => ({
  expenses: selectExpenses(state.expenses, state.filters),
});

export default connect(mapStateToProps)(ExpenseList);
