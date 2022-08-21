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
      <ExpenseForm
        expense={item}
        onSubmit={(expense) => {
          props.dispatch(startEditExpense(id, { ...expense }));
          return navigate("/dashboard");
        }}
      />
      <button
        onClick={(e) => {
          props.dispatch(startRemoveExpense({ id }));
          return navigate("/dashboard");
        }}
      >
        Remove
      </button>
    </div>
  );
};

export default connect()(EditExpensePage);
