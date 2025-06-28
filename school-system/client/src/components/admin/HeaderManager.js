import React, { useState, useEffect } from "react";
import axios from "axios";
import API_URL from "../../config/api";
import { useWebsite } from "../../context/WebsiteContext";
import "./HeaderManager.css";

const HeaderManager = () => {
  const [headers, setHeaders] = useState([]);
  const [currentHeader, setCurrentHeader] = useState(null);
  const [loading, setLoading] = useState(true);
  const [editing, setEditing] = useState(false);
  const [formData, setFormData] = useState({
    logo: {
      text: "Excellence Academy",
      image: ""
    },
    contactInfo: {
      phone: "+1 234 567 8900",
      email: "info@excellenceacademy.com",
      address: "123 Education Street, City, State 12345"
    },
    navigation: [
      { title: "Home", url: "/", order: 1, isActive: true, hasSubmenu: false, submenu: [] },
      { title: "About Us", url: "/about", order: 2, isActive: true, hasSubmenu: true, submenu: [
        { title: "Our History", url: "/about/history", order: 1, isActive: true },
        { title: "Vision Mission", url: "/about/vision-mission", order: 2, isActive: true },
        { title: "Principal Message", url: "/about/principal-message", order: 3, isActive: true },
        { title: "Achievements", url: "/about/achievements", order: 4, isActive: true }
      ]},
      { title: "Academics", url: "/academics", order: 3, isActive: true, hasSubmenu: true, submenu: [
        { title: "Curriculum", url: "/academics/curriculum", order: 1, isActive: true },
        { title: "Faculty", url: "/academics/faculty", order: 2, isActive: true },
        { title: "Departments", url: "/academics/departments", order: 3, isActive: true },
        { title: "Examinations", url: "/academics/examinations", order: 4, isActive: true }
      ]},
      { title: "Admissions", url: "/admissions", order: 4, isActive: true, hasSubmenu: false, submenu: [] },
      { title: "Facilities", url: "/facilities", order: 5, isActive: true, hasSubmenu: true, submenu: [
        { title: "Classrooms", url: "/facilities/classrooms", order: 1, isActive: true },
        { title: "Laboratories", url: "/facilities/laboratories", order: 2, isActive: true },
        { title: "Sports", url: "/facilities/sports", order: 3, isActive: true },
        { title: "Transport", url: "/facilities/transport", order: 4, isActive: true },
        { title: "Library", url: "/facilities/library", order: 5, isActive: true }
      ]},
      { title: "Gallery", url: "/gallery", order: 6, isActive: true, hasSubmenu: false, submenu: [] },
      { title: "Events", url: "/events", order: 7, isActive: true, hasSubmenu: false, submenu: [] },
      { title: "Contact", url: "/contact", order: 8, isActive: true, hasSubmenu: false, submenu: [] }
    ],
    ctaButton: {
      text: "Apply Now",
      url: "/admissions",
      isActive: true
    },
    loginButton: {
      text: "Login",
      url: "/admin/login",
      isActive: true
    },
    isActive: true
  });

  const website = useWebsite();

  useEffect(() => {
    fetchHeaders();
  }, []);

  const fetchHeaders = async () => {
    try {
      const response = await axios.get(`${API_URL}/api/header/admin`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      setHeaders(response.data.data);
      if (response.data.data.length > 0) {
        setCurrentHeader(response.data.data[0]);
        setFormData(response.data.data[0]);
      }
    } catch (error) {
      console.error("Error fetching headers:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      if (currentHeader) {
        // Update existing header
        const response = await axios.put(
          `${API_URL}/api/header/admin/${currentHeader._id}`,
          formData,
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        );
        setCurrentHeader(response.data.data);
        setHeaders(headers.map(h => h._id === currentHeader._id ? response.data.data : h));
        alert("Header updated successfully!");
      } else {
        // Create new header
        const response = await axios.post(
          `${API_URL}/api/header/admin`,
          formData,
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        );
        setHeaders([response.data.data, ...headers]);
        setCurrentHeader(response.data.data);
        alert("Header created successfully!");
      }
      setEditing(false);
      website.refreshData();
    } catch (error) {
      console.error("Error saving header:", error);
      alert("Error saving header");
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

  const handleNavigationChange = (index, field, value) => {
    const newNavigation = [...formData.navigation];
    newNavigation[index] = {
      ...newNavigation[index],
      [field]: value
    };
    setFormData(prev => ({
      ...prev,
      navigation: newNavigation
    }));
  };

  const handleSubmenuChange = (navIndex, subIndex, field, value) => {
    const newNavigation = [...formData.navigation];
    newNavigation[navIndex].submenu[subIndex] = {
      ...newNavigation[navIndex].submenu[subIndex],
      [field]: value
    };
    setFormData(prev => ({
      ...prev,
      navigation: newNavigation
    }));
  };

  const addNavigationItem = () => {
    setFormData(prev => ({
      ...prev,
      navigation: [...prev.navigation, {
        title: "",
        url: "",
        order: prev.navigation.length + 1,
        isActive: true,
        hasSubmenu: false,
        submenu: []
      }]
    }));
  };

  const removeNavigationItem = (index) => {
    setFormData(prev => ({
      ...prev,
      navigation: prev.navigation.filter((_, i) => i !== index)
    }));
  };

  const addSubmenuItem = (navIndex) => {
    const newNavigation = [...formData.navigation];
    newNavigation[navIndex].submenu.push({
      title: "",
      url: "",
      order: newNavigation[navIndex].submenu.length + 1,
      isActive: true
    });
    setFormData(prev => ({
      ...prev,
      navigation: newNavigation
    }));
  };

  const removeSubmenuItem = (navIndex, subIndex) => {
    const newNavigation = [...formData.navigation];
    newNavigation[navIndex].submenu = newNavigation[navIndex].submenu.filter((_, i) => i !== subIndex);
    setFormData(prev => ({
      ...prev,
      navigation: newNavigation
    }));
  };

  if (loading) {
    return <div className="header-manager">Loading...</div>;
  }

  return (
    <div className="header-manager">
      <div className="header-manager-header">
        <h2>Header Manager</h2>
        <div className="header-actions">
          {!editing ? (
            <button onClick={() => setEditing(true)} className="edit-btn">
              Edit Header
            </button>
          ) : (
            <button onClick={() => setEditing(false)} className="cancel-btn">
              Cancel
            </button>
          )}
        </div>
      </div>

      {editing ? (
        <form onSubmit={handleSubmit} className="header-form">
          {/* Logo Section */}
          <div className="form-section">
            <h3>Logo</h3>
            <div className="form-group">
              <label>Logo Text:</label>
              <input
                type="text"
                value={formData.logo.text}
                onChange={(e) => handleInputChange("logo", "text", e.target.value)}
                placeholder="School Name"
              />
            </div>
            <div className="form-group">
              <label>Logo Image URL:</label>
              <input
                type="text"
                value={formData.logo.image}
                onChange={(e) => handleInputChange("logo", "image", e.target.value)}
                placeholder="https://example.com/logo.png"
              />
            </div>
          </div>

          {/* Contact Info Section */}
          <div className="form-section">
            <h3>Contact Information</h3>
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
                  placeholder="info@school.com"
                />
              </div>
            </div>
            <div className="form-group">
              <label>Address:</label>
              <input
                type="text"
                value={formData.contactInfo.address}
                onChange={(e) => handleInputChange("contactInfo", "address", e.target.value)}
                placeholder="School Address"
              />
            </div>
          </div>

          {/* Navigation Section */}
          <div className="form-section">
            <h3>Navigation Menu</h3>
            {formData.navigation.map((item, index) => (
              <div key={index} className="navigation-item">
                <div className="nav-item-header">
                  <h4>Menu Item {index + 1}</h4>
                  <button
                    type="button"
                    onClick={() => removeNavigationItem(index)}
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
                      value={item.title}
                      onChange={(e) => handleNavigationChange(index, "title", e.target.value)}
                      placeholder="Menu Title"
                    />
                  </div>
                  <div className="form-group">
                    <label>URL:</label>
                    <input
                      type="text"
                      value={item.url}
                      onChange={(e) => handleNavigationChange(index, "url", e.target.value)}
                      placeholder="/page-url"
                    />
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group">
                    <label>Order:</label>
                    <input
                      type="number"
                      value={item.order}
                      onChange={(e) => handleNavigationChange(index, "order", parseInt(e.target.value))}
                      min="1"
                    />
                  </div>
                  <div className="form-group checkbox-group">
                    <label>
                      <input
                        type="checkbox"
                        checked={item.isActive}
                        onChange={(e) => handleNavigationChange(index, "isActive", e.target.checked)}
                      />
                      Active
                    </label>
                    <label>
                      <input
                        type="checkbox"
                        checked={item.hasSubmenu}
                        onChange={(e) => handleNavigationChange(index, "hasSubmenu", e.target.checked)}
                      />
                      Has Submenu
                      </label>
                  </div>
                </div>

                {/* Submenu Items */}
                {item.hasSubmenu && (
                  <div className="submenu-section">
                    <h5>Submenu Items</h5>
                    {item.submenu.map((subItem, subIndex) => (
                      <div key={subIndex} className="submenu-item">
                        <div className="form-row">
                          <div className="form-group">
                            <label>Title:</label>
                            <input
                              type="text"
                              value={subItem.title}
                              onChange={(e) => handleSubmenuChange(index, subIndex, "title", e.target.value)}
                              placeholder="Submenu Title"
                            />
                          </div>
                          <div className="form-group">
                            <label>URL:</label>
                            <input
                              type="text"
                              value={subItem.url}
                              onChange={(e) => handleSubmenuChange(index, subIndex, "url", e.target.value)}
                              placeholder="/submenu-url"
                            />
                          </div>
                        </div>
                        <div className="form-row">
                          <div className="form-group">
                            <label>Order:</label>
                            <input
                              type="number"
                              value={subItem.order}
                              onChange={(e) => handleSubmenuChange(index, subIndex, "order", parseInt(e.target.value))}
                              min="1"
                            />
                          </div>
                          <div className="form-group checkbox-group">
                            <label>
                              <input
                                type="checkbox"
                                checked={subItem.isActive}
                                onChange={(e) => handleSubmenuChange(index, subIndex, "isActive", e.target.checked)}
                              />
                              Active
                            </label>
                          </div>
                          <button
                            type="button"
                            onClick={() => removeSubmenuItem(index, subIndex)}
                            className="remove-btn small"
                          >
                            Remove
                          </button>
                        </div>
                      </div>
                    ))}
                    <button
                      type="button"
                      onClick={() => addSubmenuItem(index)}
                      className="add-btn"
                    >
                      Add Submenu Item
                    </button>
                  </div>
                )}
              </div>
            ))}
            <button
              type="button"
              onClick={addNavigationItem}
              className="add-btn"
            >
              Add Navigation Item
            </button>
          </div>

          {/* CTA Button Section */}
          <div className="form-section">
            <h3>Call-to-Action Button</h3>
            <div className="form-row">
              <div className="form-group">
                <label>Button Text:</label>
                <input
                  type="text"
                  value={formData.ctaButton.text}
                  onChange={(e) => handleInputChange("ctaButton", "text", e.target.value)}
                  placeholder="Apply Now"
                />
              </div>
              <div className="form-group">
                <label>Button URL:</label>
                <input
                  type="text"
                  value={formData.ctaButton.url}
                  onChange={(e) => handleInputChange("ctaButton", "url", e.target.value)}
                  placeholder="/admissions"
                />
              </div>
            </div>
            <div className="form-group">
              <label className="checkbox-label">
                <input
                  type="checkbox"
                  checked={formData.ctaButton.isActive}
                  onChange={(e) => handleInputChange("ctaButton", "isActive", e.target.checked)}
                />
                Active
              </label>
            </div>
          </div>

          {/* Login Button Section */}
          <div className="form-section">
            <h3>Login Button</h3>
            <div className="form-row">
              <div className="form-group">
                <label>Button Text:</label>
                <input
                  type="text"
                  value={formData.loginButton.text}
                  onChange={(e) => handleInputChange("loginButton", "text", e.target.value)}
                  placeholder="Login"
                />
              </div>
              <div className="form-group">
                <label>Button URL:</label>
                <input
                  type="text"
                  value={formData.loginButton.url}
                  onChange={(e) => handleInputChange("loginButton", "url", e.target.value)}
                  placeholder="/admin/login"
                />
              </div>
            </div>
            <div className="form-group">
              <label className="checkbox-label">
                <input
                  type="checkbox"
                  checked={formData.loginButton.isActive}
                  onChange={(e) => handleInputChange("loginButton", "isActive", e.target.checked)}
                />
                Active
              </label>
            </div>
          </div>

          <div className="form-actions">
            <button type="submit" className="save-btn">
              {currentHeader ? "Update Header" : "Create Header"}
            </button>
          </div>
        </form>
      ) : (
        <div className="header-preview">
          <h3>Current Header Preview</h3>
          {currentHeader ? (
            <div className="preview-content">
              <div className="preview-section">
                <h4>Logo</h4>
                <p><strong>Text:</strong> {currentHeader.logo.text}</p>
                {currentHeader.logo.image && (
                  <p><strong>Image:</strong> {currentHeader.logo.image}</p>
                )}
              </div>
              
              <div className="preview-section">
                <h4>Contact Info</h4>
                <p><strong>Phone:</strong> {currentHeader.contactInfo.phone}</p>
                <p><strong>Email:</strong> {currentHeader.contactInfo.email}</p>
                <p><strong>Address:</strong> {currentHeader.contactInfo.address}</p>
              </div>

              <div className="preview-section">
                <h4>Navigation ({currentHeader.navigation.length} items)</h4>
                <ul>
                  {currentHeader.navigation.map((item, index) => (
                    <li key={index}>
                      {item.title} ({item.url}) {item.hasSubmenu && `- ${item.submenu.length} subitems`}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="preview-section">
                <h4>CTA Button</h4>
                <p><strong>Text:</strong> {currentHeader.ctaButton.text}</p>
                <p><strong>URL:</strong> {currentHeader.ctaButton.url}</p>
                <p><strong>Active:</strong> {currentHeader.ctaButton.isActive ? "Yes" : "No"}</p>
              </div>
            </div>
          ) : (
            <p>No header configured yet. Click "Edit Header" to create one.</p>
          )}
        </div>
      )}
    </div>
  );
};

export default HeaderManager; 