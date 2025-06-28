import React from "react";
import { Link } from "react-router-dom";
import { useWebsite } from "../../context/WebsiteContext";
import "./WebsiteFooter.css";

const WebsiteFooter = () => {
  const currentYear = new Date().getFullYear();
  const { footer, loading } = useWebsite();

  // If loading or no footer data, show loading state
  if (loading || !footer) {
    return (
      <footer className="website-footer">
        <div className="footer-container">
          <p>Loading footer...</p>
        </div>
      </footer>
    );
  }

  return (
    <footer className="website-footer">
      <div className="footer-top">
        <div className="footer-container">
          <div className="footer-column">
            <div className="footer-logo">
              {footer.companyInfo.logo ? (
                <img src={footer.companyInfo.logo} alt={footer.companyInfo.name} className="footer-logo-img" />
              ) : (
                <div className="placeholder-logo">Logo</div>
              )}
              <h2>{footer.companyInfo.name}</h2>
            </div>
            <p className="footer-about">
              {footer.companyInfo.description}
            </p>
            <div className="footer-social">
              {footer.socialLinks.facebook && (
                <a href={footer.socialLinks.facebook} target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-facebook-f"></i>
                </a>
              )}
              {footer.socialLinks.twitter && (
                <a href={footer.socialLinks.twitter} target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-twitter"></i>
                </a>
              )}
              {footer.socialLinks.instagram && (
                <a href={footer.socialLinks.instagram} target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-instagram"></i>
                </a>
              )}
              {footer.socialLinks.youtube && (
                <a href={footer.socialLinks.youtube} target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-youtube"></i>
                </a>
              )}
              {footer.socialLinks.linkedin && (
                <a href={footer.socialLinks.linkedin} target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-linkedin-in"></i>
                </a>
              )}
            </div>
          </div>
          
          <div className="footer-column">
            <h3>Quick Links</h3>
            <ul className="footer-links">
              {footer.quickLinks
                .filter(link => link.isActive)
                .sort((a, b) => a.order - b.order)
                .map((link, index) => (
                  <li key={index}>
                    <Link to={link.url}>{link.title}</Link>
                  </li>
                ))}
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
              {footer.contactInfo.address && (
                <li>
                  <i className="fas fa-map-marker-alt"></i>
                  <span>{footer.contactInfo.address}</span>
                </li>
              )}
              {footer.contactInfo.phone && (
                <li>
                  <i className="fas fa-phone-alt"></i>
                  <span>{footer.contactInfo.phone}</span>
                </li>
              )}
              {footer.contactInfo.email && (
                <li>
                  <i className="fas fa-envelope"></i>
                  <span>{footer.contactInfo.email}</span>
                </li>
              )}
              {footer.contactInfo.workingHours && (
                <li>
                  <i className="fas fa-clock"></i>
                  <span>{footer.contactInfo.workingHours}</span>
                </li>
              )}
            </ul>
          </div>
        </div>
      </div>
      
      <div className="footer-bottom">
        <div className="footer-container">
          <p>{footer.copyright.text.replace('{year}', currentYear)}</p>
          <div className="footer-bottom-links">
            {footer.copyright.links.map((link, index) => (
              <Link key={index} to={link.url}>{link.title}</Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default WebsiteFooter;
