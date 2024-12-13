// src/components/ProtectedRoute.jsx
import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';

const ProtectedRoute = () => {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  console.log('User logged in:', isLoggedIn);

  if (!isLoggedIn) {
    return <Navigate to="/login" />;
  }

  return <Outlet />; // Render child routes
};

export default ProtectedRoute;
