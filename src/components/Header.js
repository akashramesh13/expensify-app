import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => (
  <header>
    <h1>Expensify</h1>
    <NavLink
      className={({ isActive }) => (isActive ? "is-active" : undefined)}
      to="/"
    >
      Home
    </NavLink>
    <NavLink
      className={({ isActive }) => (isActive ? "is-active" : undefined)}
      to="/create"
    >
      Create Expense
    </NavLink>
    <NavLink
      className={({ isActive }) => (isActive ? "is-active" : undefined)}
      to="/edit"
    >
      Edit Expense
    </NavLink>
    <NavLink
      className={({ isActive }) => (isActive ? "is-active" : undefined)}
      to="/help"
    >
      Help
    </NavLink>
  </header>
);

export default Header;
