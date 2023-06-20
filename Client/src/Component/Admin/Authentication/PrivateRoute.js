import React, { useContext } from 'react';
import { Route, Navigate } from 'react-router-dom';
import { AuthContext } from './AuthContext';

const PrivateRoute = ({ element: Element, ...rest }) => {
  const { isAuthenticated } = useContext(AuthContext);

  if (!isAuthenticated) {
    // Redirect to login page if not authenticated
    return <Navigate to="/admin" />;
  }

  return <Route {...rest} element={<Element />} />;
};

export default PrivateRoute;
