import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import Header from "../components/Header/Header";

const PrivateRoute = ({ children }) => {
  const isAuthenticated = useSelector((state) => !!state.auth.uid);

  return isAuthenticated ? (
    <div>
      <Header />
      {children}
    </div>
  ) : (
    <Navigate to="/" />
  );
};

export default PrivateRoute;
