import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { useWebsite } from "../../context/WebsiteContext";
import "./WebsiteHeader.css";

const WebsiteHeader = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const { header, loading } = useWebsite();

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

  // If loading or no header data, show loading state
  if (loading || !header) {
    return (
      <header className="website-header">
        <div className="main-header">
          <div className="header-container">
            <div className="logo">
              <div className="placeholder-logo">Loading...</div>
            </div>
          </div>
        </div>
      </header>
    );
  }

  return (
    <header className={`website-header ${isScrolled ? "scrolled" : ""}`}>
      <div className="main-header">
        <div className="header-container">
          <div className="logo">
            <Link to="/">
              {header.logo.image ? (
                <img src={header.logo.image} alt={header.logo.text} className="logo-image" />
              ) : (
                <div className="placeholder-logo">Logo</div>
              )}
              <div className="logo-text">
                <h1>{header.logo.text}</h1>
                <p>Nurturing Minds, Shaping Futures</p>
              </div>
            </Link>
          </div>
          
          {/* Contact Info */}
          <div className="header-contact">
            {header.contactInfo.phone && (
              <div className="contact-item">
                <i className="fas fa-phone"></i>
                <span>{header.contactInfo.phone}</span>
              </div>
            )}
            {header.contactInfo.email && (
              <div className="contact-item">
                <i className="fas fa-envelope"></i>
                <span>{header.contactInfo.email}</span>
              </div>
            )}
          </div>

          <div
            className="mobile-menu-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <i className={`fas ${mobileMenuOpen ? "fa-times" : "fa-bars"}`}></i>
          </div>
          
          <nav className={`main-nav ${mobileMenuOpen ? "open" : ""}`}>
            <ul className="nav-menu">
              {header.navigation
                .filter(item => item.isActive)
                .sort((a, b) => a.order - b.order)
                .map((item, index) => (
                  <li
                    key={index}
                    className={`${item.hasSubmenu ? 'has-dropdown' : ''} ${
                      location.pathname === item.url || 
                      (item.hasSubmenu && location.pathname.startsWith(item.url)) 
                        ? "active" 
                        : ""
                    }`}
                  >
                    <Link to={item.url} onClick={toggleDropdown}>
                      {item.title}
                    </Link>
                    {item.hasSubmenu && item.submenu && item.submenu.length > 0 && (
                      <ul className="dropdown-menu">
                        {item.submenu
                          .filter(subItem => subItem.isActive)
                          .sort((a, b) => a.order - b.order)
                          .map((subItem, subIndex) => (
                            <li key={subIndex}>
                              <Link to={subItem.url}>{subItem.title}</Link>
                            </li>
                          ))}
                      </ul>
                    )}
                  </li>
                ))}
            </ul>
          </nav>
          
          <div className="header-buttons">
            {header.ctaButton && header.ctaButton.isActive && (
              <Link to={header.ctaButton.url} className="btn btn-primary">
                {header.ctaButton.text}
              </Link>
            )}
            {header.loginButton && header.loginButton.isActive && (
              <Link to={header.loginButton.url} className="btn btn-secondary">
                {header.loginButton.text}
              </Link>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default WebsiteHeader;
