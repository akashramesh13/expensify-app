import React, { useState } from "react";
import './ExpenseForm.scss';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const ExpenseForm = ({ expense, onSubmit }) => {
  const [description, setDescription] = useState(
    expense ? expense.description : ""
  );
  const [note, setNote] = useState(expense ? expense.note : "");
  const [amount, setAmount] = useState(
    expense ? (expense.amount / 100).toString() : ""
  );
  const [createdAt, setCreatedAt] = useState(
    expense ? new Date(expense.createdAt) : new Date()
  );
  const [error, setError] = useState("");

  const onAmountChange = (e) => {
    const value = e.target.value;
    if (!value || value.match(/^\d{1,}(\.\d{0,2})?$/)) {
      setAmount(value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!description || !amount) {
      setError("Please provide a description and amount");
    } else {
      setError("");
      onSubmit({
        description,
        amount: parseFloat(amount, 10) * 100,
        createdAt: createdAt.getTime(),
        note,
      });
    }
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      {error && <p className="form__error">{error}</p>}
      <input
        className="text-input"
        type="text"
        placeholder="Description"
        autoFocus
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <input
        className="text-input"
        value={amount}
        onChange={onAmountChange}
        type="text"
        placeholder="Amount"
      />
      <div style={{ position: "relative", marginBottom: "1rem" }}>
        <svg style={{ position: "absolute", left: "14px", top: "50%", transform: "translateY(-50%)", color: "var(--text-muted)", width: "18px", height: "18px", pointerEvents: "none", zIndex: 2 }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
        <DatePicker
          selected={createdAt}
          onChange={(date) => setCreatedAt(date)}
          maxDate={new Date()}
          className="text-input text-input--date text-input--with-icon"
          dateFormat="MMM d, yyyy"
        />
      </div>
      <textarea
        className="textarea"
        value={note}
        onChange={(e) => setNote(e.target.value)}
        placeholder="Add a note for your expense (optional)"
      />
      <div>
        <button className="button">Save Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
