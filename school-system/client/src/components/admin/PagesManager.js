import React, { useState, useEffect } from "react";
import axios from "axios";
import API_URL from "../../config/api";
import "./PagesManager.css";

const PagesManager = () => {
  const [pages, setPages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [editingPage, setEditingPage] = useState(null);
  const [newPage, setNewPage] = useState({
    title: "",
    slug: "",
    description: "",
    template: "default",
    isActive: true,
    isPublished: true,
    order: 0,
  });

  useEffect(() => {
    fetchPages();
  }, []);

  const fetchPages = async () => {
    try {
      const response = await axios.get(`${API_URL}/api/admin/pages`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      setPages(response.data.data);
    } catch (error) {
      console.error("Error fetching pages:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleCreatePage = async () => {
    if (!newPage.title || !newPage.slug) {
      alert("Please fill in title and slug");
      return;
    }

    try {
      const response = await axios.post(
        `${API_URL}/api/admin/pages`,
        newPage,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      setPages([...pages, response.data.data]);
      setNewPage({
        title: "",
        slug: "",
        description: "",
        template: "default",
        isActive: true,
        isPublished: true,
        order: 0,
      });
    } catch (error) {
      console.error("Error creating page:", error);
    }
  };

  const handleUpdatePage = async (pageId, updatedData) => {
    try {
      const response = await axios.put(
        `${API_URL}/api/admin/pages/${pageId}`,
        updatedData,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      setPages(
        pages.map((page) =>
          page._id === pageId ? response.data.data : page
        )
      );
      setEditingPage(null);
    } catch (error) {
      console.error("Error updating page:", error);
    }
  };

  const handleDeletePage = async (pageId) => {
    if (window.confirm("Are you sure you want to delete this page?")) {
      try {
        await axios.delete(`${API_URL}/api/admin/pages/${pageId}`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });
        setPages(pages.filter((page) => page._id !== pageId));
      } catch (error) {
        console.error("Error deleting page:", error);
      }
    }
  };

  const handleToggleStatus = async (pageId, field, currentValue) => {
    try {
      const response = await axios.patch(
        `${API_URL}/api/admin/pages/${pageId}/status`,
        { [field]: !currentValue },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      setPages(
        pages.map((page) =>
          page._id === pageId ? response.data.data : page
        )
      );
    } catch (error) {
      console.error("Error toggling page status:", error);
    }
  };

  if (loading) {
    return <div className="pages-manager">Loading...</div>;
  }

  return (
    <div className="pages-manager">
      <h2>Pages Manager</h2>
      
      {/* Create New Page */}
      <div className="create-page">
        <h3>Create New Page</h3>
        <div className="page-form">
          <input
            type="text"
            placeholder="Page Title"
            value={newPage.title}
            onChange={(e) =>
              setNewPage({ ...newPage, title: e.target.value })
            }
          />
          <input
            type="text"
            placeholder="Slug (e.g., about-us, admissions)"
            value={newPage.slug}
            onChange={(e) =>
              setNewPage({ ...newPage, slug: e.target.value })
            }
          />
          <textarea
            placeholder="Page Description"
            value={newPage.description}
            onChange={(e) =>
              setNewPage({ ...newPage, description: e.target.value })
            }
          />
          <select
            value={newPage.template}
            onChange={(e) =>
              setNewPage({ ...newPage, template: e.target.value })
            }
          >
            <option value="default">Default Template</option>
            <option value="about">About Template</option>
            <option value="academics">Academics Template</option>
            <option value="facilities">Facilities Template</option>
            <option value="contact">Contact Template</option>
          </select>
          <input
            type="number"
            placeholder="Order"
            value={newPage.order}
            onChange={(e) =>
              setNewPage({ ...newPage, order: parseInt(e.target.value) })
            }
          />
          <div className="form-checkboxes">
            <label>
              <input
                type="checkbox"
                checked={newPage.isActive}
                onChange={(e) =>
                  setNewPage({ ...newPage, isActive: e.target.checked })
                }
              />
              Active
            </label>
            <label>
              <input
                type="checkbox"
                checked={newPage.isPublished}
                onChange={(e) =>
                  setNewPage({ ...newPage, isPublished: e.target.checked })
                }
              />
              Published
            </label>
          </div>
          <button onClick={handleCreatePage} className="create-btn">
            Create Page
          </button>
        </div>
      </div>

      {/* Pages List */}
      <div className="pages-list">
        <h3>Website Pages</h3>
        {pages.length === 0 ? (
          <p>No pages found.</p>
        ) : (
          <div className="pages-grid">
            {pages.map((page) => (
              <div key={page._id} className="page-item">
                {editingPage === page._id ? (
                  <div className="edit-form">
                    <input
                      type="text"
                      value={page.title}
                      onChange={(e) =>
                        setPages(
                          pages.map((p) =>
                            p._id === page._id
                              ? { ...p, title: e.target.value }
                              : p
                          )
                        )
                      }
                    />
                    <input
                      type="text"
                      value={page.slug}
                      onChange={(e) =>
                        setPages(
                          pages.map((p) =>
                            p._id === page._id
                              ? { ...p, slug: e.target.value }
                              : p
                          )
                        )
                      }
                    />
                    <textarea
                      value={page.description || ""}
                      onChange={(e) =>
                        setPages(
                          pages.map((p) =>
                            p._id === page._id
                              ? { ...p, description: e.target.value }
                              : p
                          )
                        )
                      }
                    />
                    <select
                      value={page.template}
                      onChange={(e) =>
                        setPages(
                          pages.map((p) =>
                            p._id === page._id
                              ? { ...p, template: e.target.value }
                              : p
                          )
                        )
                      }
                    >
                      <option value="default">Default Template</option>
                      <option value="about">About Template</option>
                      <option value="academics">Academics Template</option>
                      <option value="facilities">Facilities Template</option>
                      <option value="contact">Contact Template</option>
                    </select>
                    <input
                      type="number"
                      value={page.order}
                      onChange={(e) =>
                        setPages(
                          pages.map((p) =>
                            p._id === page._id
                              ? { ...p, order: parseInt(e.target.value) }
                              : p
                          )
                        )
                      }
                    />
                    <div className="edit-actions">
                      <button
                        onClick={() =>
                          handleUpdatePage(page._id, {
                            title: page.title,
                            slug: page.slug,
                            description: page.description,
                            template: page.template,
                            order: page.order,
                          })
                        }
                        className="save-btn"
                      >
                        Save
                      </button>
                      <button
                        onClick={() => setEditingPage(null)}
                        className="cancel-btn"
                      >
                        Cancel
                      </button>
                    </div>
                  </div>
                ) : (
                  <div className="page-display">
                    <div className="page-header">
                      <h4>{page.title}</h4>
                      <span className="page-slug">/{page.slug}</span>
                    </div>
                    <p className="page-description">
                      {page.description || "No description"}
                    </p>
                    <div className="page-meta">
                      <span className="template">Template: {page.template}</span>
                      <span className="order">Order: {page.order}</span>
                    </div>
                    <div className="page-status">
                      <span
                        className={`status ${page.isActive ? "active" : "inactive"}`}
                      >
                        {page.isActive ? "Active" : "Inactive"}
                      </span>
                      <span
                        className={`status ${page.isPublished ? "published" : "draft"}`}
                      >
                        {page.isPublished ? "Published" : "Draft"}
                      </span>
                    </div>
                    <div className="page-actions">
                      <button
                        onClick={() => setEditingPage(page._id)}
                        className="edit-btn"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() =>
                          handleToggleStatus(page._id, "isActive", page.isActive)
                        }
                        className={`toggle-btn ${page.isActive ? "deactivate" : "activate"}`}
                      >
                        {page.isActive ? "Deactivate" : "Activate"}
                      </button>
                      <button
                        onClick={() =>
                          handleToggleStatus(page._id, "isPublished", page.isPublished)
                        }
                        className={`toggle-btn ${page.isPublished ? "unpublish" : "publish"}`}
                      >
                        {page.isPublished ? "Unpublish" : "Publish"}
                      </button>
                      <button
                        onClick={() => handleDeletePage(page._id)}
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

export default PagesManager; 