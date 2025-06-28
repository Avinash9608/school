import React, { useState, useEffect } from "react";
import axios from "axios";
import API_URL from "../../config/api";
import { useWebsite } from "../../context/WebsiteContext";
import "./FooterManager.css";

const FooterManager = () => {
  const [footers, setFooters] = useState([]);
  const [currentFooter, setCurrentFooter] = useState(null);
  const [loading, setLoading] = useState(true);
  const [editing, setEditing] = useState(false);
  const [formData, setFormData] = useState({
    companyInfo: {
      name: "Excellence Academy",
      description: "Excellence Academy is committed to providing quality education and fostering academic excellence.",
      logo: ""
    },
    contactInfo: {
      address: "123 Education Street, City, State 12345",
      phone: "+1 234 567 8900",
      email: "info@excellenceacademy.com",
      workingHours: "Monday - Friday: 8:00 AM - 4:00 PM"
    },
    quickLinks: [
      { title: "Home", url: "/", order: 1, isActive: true },
      { title: "About Us", url: "/about", order: 2, isActive: true },
      { title: "Academics", url: "/academics", order: 3, isActive: true },
      { title: "Admissions", url: "/admissions", order: 4, isActive: true },
      { title: "Facilities", url: "/facilities", order: 5, isActive: true },
      { title: "Contact", url: "/contact", order: 6, isActive: true }
    ],
    socialLinks: {
      facebook: "",
      twitter: "",
      instagram: "",
      linkedin: "",
      youtube: ""
    },
    newsletter: {
      title: "Subscribe to Our Newsletter",
      description: "Stay updated with our latest news and events",
      isActive: true
    },
    copyright: {
      text: "© 2024 Excellence Academy. All rights reserved.",
      links: [
        { title: "Privacy Policy", url: "/privacy" },
        { title: "Terms of Service", url: "/terms" }
      ]
    },
    isActive: true
  });

  const website = useWebsite();

  useEffect(() => {
    fetchFooters();
  }, []);

  const fetchFooters = async () => {
    try {
      const response = await axios.get(`${API_URL}/api/footer/admin`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      setFooters(response.data.data);
      if (response.data.data.length > 0) {
        setCurrentFooter(response.data.data[0]);
        setFormData(response.data.data[0]);
      }
    } catch (error) {
      console.error("Error fetching footers:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      if (currentFooter) {
        // Update existing footer
        const response = await axios.put(
          `${API_URL}/api/footer/admin/${currentFooter._id}`,
          formData,
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        );
        setCurrentFooter(response.data.data);
        setFooters(footers.map(f => f._id === currentFooter._id ? response.data.data : f));
        alert("Footer updated successfully!");
        website.refreshData();
      } else {
        // Create new footer
        const response = await axios.post(
          `${API_URL}/api/footer/admin`,
          formData,
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        );
        setFooters([response.data.data, ...footers]);
        setCurrentFooter(response.data.data);
        alert("Footer created successfully!");
        website.refreshData();
      }
      setEditing(false);
    } catch (error) {
      console.error("Error saving footer:", error);
      alert("Error saving footer");
    }
  };

  const handleInputChange = (section, field, value) => {
    setFormData(prev => ({
      ...prev,
      [section]: {
        ...prev[section],
        [field]: value
      }
    }));
  };

  const handleQuickLinkChange = (index, field, value) => {
    const newQuickLinks = [...formData.quickLinks];
    newQuickLinks[index] = {
      ...newQuickLinks[index],
      [field]: value
    };
    setFormData(prev => ({
      ...prev,
      quickLinks: newQuickLinks
    }));
  };

  const addQuickLink = () => {
    setFormData(prev => ({
      ...prev,
      quickLinks: [...prev.quickLinks, {
        title: "",
        url: "",
        order: prev.quickLinks.length + 1,
        isActive: true
      }]
    }));
  };

  const removeQuickLink = (index) => {
    setFormData(prev => ({
      ...prev,
      quickLinks: prev.quickLinks.filter((_, i) => i !== index)
    }));
  };

  const handleCopyrightLinkChange = (index, field, value) => {
    const newCopyrightLinks = [...formData.copyright.links];
    newCopyrightLinks[index] = {
      ...newCopyrightLinks[index],
      [field]: value
    };
    setFormData(prev => ({
      ...prev,
      copyright: {
        ...prev.copyright,
        links: newCopyrightLinks
      }
    }));
  };

  const addCopyrightLink = () => {
    setFormData(prev => ({
      ...prev,
      copyright: {
        ...prev.copyright,
        links: [...prev.copyright.links, {
          title: "",
          url: ""
        }]
      }
    }));
  };

  const removeCopyrightLink = (index) => {
    setFormData(prev => ({
      ...prev,
      copyright: {
        ...prev.copyright,
        links: prev.copyright.links.filter((_, i) => i !== index)
      }
    }));
  };

  if (loading) {
    return <div className="footer-manager">Loading...</div>;
  }

  return (
    <div className="footer-manager">
      <div className="footer-manager-header">
        <h2>Footer Manager</h2>
        <div className="footer-actions">
          {!editing ? (
            <button onClick={() => setEditing(true)} className="edit-btn">
              Edit Footer
            </button>
          ) : (
            <button onClick={() => setEditing(false)} className="cancel-btn">
              Cancel
            </button>
          )}
        </div>
      </div>

      {editing ? (
        <form onSubmit={handleSubmit} className="footer-form">
          {/* Company Info Section */}
          <div className="form-section">
            <h3>Company Information</h3>
            <div className="form-group">
              <label>Company Name:</label>
              <input
                type="text"
                value={formData.companyInfo.name}
                onChange={(e) => handleInputChange("companyInfo", "name", e.target.value)}
                placeholder="Company Name"
              />
            </div>
            <div className="form-group">
              <label>Description:</label>
              <textarea
                value={formData.companyInfo.description}
                onChange={(e) => handleInputChange("companyInfo", "description", e.target.value)}
                placeholder="Company description"
                rows="3"
              />
            </div>
            <div className="form-group">
              <label>Logo URL:</label>
              <input
                type="text"
                value={formData.companyInfo.logo}
                onChange={(e) => handleInputChange("companyInfo", "logo", e.target.value)}
                placeholder="https://example.com/logo.png"
              />
            </div>
          </div>

          {/* Contact Info Section */}
          <div className="form-section">
            <h3>Contact Information</h3>
            <div className="form-group">
              <label>Address:</label>
              <input
                type="text"
                value={formData.contactInfo.address}
                onChange={(e) => handleInputChange("contactInfo", "address", e.target.value)}
                placeholder="Company Address"
              />
            </div>
            <div className="form-row">
              <div className="form-group">
                <label>Phone:</label>
                <input
                  type="text"
                  value={formData.contactInfo.phone}
                  onChange={(e) => handleInputChange("contactInfo", "phone", e.target.value)}
                  placeholder="+1 234 567 8900"
                />
              </div>
              <div className="form-group">
                <label>Email:</label>
                <input
                  type="email"
                  value={formData.contactInfo.email}
                  onChange={(e) => handleInputChange("contactInfo", "email", e.target.value)}
                  placeholder="info@company.com"
                />
              </div>
            </div>
            <div className="form-group">
              <label>Working Hours:</label>
              <input
                type="text"
                value={formData.contactInfo.workingHours}
                onChange={(e) => handleInputChange("contactInfo", "workingHours", e.target.value)}
                placeholder="Monday - Friday: 9:00 AM - 5:00 PM"
              />
            </div>
          </div>

          {/* Quick Links Section */}
          <div className="form-section">
            <h3>Quick Links</h3>
            {formData.quickLinks.map((link, index) => (
              <div key={index} className="quick-link-item">
                <div className="link-item-header">
                  <h4>Link {index + 1}</h4>
                  <button
                    type="button"
                    onClick={() => removeQuickLink(index)}
                    className="remove-btn"
                  >
                    Remove
                  </button>
                </div>
                <div className="form-row">
                  <div className="form-group">
                    <label>Title:</label>
                    <input
                      type="text"
                      value={link.title}
                      onChange={(e) => handleQuickLinkChange(index, "title", e.target.value)}
                      placeholder="Link Title"
                    />
                  </div>
                  <div className="form-group">
                    <label>URL:</label>
                    <input
                      type="text"
                      value={link.url}
                      onChange={(e) => handleQuickLinkChange(index, "url", e.target.value)}
                      placeholder="/page-url"
                    />
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group">
                    <label>Order:</label>
                    <input
                      type="number"
                      value={link.order}
                      onChange={(e) => handleQuickLinkChange(index, "order", parseInt(e.target.value))}
                      min="1"
                    />
                  </div>
                  <div className="form-group checkbox-group">
                    <label>
                      <input
                        type="checkbox"
                        checked={link.isActive}
                        onChange={(e) => handleQuickLinkChange(index, "isActive", e.target.checked)}
                      />
                      Active
                    </label>
                  </div>
                </div>
              </div>
            ))}
            <button
              type="button"
              onClick={addQuickLink}
              className="add-btn"
            >
              Add Quick Link
            </button>
          </div>

          {/* Social Links Section */}
          <div className="form-section">
            <h3>Social Media Links</h3>
            <div className="form-row">
              <div className="form-group">
                <label>Facebook:</label>
                <input
                  type="url"
                  value={formData.socialLinks.facebook}
                  onChange={(e) => handleInputChange("socialLinks", "facebook", e.target.value)}
                  placeholder="https://facebook.com/company"
                />
              </div>
              <div className="form-group">
                <label>Twitter:</label>
                <input
                  type="url"
                  value={formData.socialLinks.twitter}
                  onChange={(e) => handleInputChange("socialLinks", "twitter", e.target.value)}
                  placeholder="https://twitter.com/company"
                />
              </div>
            </div>
            <div className="form-row">
              <div className="form-group">
                <label>Instagram:</label>
                <input
                  type="url"
                  value={formData.socialLinks.instagram}
                  onChange={(e) => handleInputChange("socialLinks", "instagram", e.target.value)}
                  placeholder="https://instagram.com/company"
                />
              </div>
              <div className="form-group">
                <label>LinkedIn:</label>
                <input
                  type="url"
                  value={formData.socialLinks.linkedin}
                  onChange={(e) => handleInputChange("socialLinks", "linkedin", e.target.value)}
                  placeholder="https://linkedin.com/company"
                />
              </div>
            </div>
            <div className="form-group">
              <label>YouTube:</label>
              <input
                type="url"
                value={formData.socialLinks.youtube}
                onChange={(e) => handleInputChange("socialLinks", "youtube", e.target.value)}
                placeholder="https://youtube.com/company"
              />
            </div>
          </div>

          {/* Newsletter Section */}
          <div className="form-section">
            <h3>Newsletter</h3>
            <div className="form-group">
              <label>Title:</label>
              <input
                type="text"
                value={formData.newsletter.title}
                onChange={(e) => handleInputChange("newsletter", "title", e.target.value)}
                placeholder="Subscribe to Our Newsletter"
              />
            </div>
            <div className="form-group">
              <label>Description:</label>
              <textarea
                value={formData.newsletter.description}
                onChange={(e) => handleInputChange("newsletter", "description", e.target.value)}
                placeholder="Newsletter description"
                rows="2"
              />
            </div>
            <div className="form-group checkbox-group">
              <label>
                <input
                  type="checkbox"
                  checked={formData.newsletter.isActive}
                  onChange={(e) => handleInputChange("newsletter", "isActive", e.target.checked)}
                />
                Active
              </label>
            </div>
          </div>

          {/* Copyright Section */}
          <div className="form-section">
            <h3>Copyright</h3>
            <div className="form-group">
              <label>Copyright Text:</label>
              <input
                type="text"
                value={formData.copyright.text}
                onChange={(e) => handleInputChange("copyright", "text", e.target.value)}
                placeholder="© 2024 Company Name. All rights reserved."
              />
            </div>
            
            <h4>Copyright Links</h4>
            {formData.copyright.links.map((link, index) => (
              <div key={index} className="copyright-link-item">
                <div className="link-item-header">
                  <h5>Link {index + 1}</h5>
                  <button
                    type="button"
                    onClick={() => removeCopyrightLink(index)}
                    className="remove-btn small"
                  >
                    Remove
                  </button>
                </div>
                <div className="form-row">
                  <div className="form-group">
                    <label>Title:</label>
                    <input
                      type="text"
                      value={link.title}
                      onChange={(e) => handleCopyrightLinkChange(index, "title", e.target.value)}
                      placeholder="Link Title"
                    />
                  </div>
                  <div className="form-group">
                    <label>URL:</label>
                    <input
                      type="text"
                      value={link.url}
                      onChange={(e) => handleCopyrightLinkChange(index, "url", e.target.value)}
                      placeholder="/page-url"
                    />
                  </div>
                </div>
              </div>
            ))}
            <button
              type="button"
              onClick={addCopyrightLink}
              className="add-btn"
            >
              Add Copyright Link
            </button>
          </div>

          <div className="form-actions">
            <button type="submit" className="save-btn">
              {currentFooter ? "Update Footer" : "Create Footer"}
            </button>
          </div>
        </form>
      ) : (
        <div className="footer-preview">
          <h3>Current Footer Preview</h3>
          {currentFooter ? (
            <div className="preview-content">
              <div className="preview-section">
                <h4>Company Info</h4>
                <p><strong>Name:</strong> {currentFooter.companyInfo.name}</p>
                <p><strong>Description:</strong> {currentFooter.companyInfo.description}</p>
                {currentFooter.companyInfo.logo && (
                  <p><strong>Logo:</strong> {currentFooter.companyInfo.logo}</p>
                )}
              </div>
              
              <div className="preview-section">
                <h4>Contact Info</h4>
                <p><strong>Address:</strong> {currentFooter.contactInfo.address}</p>
                <p><strong>Phone:</strong> {currentFooter.contactInfo.phone}</p>
                <p><strong>Email:</strong> {currentFooter.contactInfo.email}</p>
                <p><strong>Hours:</strong> {currentFooter.contactInfo.workingHours}</p>
              </div>

              <div className="preview-section">
                <h4>Quick Links ({currentFooter.quickLinks.length} items)</h4>
                <ul>
                  {currentFooter.quickLinks.map((link, index) => (
                    <li key={index}>
                      {link.title} ({link.url}) - {link.isActive ? "Active" : "Inactive"}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="preview-section">
                <h4>Social Links</h4>
                {Object.entries(currentFooter.socialLinks).map(([platform, url]) => (
                  url && <p key={platform}><strong>{platform}:</strong> {url}</p>
                ))}
              </div>

              <div className="preview-section">
                <h4>Newsletter</h4>
                <p><strong>Title:</strong> {currentFooter.newsletter.title}</p>
                <p><strong>Description:</strong> {currentFooter.newsletter.description}</p>
                <p><strong>Active:</strong> {currentFooter.newsletter.isActive ? "Yes" : "No"}</p>
              </div>

              <div className="preview-section">
                <h4>Copyright</h4>
                <p><strong>Text:</strong> {currentFooter.copyright.text}</p>
                <p><strong>Links:</strong> {currentFooter.copyright.links.length} items</p>
                <ul>
                  {currentFooter.copyright.links.map((link, index) => (
                    <li key={index}>{link.title} ({link.url})</li>
                  ))}
                </ul>
              </div>
            </div>
          ) : (
            <p>No footer configured yet. Click "Edit Footer" to create one.</p>
          )}
        </div>
      )}
    </div>
  );
};

export default FooterManager; 