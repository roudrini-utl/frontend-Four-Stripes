import React from 'react';
import { NavLink } from 'react-router-dom';
import './sidebar.css';

const Sidebar = ({ isOpen, toggleSidebar }) => {
  return (
    <div className={`sidebar bg-dark text-white ${isOpen ? 'open' : 'collapsed'}`}>
      {/* Sidebar Header */}
      <div className="sidebar-header d-flex align-items-center justify-content-between p-3">
        {isOpen && <h2 className="sidebar-title">Admin Panel</h2>}
        <button className="hamburger-btn text-white btn btn-dark" onClick={toggleSidebar}>
          ☰
        </button>
      </div>

      {/* Navigation */}
      <nav>
        <ul className="list-unstyled">
          <li>
            <NavLink to="/dashboard" className="nav-link text-white d-flex align-items-center">
              {!isOpen ? (
                <i className="bi bi-speedometer2"></i> // Bootstrap Icon for Dashboard
              ) : (
                <>
                  <i className="bi bi-speedometer2 me-2"></i>
                  <span>Dashboard</span>
                </>
              )}
            </NavLink>
          </li>
          <li>
            <NavLink to="/user-management" className="nav-link text-white d-flex align-items-center">
              {!isOpen ? (
                <i className="bi bi-people"></i> // Bootstrap Icon for User Management
              ) : (
                <>
                  <i className="bi bi-people me-2"></i>
                  <span>User Management</span>
                </>
              )}
            </NavLink>
          </li>
          <li>
            <NavLink to="/settings" className="nav-link text-white d-flex align-items-center">
              {!isOpen ? (
                <i className="bi bi-gear"></i> // Bootstrap Icon for Settings
              ) : (
                <>
                  <i className="bi bi-gear me-2"></i>
                  <span>Settings</span>
                </>
              )}
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
