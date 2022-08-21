import React from "react";

import { useNavigate, useParams } from "react-router-dom";
import { connect } from "react-redux";
import ExpenseForm from "./ExpenseForm";
import { startEditExpense, startRemoveExpense } from "../actions/expenses";
import { useSelector } from "react-redux";

const EditExpensePage = (props) => {
  const navigate = useNavigate();

  let { id } = useParams();
  const item = useSelector((state) =>
    state.expenses.find((expense) => expense.id === id)
  );
  return (
    <div>
      <div className="page-header">
        <div className="content-container">
          <h1 className="page-header__title">Edit Expense</h1>
        </div>
      </div>
      <div className="content-container">
        <ExpenseForm
          expense={item}
          onSubmit={(expense) => {
            props.dispatch(startEditExpense(id, { ...expense }));
            return navigate("/dashboard");
          }}
        />
        <button
          className="button button--secondary"
          onClick={(e) => {
            props.dispatch(startRemoveExpense({ id }));
            return navigate("/dashboard");
          }}
        >
          Remove Expense
        </button>
      </div>
    </div>
  );
};

export default connect()(EditExpensePage);
