// src/router/AppRoutes.jsx
import React, { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import ProtectedRoute from '../components/ProtectedRoute';
import Spinner from '../components/Spinner';

const Dashboard = React.lazy(() => import('../pages/Dashboard'));
const UserManagement = React.lazy(() => import('../pages/UserManagement'));
const Settings = React.lazy(() => import('../pages/Settings'));
const LoginPage = React.lazy(() => import('../pages/LoginPage'));
const SignupPage = React.lazy(() => import('../pages/SignupPage'));
const Layout = React.lazy(() => import('../components/Layout/Layout'));

const AppRoutes = () => (
  <Suspense fallback={<Spinner />}>
    <Routes>
      {/* Public Routes */}
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignupPage />} />

      {/* Protected Routes */}
      <Route element={<ProtectedRoute />}>
        <Route element={<Layout />}>
          <Route path="/" element={<Dashboard />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/user-management" element={<UserManagement />} />
          <Route path="/settings" element={<Settings />} />
        </Route>
      </Route>
    </Routes>
  </Suspense>
);

export default AppRoutes;
