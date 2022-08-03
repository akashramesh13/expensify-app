import React from "react";

import { useNavigate, useParams } from "react-router-dom";
import { connect } from "react-redux";
import ExpenseForm from "./ExpenseForm";
import { editExpense, removeExpense } from "../actions/expenses";
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
          props.dispatch(editExpense(id, { ...expense }));
          return navigate("/");
        }}
      />
      <button
        onClick={(e) => {
          props.dispatch(removeExpense({ id }));
          return navigate("/");
        }}
      >
        Remove
      </button>
    </div>
  );
};

export default connect()(EditExpensePage);
