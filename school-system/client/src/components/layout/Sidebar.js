import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import AuthContext from '../../context/AuthContext';
import './Sidebar.css';

const Sidebar = () => {
  const { isAuthenticated, user } = useContext(AuthContext);

  if (!isAuthenticated) {
    return null;
  }

  // Admin sidebar
  const adminSidebar = (
    <div className="sidebar">
      <ul className="sidebar-nav">
        <li className="sidebar-item">
          <Link to="/dashboard" className="sidebar-link">
            <i className="fas fa-tachometer-alt"></i> Dashboard
          </Link>
        </li>
        <li className="sidebar-item">
          <Link to="/students" className="sidebar-link">
            <i className="fas fa-user-graduate"></i> Students
          </Link>
        </li>
        <li className="sidebar-item">
          <Link to="/classes" className="sidebar-link">
            <i className="fas fa-chalkboard"></i> Classes
          </Link>
        </li>
        <li className="sidebar-item">
          <Link to="/attendance" className="sidebar-link">
            <i className="fas fa-calendar-check"></i> Attendance
          </Link>
        </li>
        <li className="sidebar-item">
          <Link to="/fees" className="sidebar-link">
            <i className="fas fa-money-bill-wave"></i> Fees
          </Link>
        </li>
        <li className="sidebar-item">
          <Link to="/results" className="sidebar-link">
            <i className="fas fa-chart-bar"></i> Results
          </Link>
        </li>
        <li className="sidebar-item">
          <Link to="/library" className="sidebar-link">
            <i className="fas fa-book"></i> Library
          </Link>
        </li>
        <li className="sidebar-item">
          <Link to="/staff" className="sidebar-link">
            <i className="fas fa-user-tie"></i> Staff
          </Link>
        </li>
        <li className="sidebar-item">
          <Link to="/facilities" className="sidebar-link">
            <i className="fas fa-building"></i> Facilities
          </Link>
        </li>
        <li className="sidebar-item">
          <Link to="/settings" className="sidebar-link">
            <i className="fas fa-cog"></i> Settings
          </Link>
        </li>
      </ul>
    </div>
  );

  // Teacher sidebar
  const teacherSidebar = (
    <div className="sidebar">
      <ul className="sidebar-nav">
        <li className="sidebar-item">
          <Link to="/dashboard" className="sidebar-link">
            <i className="fas fa-tachometer-alt"></i> Dashboard
          </Link>
        </li>
        <li className="sidebar-item">
          <Link to="/students" className="sidebar-link">
            <i className="fas fa-user-graduate"></i> Students
          </Link>
        </li>
        <li className="sidebar-item">
          <Link to="/classes" className="sidebar-link">
            <i className="fas fa-chalkboard"></i> Classes
          </Link>
        </li>
        <li className="sidebar-item">
          <Link to="/attendance" className="sidebar-link">
            <i className="fas fa-calendar-check"></i> Attendance
          </Link>
        </li>
        <li className="sidebar-item">
          <Link to="/results" className="sidebar-link">
            <i className="fas fa-chart-bar"></i> Results
          </Link>
        </li>
        <li className="sidebar-item">
          <Link to="/library" className="sidebar-link">
            <i className="fas fa-book"></i> Library
          </Link>
        </li>
      </ul>
    </div>
  );

  // Student sidebar
  const studentSidebar = (
    <div className="sidebar">
      <ul className="sidebar-nav">
        <li className="sidebar-item">
          <Link to="/dashboard" className="sidebar-link">
            <i className="fas fa-tachometer-alt"></i> Dashboard
          </Link>
        </li>
        <li className="sidebar-item">
          <Link to="/attendance" className="sidebar-link">
            <i className="fas fa-calendar-check"></i> Attendance
          </Link>
        </li>
        <li className="sidebar-item">
          <Link to="/fees" className="sidebar-link">
            <i className="fas fa-money-bill-wave"></i> Fees
          </Link>
        </li>
        <li className="sidebar-item">
          <Link to="/results" className="sidebar-link">
            <i className="fas fa-chart-bar"></i> Results
          </Link>
        </li>
        <li className="sidebar-item">
          <Link to="/library" className="sidebar-link">
            <i className="fas fa-book"></i> Library
          </Link>
        </li>
      </ul>
    </div>
  );

  // Librarian sidebar
  const librarianSidebar = (
    <div className="sidebar">
      <ul className="sidebar-nav">
        <li className="sidebar-item">
          <Link to="/dashboard" className="sidebar-link">
            <i className="fas fa-tachometer-alt"></i> Dashboard
          </Link>
        </li>
        <li className="sidebar-item">
          <Link to="/library/books" className="sidebar-link">
            <i className="fas fa-book"></i> Books
          </Link>
        </li>
        <li className="sidebar-item">
          <Link to="/library/issue" className="sidebar-link">
            <i className="fas fa-hand-holding"></i> Issue Book
          </Link>
        </li>
        <li className="sidebar-item">
          <Link to="/library/return" className="sidebar-link">
            <i className="fas fa-undo"></i> Return Book
          </Link>
        </li>
        <li className="sidebar-item">
          <Link to="/library/reports" className="sidebar-link">
            <i className="fas fa-chart-pie"></i> Reports
          </Link>
        </li>
      </ul>
    </div>
  );

  // Staff sidebar
  const staffSidebar = (
    <div className="sidebar">
      <ul className="sidebar-nav">
        <li className="sidebar-item">
          <Link to="/dashboard" className="sidebar-link">
            <i className="fas fa-tachometer-alt"></i> Dashboard
          </Link>
        </li>
        <li className="sidebar-item">
          <Link to="/facilities" className="sidebar-link">
            <i className="fas fa-building"></i> Facilities
          </Link>
        </li>
      </ul>
    </div>
  );

  // Render sidebar based on user role
  if (user) {
    switch (user.role) {
      case 'admin':
        return adminSidebar;
      case 'teacher':
        return teacherSidebar;
      case 'student':
        return studentSidebar;
      case 'librarian':
        return librarianSidebar;
      case 'staff':
        return staffSidebar;
      default:
        return null;
    }
  }

  return null;
};

export default Sidebar;
