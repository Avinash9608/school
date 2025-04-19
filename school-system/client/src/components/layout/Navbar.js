import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import AuthContext from '../../context/AuthContext';
import './Navbar.css';

const Navbar = () => {
  const { isAuthenticated, user, logout } = useContext(AuthContext);

  const onLogout = () => {
    logout();
  };

  const authLinks = (
    <ul className="navbar-nav">
      <li className="nav-item">
        <span className="nav-link user-name">
          {user && `${user.firstName} ${user.lastName}`}
        </span>
      </li>
      <li className="nav-item">
        <Link to="/profile" className="nav-link">
          <i className="fas fa-user"></i> Profile
        </Link>
      </li>
      <li className="nav-item">
        <a href="#!" onClick={onLogout} className="nav-link">
          <i className="fas fa-sign-out-alt"></i> Logout
        </a>
      </li>
    </ul>
  );

  const guestLinks = (
    <ul className="navbar-nav">
      <li className="nav-item">
        <Link to="/login" className="nav-link">
          <i className="fas fa-sign-in-alt"></i> Login
        </Link>
      </li>
      <li className="nav-item">
        <Link to="/register" className="nav-link">
          <i className="fas fa-user-plus"></i> Register
        </Link>
      </li>
    </ul>
  );

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-brand">
          <i className="fas fa-school"></i> School Management System
        </Link>
        <div className="navbar-right">
          {isAuthenticated ? authLinks : guestLinks}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
