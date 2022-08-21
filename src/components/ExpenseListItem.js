import React from "react";
import { Link } from "react-router-dom";
import moment from "moment";

const ExpenseListItem = ({ id, description, amount, createdAt }) => (
  <Link className="list-item" to={`/edit/${id}`}>
    <div>
      <h3 className="list-item__title">{description}</h3>

      <span className="list-item__sub-title">
        {moment(createdAt).format("MMM Do, YYYY")}
      </span>
    </div>
    <div>
      <h3 className="list-item__data">
        {(amount / 100).toLocaleString("en-IN", {
          maximumFractionDigits: 2,
          style: "currency",
          currency: "INR",
        })}
      </h3>
    </div>
  </Link>
);

export default ExpenseListItem;
