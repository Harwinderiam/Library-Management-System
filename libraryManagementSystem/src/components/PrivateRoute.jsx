// src/components/PrivateRoute.js

import React from 'react';
import { Route, Navigate } from 'react-router-dom';
//import { useAuth } from '../services/authService';

const PrivateRoute = ({ element: Element, adminRequired, ...rest }) => {
  const { user, isAdmin } = useAuth();

  if (adminRequired && !isAdmin) {
    return <Navigate to="/login" />;
  }

  return <Route {...rest} element={<Element />} />;
};

export default PrivateRoute;
