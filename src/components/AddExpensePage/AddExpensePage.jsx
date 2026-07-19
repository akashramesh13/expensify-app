import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import ExpenseForm from "../ExpenseForm/ExpenseForm";
import { startAddExpense } from "../../store/expensesSlice";

const AddExpensePage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  return (
    <div>
      <div className="page-header">
        <div className="content-container">
          <h1 className="page-header__title">Add Expense</h1>
        </div>
      </div>
      <div className="content-container" style={{ paddingTop: "1.5rem" }}>
        <ExpenseForm
          onSubmit={(expense) => {
            dispatch(startAddExpense(expense));
            return navigate("/dashboard");
          }}
        />
      </div>
    </div>
  );
};

export default AddExpensePage;
