import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "./WebsiteHeader.css";

const WebsiteHeader = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  // Handle scroll event to change header style
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  // Toggle dropdown on mobile
  const toggleDropdown = (e) => {
    if (window.innerWidth <= 992) {
      e.preventDefault();
      const parent = e.currentTarget.parentNode;
      parent.classList.toggle("active");
    }
  };

  return (
    <header className={`website-header ${isScrolled ? "scrolled" : ""}`}>
      <div className="main-header">
        <div className="header-container">
          <div className="logo">
            <Link to="/">
              <div className="placeholder-logo">Logo</div>
              <div className="logo-text">
                <h1>Excellence Academy</h1>
                <p>Nurturing Minds, Shaping Futures</p>
              </div>
            </Link>
          </div>
          <div
            className="mobile-menu-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <i className={`fas ${mobileMenuOpen ? "fa-times" : "fa-bars"}`}></i>
          </div>
          <nav className={`main-nav ${mobileMenuOpen ? "open" : ""}`}>
            <ul className="nav-menu">
              <li className={location.pathname === "/" ? "active" : ""}>
                <Link to="/">Home</Link>
              </li>
              <li
                className={`has-dropdown ${
                  location.pathname.includes("/about") ? "active" : ""
                }`}
              >
                <Link to="/about" onClick={toggleDropdown}>
                  About Us
                </Link>
                <ul className="dropdown-menu">
                  <li>
                    <Link to="/about/history">Our History</Link>
                  </li>
                  <li>
                    <Link to="/about/vision-mission">Vision & Mission</Link>
                  </li>
                  <li>
                    <Link to="/about/principal-message">
                      Principal's Message
                    </Link>
                  </li>
                  <li>
                    <Link to="/about/achievements">Achievements</Link>
                  </li>
                </ul>
              </li>
              <li
                className={`has-dropdown ${
                  location.pathname.includes("/academics") ? "active" : ""
                }`}
              >
                <Link to="/academics" onClick={toggleDropdown}>
                  Academics
                </Link>
                <ul className="dropdown-menu">
                  <li>
                    <Link to="/academics/curriculum">Curriculum</Link>
                  </li>
                  <li>
                    <Link to="/academics/faculty">Faculty</Link>
                  </li>
                  <li>
                    <Link to="/academics/departments">Departments</Link>
                  </li>
                  <li>
                    <Link to="/academics/examinations">Examinations</Link>
                  </li>
                </ul>
              </li>
              <li
                className={
                  location.pathname.includes("/admissions") ? "active" : ""
                }
              >
                <Link to="/admissions">Admissions</Link>
              </li>
              <li
                className={`has-dropdown ${
                  location.pathname.includes("/facilities") ? "active" : ""
                }`}
              >
                <Link to="/facilities" onClick={toggleDropdown}>
                  Facilities
                </Link>
                <ul className="dropdown-menu">
                  <li>
                    <Link to="/facilities/classrooms">Classrooms</Link>
                  </li>
                  <li>
                    <Link to="/facilities/laboratories">Laboratories</Link>
                  </li>
                  <li>
                    <Link to="/facilities/library">Library</Link>
                  </li>
                  <li>
                    <Link to="/facilities/sports">Sports</Link>
                  </li>
                  <li>
                    <Link to="/facilities/transport">Transport</Link>
                  </li>
                </ul>
              </li>
              <li
                className={
                  location.pathname.includes("/gallery") ? "active" : ""
                }
              >
                <Link to="/gallery">Gallery</Link>
              </li>
              <li
                className={
                  location.pathname.includes("/events") ? "active" : ""
                }
              >
                <Link to="/events">Events</Link>
              </li>
              <li
                className={
                  location.pathname.includes("/contact") ? "active" : ""
                }
              >
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </nav>
          <div className="header-buttons">
            <Link to="/login" className="btn btn-sm">
              Login
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default WebsiteHeader;
