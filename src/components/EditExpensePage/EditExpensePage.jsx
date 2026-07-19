import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import ExpenseForm from "../ExpenseForm/ExpenseForm";
import { startEditExpense, startRemoveExpense } from "../../store/expensesSlice";

const EditExpensePage = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const dispatch = useDispatch();
  
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
      <div className="content-container" style={{ paddingTop: "1.5rem" }}>
        <ExpenseForm
          expense={item}
          onSubmit={(expense) => {
            dispatch(startEditExpense({ id, updates: expense }));
            return navigate("/dashboard");
          }}
        />
        <button
          className="button button--secondary"
          style={{ marginTop: "1rem" }}
          onClick={() => {
            dispatch(startRemoveExpense({ id }));
            return navigate("/dashboard");
          }}
        >
          Remove Expense
        </button>
      </div>
    </div>
  );
};

export default EditExpensePage;
