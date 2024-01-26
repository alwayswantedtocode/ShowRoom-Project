import React from "react";
import { Route, Navigate } from "react-router-dom";
import { useGlobalContext } from "../GlobalContext";

const PrivateRoute = ({ element, ...rest }) => {
  const { authUser } = useGlobalContext();
  return (
    <Route
      {...rest}
      element={authUser ? element : <Navigate to="/SignIn" replace />}
    />
  );
};

export default PrivateRoute;
