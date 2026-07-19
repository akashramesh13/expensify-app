import React from "react";
import { Link } from "react-router-dom";

const ExpenseListItem = ({ id, description, amount, createdAt }) => {
  const formattedDate = new Intl.DateTimeFormat("en-IN", {
    day: "numeric",
    month: "short",
    year: "numeric",
  }).format(new Date(createdAt));

  return (
    <Link className="list-item" to={`/edit/${id}`}>
      <div>
        <h3 className="list-item__title">{description}</h3>
        <span className="list-item__sub-title">{formattedDate}</span>
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
};

export default ExpenseListItem;
