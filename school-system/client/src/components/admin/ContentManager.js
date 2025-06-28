import React, { useState, useEffect } from "react";
import axios from "axios";
import API_URL from "../../config/api";
import "./ContentManager.css";

const ContentManager = () => {
  const [pages, setPages] = useState([]);
  const [selectedPage, setSelectedPage] = useState("");
  const [content, setContent] = useState([]);
  const [loading, setLoading] = useState(true);
  const [editingContent, setEditingContent] = useState(null);
  const [newContent, setNewContent] = useState({
    section: "",
    type: "text",
    title: "",
    content: "",
    order: 0,
  });

  // Predefined page sections for the website
  const websiteSections = {
    home: [
      { section: "hero", type: "hero", title: "Hero Section", content: "Welcome to Excellence Academy" },
      { section: "about", type: "text", title: "About Section", content: "About our school" },
      { section: "features", type: "list", title: "Key Features", content: "Our key features" },
      { section: "facilities", type: "gallery", title: "Facilities Preview", content: "Our facilities" },
      { section: "events", type: "list", title: "Upcoming Events", content: "School events" },
      { section: "testimonials", type: "list", title: "Testimonials", content: "Student and parent testimonials" },
      { section: "cta", type: "text", title: "Call to Action", content: "Join our school" }
    ],
    about: [
      { section: "hero", type: "hero", title: "About Hero", content: "About Excellence Academy" },
      { section: "history", type: "text", title: "Our History", content: "School history" },
      { section: "vision", type: "text", title: "Vision & Mission", content: "Our vision and mission" },
      { section: "principal", type: "text", title: "Principal's Message", content: "Message from principal" },
      { section: "achievements", type: "list", title: "Achievements", content: "School achievements" },
      { section: "stats", type: "list", title: "School Statistics", content: "Key statistics" }
    ],
    academics: [
      { section: "hero", type: "hero", title: "Academics Hero", content: "Academic Excellence" },
      { section: "curriculum", type: "text", title: "Curriculum", content: "Our curriculum" },
      { section: "departments", type: "list", title: "Departments", content: "Academic departments" },
      { section: "faculty", type: "gallery", title: "Faculty", content: "Our faculty" },
      { section: "examinations", type: "text", title: "Examinations", content: "Examination system" },
      { section: "programs", type: "list", title: "Academic Programs", content: "Available programs" }
    ],
    admissions: [
      { section: "hero", type: "hero", title: "Admissions Hero", content: "Join Excellence Academy" },
      { section: "process", type: "text", title: "Admission Process", content: "How to apply" },
      { section: "requirements", type: "list", title: "Requirements", content: "Admission requirements" },
      { section: "fees", type: "table", title: "Fee Structure", content: "Fee details" },
      { section: "form", type: "form", title: "Application Form", content: "Online application" },
      { section: "contact", type: "text", title: "Contact Admissions", content: "Contact information" }
    ],
    facilities: [
      { section: "hero", type: "hero", title: "Facilities Hero", content: "World-Class Facilities" },
      { section: "classrooms", type: "gallery", title: "Classrooms", content: "Modern classrooms" },
      { section: "laboratories", type: "gallery", title: "Laboratories", content: "Science labs" },
      { section: "library", type: "gallery", title: "Library", content: "Learning resource center" },
      { section: "sports", type: "gallery", title: "Sports Facilities", content: "Sports complex" },
      { section: "transport", type: "gallery", title: "Transport", content: "Transportation services" }
    ],
    gallery: [
      { section: "hero", type: "hero", title: "Gallery Hero", content: "School Gallery" },
      { section: "events", type: "gallery", title: "Events Gallery", content: "Event photos" },
      { section: "activities", type: "gallery", title: "Activities", content: "Student activities" },
      { section: "facilities", type: "gallery", title: "Facilities", content: "Facility photos" }
    ],
    events: [
      { section: "hero", type: "hero", title: "Events Hero", content: "School Events" },
      { section: "upcoming", type: "list", title: "Upcoming Events", content: "Future events" },
      { section: "past", type: "list", title: "Past Events", content: "Previous events" },
      { section: "calendar", type: "table", title: "Event Calendar", content: "Event schedule" }
    ],
    contact: [
      { section: "hero", type: "hero", title: "Contact Hero", content: "Contact Us" },
      { section: "info", type: "text", title: "Contact Information", content: "Contact details" },
      { section: "map", type: "text", title: "Location", content: "School location" },
      { section: "form", type: "form", title: "Contact Form", content: "Send us a message" }
    ]
  };

  useEffect(() => {
    fetchPages();
  }, []);

  useEffect(() => {
    if (selectedPage) {
      fetchContent(selectedPage);
    }
  }, [selectedPage]);

  const fetchPages = async () => {
    try {
      const response = await axios.get(`${API_URL}/api/admin/pages`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      setPages(response.data.data);
      if (response.data.data.length > 0) {
        setSelectedPage(response.data.data[0]._id);
      }
    } catch (error) {
      console.error("Error fetching pages:", error);
    } finally {
      setLoading(false);
    }
  };

  const fetchContent = async (pageId) => {
    try {
      const response = await axios.get(`${API_URL}/api/admin/pages/${pageId}/content`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      setContent(response.data.data);
    } catch (error) {
      console.error("Error fetching content:", error);
    }
  };

  const handleCreateContent = async () => {
    if (!newContent.section || !newContent.content) {
      alert("Please fill in all required fields");
      return;
    }

    try {
      const response = await axios.post(
        `${API_URL}/api/admin/content`,
        {
          ...newContent,
          pageId: selectedPage,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      setContent([...content, response.data.data]);
      setNewContent({
        section: "",
        type: "text",
        title: "",
        content: "",
        order: 0,
      });
    } catch (error) {
      console.error("Error creating content:", error);
    }
  };

  const handleUpdateContent = async (contentId, updatedData) => {
    try {
      const response = await axios.put(
        `${API_URL}/api/admin/content/${contentId}`,
        updatedData,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      setContent(
        content.map((item) =>
          item._id === contentId ? response.data.data : item
        )
      );
      setEditingContent(null);
    } catch (error) {
      console.error("Error updating content:", error);
    }
  };

  const handleDeleteContent = async (contentId) => {
    if (window.confirm("Are you sure you want to delete this content?")) {
      try {
        await axios.delete(`${API_URL}/api/admin/content/${contentId}`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });
        setContent(content.filter((item) => item._id !== contentId));
      } catch (error) {
        console.error("Error deleting content:", error);
      }
    }
  };

  const handleQuickAddSections = async (pageSlug) => {
    const sections = websiteSections[pageSlug] || [];
    if (sections.length === 0) {
      alert("No predefined sections for this page");
      return;
    }

    try {
      const promises = sections.map((section, index) =>
        axios.post(
          `${API_URL}/api/admin/content`,
          {
            ...section,
            pageId: selectedPage,
            order: index,
          },
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        )
      );

      const responses = await Promise.all(promises);
      const newContentItems = responses.map(response => response.data.data);
      setContent([...content, ...newContentItems]);
      alert(`${sections.length} sections added successfully!`);
    } catch (error) {
      console.error("Error adding sections:", error);
      alert("Error adding sections");
    }
  };

  const getPageSlug = () => {
    const page = pages.find(p => p._id === selectedPage);
    return page ? page.slug : "";
  };

  if (loading) {
    return <div className="content-manager">Loading...</div>;
  }

  return (
    <div className="content-manager">
      <h2>Content Manager</h2>
      
      {/* Page Selection */}
      <div className="page-selector">
        <label htmlFor="page-select">Select Page:</label>
        <select
          id="page-select"
          value={selectedPage}
          onChange={(e) => setSelectedPage(e.target.value)}
        >
          {pages.map((page) => (
            <option key={page._id} value={page._id}>
              {page.title}
            </option>
          ))}
        </select>
      </div>

      {/* Quick Add Sections */}
      <div className="quick-add">
        <h3>Quick Add Predefined Sections</h3>
        <p>Add standard sections for this page type:</p>
        <button
          onClick={() => handleQuickAddSections(getPageSlug())}
          className="quick-add-btn"
        >
          Add Standard Sections for {getPageSlug() || "this page"}
        </button>
      </div>

      {/* Create New Content */}
      <div className="create-content">
        <h3>Create New Content</h3>
        <div className="content-form">
          <input
            type="text"
            placeholder="Section (e.g., hero, about, features)"
            value={newContent.section}
            onChange={(e) =>
              setNewContent({ ...newContent, section: e.target.value })
            }
          />
          <select
            value={newContent.type}
            onChange={(e) =>
              setNewContent({ ...newContent, type: e.target.value })
            }
          >
            <option value="text">Text</option>
            <option value="image">Image</option>
            <option value="gallery">Gallery</option>
            <option value="video">Video</option>
            <option value="form">Form</option>
            <option value="table">Table</option>
            <option value="list">List</option>
            <option value="hero">Hero</option>
            <option value="announcement">Announcement</option>
          </select>
          <input
            type="text"
            placeholder="Title (optional)"
            value={newContent.title}
            onChange={(e) =>
              setNewContent({ ...newContent, title: e.target.value })
            }
          />
          <textarea
            placeholder="Content"
            value={newContent.content}
            onChange={(e) =>
              setNewContent({ ...newContent, content: e.target.value })
            }
          />
          <input
            type="number"
            placeholder="Order"
            value={newContent.order}
            onChange={(e) =>
              setNewContent({ ...newContent, order: parseInt(e.target.value) })
            }
          />
          <button onClick={handleCreateContent} className="create-btn">
            Create Content
          </button>
        </div>
      </div>

      {/* Content List */}
      <div className="content-list">
        <h3>Page Content</h3>
        {content.length === 0 ? (
          <p>No content found for this page.</p>
        ) : (
          <div className="content-items">
            {content.map((item) => (
              <div key={item._id} className="content-item">
                {editingContent === item._id ? (
                  <div className="edit-form">
                    <input
                      type="text"
                      value={item.section}
                      onChange={(e) =>
                        setContent(
                          content.map((c) =>
                            c._id === item._id
                              ? { ...c, section: e.target.value }
                              : c
                          )
                        )
                      }
                    />
                    <select
                      value={item.type}
                      onChange={(e) =>
                        setContent(
                          content.map((c) =>
                            c._id === item._id
                              ? { ...c, type: e.target.value }
                              : c
                          )
                        )
                      }
                    >
                      <option value="text">Text</option>
                      <option value="image">Image</option>
                      <option value="gallery">Gallery</option>
                      <option value="video">Video</option>
                      <option value="form">Form</option>
                      <option value="table">Table</option>
                      <option value="list">List</option>
                      <option value="hero">Hero</option>
                      <option value="announcement">Announcement</option>
                    </select>
                    <input
                      type="text"
                      value={item.title || ""}
                      onChange={(e) =>
                        setContent(
                          content.map((c) =>
                            c._id === item._id
                              ? { ...c, title: e.target.value }
                              : c
                          )
                        )
                      }
                    />
                    <textarea
                      value={item.content}
                      onChange={(e) =>
                        setContent(
                          content.map((c) =>
                            c._id === item._id
                              ? { ...c, content: e.target.value }
                              : c
                          )
                        )
                      }
                    />
                    <input
                      type="number"
                      value={item.order}
                      onChange={(e) =>
                        setContent(
                          content.map((c) =>
                            c._id === item._id
                              ? { ...c, order: parseInt(e.target.value) }
                              : c
                          )
                        )
                      }
                    />
                    <div className="edit-actions">
                      <button
                        onClick={() =>
                          handleUpdateContent(item._id, {
                            section: item.section,
                            type: item.type,
                            title: item.title,
                            content: item.content,
                            order: item.order,
                          })
                        }
                        className="save-btn"
                      >
                        Save
                      </button>
                      <button
                        onClick={() => setEditingContent(null)}
                        className="cancel-btn"
                      >
                        Cancel
                      </button>
                    </div>
                  </div>
                ) : (
                  <div className="content-display">
                    <div className="content-header">
                      <h4>{item.section}</h4>
                      <span className="content-type">{item.type}</span>
                      <span className="content-order">Order: {item.order}</span>
                    </div>
                    {item.title && <h5>{item.title}</h5>}
                    <div className="content-preview">
                      {item.type === "text" ? (
                        <p>{item.content.substring(0, 100)}...</p>
                      ) : (
                        <p>[{item.type} content]</p>
                      )}
                    </div>
                    <div className="content-actions">
                      <button
                        onClick={() => setEditingContent(item._id)}
                        className="edit-btn"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => handleDeleteContent(item._id)}
                        className="delete-btn"
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ContentManager; 