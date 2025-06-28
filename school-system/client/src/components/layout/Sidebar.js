import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import AuthContext from '../../context/AuthContext';
import './Sidebar.css';

const Sidebar = () => {
  const { isAuthenticated, user } = useContext(AuthContext);
  const [expandedSections, setExpandedSections] = useState({
    about: false,
    academics: false,
    facilities: false,
    website: false
  });

  const toggleSection = (section) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  if (!isAuthenticated) {
    return null;
  }

  // Admin sidebar with website structure
  const adminSidebar = (
    <div className="sidebar">
      <ul className="sidebar-nav">
        <li className="sidebar-section">
          <span className="section-title">Dashboard</span>
        </li>
        
        {/* Website Management Section */}
        <li className="sidebar-item has-sub">
          <div 
            className="sidebar-link" 
            onClick={() => toggleSection('website')}
          >
            <i className="fas fa-globe"></i> Website Management
            <i className={`fas fa-chevron-${expandedSections.website ? 'up' : 'down'} expand-icon`}></i>
          </div>
          <ul className={`sidebar-subnav ${expandedSections.website ? 'expanded' : ''}`}>
            <li><Link to="/admin/header" className="sidebar-link">Header Manager</Link></li>
            <li><Link to="/admin/footer" className="sidebar-link">Footer Manager</Link></li>
            <li><Link to="/admin/content" className="sidebar-link">Content Manager</Link></li>
            <li><Link to="/admin/media" className="sidebar-link">Media Manager</Link></li>
            <li><Link to="/admin/pages" className="sidebar-link">Pages Manager</Link></li>
          </ul>
        </li>

        <li className="sidebar-item">
          <Link to="/admin/pages/home" className="sidebar-link">
            <i className="fas fa-home"></i> Home
          </Link>
        </li>

        {/* Website Pages Section */}
        <li className="sidebar-item has-sub">
          <div 
            className="sidebar-link" 
            onClick={() => toggleSection('pages')}
          >
            <i className="fas fa-file-alt"></i> Website Pages
            <i className={`fas fa-chevron-${expandedSections.pages ? 'up' : 'down'} expand-icon`}></i>
          </div>
          <ul className={`sidebar-subnav ${expandedSections.pages ? 'expanded' : ''}`}>
            <li><Link to="/admin/pages/home" className="sidebar-link">Home</Link></li>
            <li><Link to="/admin/pages/about" className="sidebar-link">About Us</Link></li>
            <li><Link to="/admin/pages/academics" className="sidebar-link">Academics</Link></li>
            <li><Link to="/admin/pages/admissions" className="sidebar-link">Admissions</Link></li>
            <li><Link to="/admin/pages/facilities" className="sidebar-link">Facilities</Link></li>
            <li><Link to="/admin/pages/gallery" className="sidebar-link">Gallery</Link></li>
            <li><Link to="/admin/pages/events" className="sidebar-link">Events</Link></li>
            <li><Link to="/admin/pages/contact" className="sidebar-link">Contact</Link></li>
          </ul>
        </li>

        <li className="sidebar-item has-sub">
          <div 
            className="sidebar-link" 
            onClick={() => toggleSection('about')}
          >
            <i className="fas fa-info-circle"></i> About Us
            <i className={`fas fa-chevron-${expandedSections.about ? 'up' : 'down'} expand-icon`}></i>
          </div>
          <ul className={`sidebar-subnav ${expandedSections.about ? 'expanded' : ''}`}>
            <li><Link to="/admin/pages/about" className="sidebar-link">About Us Main</Link></li>
            <li><Link to="/admin/pages/about/history" className="sidebar-link">Our History</Link></li>
            <li><Link to="/admin/pages/about/vision-mission" className="sidebar-link">Vision Mission</Link></li>
            <li><Link to="/admin/pages/about/principal-message" className="sidebar-link">Principal Message</Link></li>
            <li><Link to="/admin/pages/about/achievements" className="sidebar-link">Achievements</Link></li>
          </ul>
        </li>
        <li className="sidebar-item has-sub">
          <div 
            className="sidebar-link" 
            onClick={() => toggleSection('academics')}
          >
            <i className="fas fa-graduation-cap"></i> Academics
            <i className={`fas fa-chevron-${expandedSections.academics ? 'up' : 'down'} expand-icon`}></i>
          </div>
          <ul className={`sidebar-subnav ${expandedSections.academics ? 'expanded' : ''}`}>
            <li><Link to="/admin/pages/academics" className="sidebar-link">Academics Main</Link></li>
            <li><Link to="/admin/pages/academics/curriculum" className="sidebar-link">Curriculum</Link></li>
            <li><Link to="/admin/pages/academics/faculty" className="sidebar-link">Faculty</Link></li>
            <li><Link to="/admin/pages/academics/departments" className="sidebar-link">Departments</Link></li>
            <li><Link to="/admin/pages/academics/examinations" className="sidebar-link">Examinations</Link></li>
          </ul>
        </li>
        <li className="sidebar-item">
          <Link to="/admin/pages/admissions" className="sidebar-link">
            <i className="fas fa-user-plus"></i> Admissions
          </Link>
        </li>
        <li className="sidebar-item has-sub">
          <div 
            className="sidebar-link" 
            onClick={() => toggleSection('facilities')}
          >
            <i className="fas fa-building"></i> Facilities
            <i className={`fas fa-chevron-${expandedSections.facilities ? 'up' : 'down'} expand-icon`}></i>
          </div>
          <ul className={`sidebar-subnav ${expandedSections.facilities ? 'expanded' : ''}`}>
            <li><Link to="/admin/pages/facilities" className="sidebar-link">Facilities Main</Link></li>
            <li><Link to="/admin/pages/facilities/classrooms" className="sidebar-link">Classroom</Link></li>
            <li><Link to="/admin/pages/facilities/laboratories" className="sidebar-link">Laboratory</Link></li>
            <li><Link to="/admin/pages/facilities/sports" className="sidebar-link">Sports</Link></li>
            <li><Link to="/admin/pages/facilities/transport" className="sidebar-link">Transport</Link></li>
            <li><Link to="/admin/pages/facilities/library" className="sidebar-link">Library</Link></li>
          </ul>
        </li>
        <li className="sidebar-item">
          <Link to="/admin/pages/gallery" className="sidebar-link">
            <i className="fas fa-images"></i> Gallery
          </Link>
        </li>
        <li className="sidebar-item">
          <Link to="/admin/pages/events" className="sidebar-link">
            <i className="fas fa-calendar-alt"></i> Events
          </Link>
        </li>
        <li className="sidebar-item">
          <Link to="/admin/pages/contact" className="sidebar-link">
            <i className="fas fa-envelope"></i> Contact
          </Link>
        </li>
      </ul>
      {/* You can keep other admin links below if needed */}
    </div>
  );

  // Teacher sidebar
  const teacherSidebar = (
    <div className="sidebar">
      <ul className="sidebar-nav">
        <li className="sidebar-item">
          <Link to="/admin/dashboard" className="sidebar-link">
            <i className="fas fa-tachometer-alt"></i> Dashboard
          </Link>
        </li>
        <li className="sidebar-item">
          <Link to="/admin/students" className="sidebar-link">
            <i className="fas fa-user-graduate"></i> Students
          </Link>
        </li>
        <li className="sidebar-item">
          <Link to="/admin/classes" className="sidebar-link">
            <i className="fas fa-chalkboard"></i> Classes
          </Link>
        </li>
        <li className="sidebar-item">
          <Link to="/admin/attendance" className="sidebar-link">
            <i className="fas fa-calendar-check"></i> Attendance
          </Link>
        </li>
        <li className="sidebar-item">
          <Link to="/admin/results" className="sidebar-link">
            <i className="fas fa-chart-bar"></i> Results
          </Link>
        </li>
        <li className="sidebar-item">
          <Link to="/admin/library" className="sidebar-link">
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
          <Link to="/admin/dashboard" className="sidebar-link">
            <i className="fas fa-tachometer-alt"></i> Dashboard
          </Link>
        </li>
        <li className="sidebar-item">
          <Link to="/admin/attendance" className="sidebar-link">
            <i className="fas fa-calendar-check"></i> Attendance
          </Link>
        </li>
        <li className="sidebar-item">
          <Link to="/admin/fees" className="sidebar-link">
            <i className="fas fa-money-bill-wave"></i> Fees
          </Link>
        </li>
        <li className="sidebar-item">
          <Link to="/admin/results" className="sidebar-link">
            <i className="fas fa-chart-bar"></i> Results
          </Link>
        </li>
        <li className="sidebar-item">
          <Link to="/admin/library" className="sidebar-link">
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
          <Link to="/admin/dashboard" className="sidebar-link">
            <i className="fas fa-tachometer-alt"></i> Dashboard
          </Link>
        </li>
        <li className="sidebar-item">
          <Link to="/admin/library/books" className="sidebar-link">
            <i className="fas fa-book"></i> Books
          </Link>
        </li>
        <li className="sidebar-item">
          <Link to="/admin/library/issue" className="sidebar-link">
            <i className="fas fa-hand-holding"></i> Issue Book
          </Link>
        </li>
        <li className="sidebar-item">
          <Link to="/admin/library/return" className="sidebar-link">
            <i className="fas fa-undo"></i> Return Book
          </Link>
        </li>
        <li className="sidebar-item">
          <Link to="/admin/library/reports" className="sidebar-link">
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
          <Link to="/admin/dashboard" className="sidebar-link">
            <i className="fas fa-tachometer-alt"></i> Dashboard
          </Link>
        </li>
        <li className="sidebar-item">
          <Link to="/admin/facilities" className="sidebar-link">
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
