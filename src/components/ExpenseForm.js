import React from "react";
import moment from "moment";
import { SingleDatePicker } from "react-dates";
import "react-dates/lib/css/_datepicker.css";

export default class ExpenseForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      description: props.expense ? props.expense.description : "",
      note: props.expense ? props.expense.note : "",
      amount: props.expense ? (props.expense.amount / 100).toString() : "",
      createdAt: props.expense ? moment(props.expense.createdAt) : moment(),
      calendarFocused: props.expense ? props.expense.calendarFocused : false,
      error: "",
    };
  }

  onDescriptionChange = (e) => {
    const description = e.target.value;
    this.setState(() => ({
      description,
    }));
  };

  onFocusChange = ({ focused }) => {
    this.setState(() => ({
      calendarFocused: focused,
    }));
  };
  onNoteChange = (e) => {
    const note = e.target.value;
    this.setState(() => ({
      note,
    }));
  };

  onDateChange = (createdAt) => {
    if (createdAt) {
      this.setState(() => ({
        createdAt,
      }));
    }
  };

  onAmountChange = (e) => {
    const amount = e.target.value;
    if (!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
      this.setState(() => ({
        amount,
      }));
    }
  };

  onSubmit = (e) => {
    e.preventDefault();

    if (!this.state.description || !this.state.amount) {
      const error = "Please provide a description and amount";
      this.setState(() => ({
        error,
      }));
    }
    // Clear the error
    else {
      this.setState(() => ({
        error: "",
      }));
      this.props.onSubmit({
        description: this.state.description,
        amount: parseFloat(this.state.amount, 10) * 100,
        createdAt: this.state.createdAt.valueOf(),
        note: this.state.note,
      });
    }
  };

  render() {
    return (
      <form className="form" onSubmit={this.onSubmit}>
        {this.state.error !== "" && (
          <p className="form__error">{this.state.error}</p>
        )}
        <input
          className="text-input"
          type="text"
          placeholder="Description"
          autoFocus
          value={this.state.description}
          onChange={this.onDescriptionChange}
        />
        <input
          className="text-input"
          value={this.state.amount}
          onChange={this.onAmountChange}
          type="text"
          placeholder="Amount"
        />

        <SingleDatePicker
          numberOfMonths={1}
          isOutsideRange={() => {
            false;
          }}
          date={this.state.createdAt}
          onDateChange={this.onDateChange}
          focused={this.state.calendarFocused}
          onFocusChange={this.onFocusChange}
          displayFormat={() => "DD-MMM-YYYY"}
        />
        <textarea
          className="textarea"
          value={this.state.note}
          onChange={this.onNoteChange}
          placeholder="Add a note for your expense (optional)"
        />
        <div>
          <button className="button">Save Expense</button>
        </div>
      </form>
    );
  }
}
