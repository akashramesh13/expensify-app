import React from "react";
import './ExpenseListFilters.scss';
import { useSelector, useDispatch } from "react-redux";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {
  setTextFilter,
  sortByAmount,
  sortByDate,
  setStartDate,
  setEndDate,
} from "../../store/filtersSlice";

const ExpenseListFilters = () => {
  const filters = useSelector((state) => state.filters);
  const dispatch = useDispatch();

  const today = new Date();

  return (
    <div className="content-container">
      <div className="input-group">
        <div className="input-group__item input-group__item--with-icon input-group__item--with-clear">
          <svg className="input-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
          <input
            placeholder="Search"
            className="text-input text-input--with-icon"
            type="text"
            value={filters.text}
            onChange={(e) => dispatch(setTextFilter(e.target.value))}
          />
          {filters.text && (
            <button className="input-clear-btn" onClick={() => dispatch(setTextFilter(""))}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
            </button>
          )}
        </div>
        <div className="input-group__item">
          <select
            className="select"
            value={filters.sortBy}
            onChange={(e) => {
              if (e.target.value === "date") {
                dispatch(sortByDate());
              } else if (e.target.value === "amount") {
                dispatch(sortByAmount());
              }
            }}
          >
            <option value="date">Sort by Date</option>
            <option value="amount">Sort by Amount</option>
          </select>
        </div>
        <div className="input-group__item input-group__item--with-icon input-group__item--with-clear">
          <svg className="input-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
          <DatePicker
            selected={filters.startDate ? new Date(filters.startDate) : null}
            onChange={(date) => dispatch(setStartDate(date ? date.toISOString().split("T")[0] : ""))}
            maxDate={today}
            placeholderText="Start date"
            className="text-input text-input--date text-input--with-icon"
            dateFormat="MMM d, yyyy"
          />
          {filters.startDate && (
            <button className="input-clear-btn" onClick={() => dispatch(setStartDate(""))}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
            </button>
          )}
        </div>
        <div className="input-group__item input-group__item--with-icon input-group__item--with-clear">
          <svg className="input-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
          <DatePicker
            selected={filters.endDate ? new Date(filters.endDate) : null}
            onChange={(date) => dispatch(setEndDate(date ? date.toISOString().split("T")[0] : ""))}
            maxDate={today}
            placeholderText="End date"
            className="text-input text-input--date text-input--with-icon"
            dateFormat="MMM d, yyyy"
          />
          {filters.endDate && (
            <button className="input-clear-btn" onClick={() => dispatch(setEndDate(""))}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ExpenseListFilters;
