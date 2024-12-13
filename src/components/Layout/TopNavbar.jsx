import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../redux/authSlice';
import { NavLink, useNavigate } from 'react-router-dom';
import './topNavbar.css';

const TopNavbar = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    navigate('/login');
  };

  return (
    <nav className="top-navbar d-flex align-items-center justify-content-between px-3">
      <div className="navbar-brand text-white">Admin Panel</div>
      <div className="navbar-actions">
        {!isLoggedIn ? (
          <>
            <NavLink to="/login" className="btn btn-primary me-2">
              Login
            </NavLink>
            <NavLink to="/signup" className="btn btn-secondary">
              Signup
            </NavLink>
          </>
        ) : (
          <button className="btn btn-danger" onClick={handleLogout}>
            Logout
          </button>
        )}
      </div>
    </nav>
  );
};

export default TopNavbar;
