import React from "react";
import { Link } from "react-router-dom";
import "./WebsiteFooter.css";

const WebsiteFooter = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="website-footer">
      <div className="footer-top">
        <div className="footer-container">
          <div className="footer-column">
            <div className="footer-logo">
              <div className="placeholder-logo">Logo</div>
              <h2>Excellence Academy</h2>
            </div>
            <p className="footer-about">
              Excellence Academy is a premier educational institution committed
              to providing high-quality education in a nurturing environment.
              Established in 1995, our school has been a beacon of academic
              excellence and holistic development.
            </p>
            <div className="footer-social">
              <a href="#" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-youtube"></i>
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>
          <div className="footer-column">
            <h3>Quick Links</h3>
            <ul className="footer-links">
              <li>
                <Link to="/about">About Us</Link>
              </li>
              <li>
                <Link to="/academics">Academics</Link>
              </li>
              <li>
                <Link to="/admissions">Admissions</Link>
              </li>
              <li>
                <Link to="/facilities">Facilities</Link>
              </li>
              <li>
                <Link to="/gallery">Gallery</Link>
              </li>
              <li>
                <Link to="/events">Events</Link>
              </li>
              <li>
                <Link to="/contact">Contact Us</Link>
              </li>
            </ul>
          </div>
          <div className="footer-column">
            <h3>Useful Links</h3>
            <ul className="footer-links">
              <li>
                <Link to="/careers">Careers</Link>
              </li>
              <li>
                <Link to="/alumni">Alumni</Link>
              </li>
              <li>
                <Link to="/news">News & Updates</Link>
              </li>
              <li>
                <Link to="/downloads">Downloads</Link>
              </li>
              <li>
                <Link to="/faq">FAQs</Link>
              </li>
              <li>
                <Link to="/privacy-policy">Privacy Policy</Link>
              </li>
              <li>
                <Link to="/terms-conditions">Terms & Conditions</Link>
              </li>
            </ul>
          </div>
          <div className="footer-column">
            <h3>Contact Us</h3>
            <ul className="footer-contact">
              <li>
                <i className="fas fa-map-marker-alt"></i>
                <span>
                  Excellence Academy, 123 Education Street, Knowledge City -
                  110001
                </span>
              </li>
              <li>
                <i className="fas fa-phone-alt"></i>
                <span>+91 98765 43210</span>
              </li>
              <li>
                <i className="fas fa-envelope"></i>
                <span>info@excellenceacademy.edu</span>
              </li>
              <li>
                <i className="fas fa-clock"></i>
                <span>Monday to Friday: 8:00 AM - 4:00 PM</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="footer-container">
          <p>&copy; {currentYear} Excellence Academy. All Rights Reserved.</p>
          <div className="footer-bottom-links">
            <Link to="/privacy-policy">Privacy Policy</Link>
            <Link to="/terms-conditions">Terms & Conditions</Link>
            <Link to="/sitemap">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default WebsiteFooter;
