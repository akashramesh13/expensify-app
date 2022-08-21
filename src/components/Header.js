import React from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import { startLogout } from "../actions/auth";

const Header = ({ startLogout }) => (
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
    <button onClick={startLogout}>Logout</button>
  </header>
);

const mapDispatchToProps = (dispatch) => ({
  startLogout: () => dispatch(startLogout),
});
export default connect(undefined, mapDispatchToProps)(Header);
