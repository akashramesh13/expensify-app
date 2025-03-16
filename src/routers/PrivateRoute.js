import React from "react";
import { connect } from "react-redux";
import { Navigate } from "react-router-dom";
import Header from "../components/Header";
export const PrivateRoute = (props) => {
  return props.isAuthenticated ? (
    <div>
      <Header />
      {props.children}
    </div>
  ) : (
    <Navigate to="" />
  );
};
const mapStateToProps = (state) => ({
  isAuthenticated: !!state.auth.uid,
});

export default connect(mapStateToProps)(PrivateRoute);
