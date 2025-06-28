import React, { useState, useEffect } from "react";
import axios from "axios";
import API_URL from "../../config/api";
import "./AdminDashboard.css";

const AdminDashboard = () => {
  const [stats, setStats] = useState({
    pages: { total: 0, published: 0, draft: 0 },
    content: { total: 0, active: 0, inactive: 0 },
    users: { total: 0 },
    activity: { counts: { today: 0, total: 0 } },
  });
  const [recentActivity, setRecentActivity] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchDashboardData();
  }, []);

  const fetchDashboardData = async () => {
    try {
      const [statsResponse, activityResponse] = await Promise.all([
        axios.get(`${API_URL}/api/admin/dashboard/stats`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }),
        axios.get(`${API_URL}/api/admin/activity-logs/recent?limit=5`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }),
      ]);

      setStats(statsResponse.data.data);
      setRecentActivity(activityResponse.data.data);
    } catch (error) {
      console.error("Error fetching dashboard data:", error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <div className="admin-dashboard">Loading...</div>;
  }

  return (
    <div className="admin-dashboard">
      <h2>Admin Dashboard</h2>
      
      {/* Statistics Cards */}
      <div className="stats-grid">
        <div className="stat-card">
          <div className="stat-icon">
            <i className="fas fa-file-alt"></i>
          </div>
          <div className="stat-content">
            <h3>{stats.pages.total}</h3>
            <p>Total Pages</p>
            <div className="stat-breakdown">
              <span className="published">{stats.pages.published} Published</span>
              <span className="draft">{stats.pages.draft} Draft</span>
            </div>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon">
            <i className="fas fa-edit"></i>
          </div>
          <div className="stat-content">
            <h3>{stats.content.total}</h3>
            <p>Content Items</p>
            <div className="stat-breakdown">
              <span className="active">{stats.content.active} Active</span>
              <span className="inactive">{stats.content.inactive} Inactive</span>
            </div>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon">
            <i className="fas fa-users"></i>
          </div>
          <div className="stat-content">
            <h3>{stats.users.total}</h3>
            <p>Total Users</p>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon">
            <i className="fas fa-chart-line"></i>
          </div>
          <div className="stat-content">
            <h3>{stats.activity.counts.today}</h3>
            <p>Today's Activities</p>
            <div className="stat-breakdown">
              <span className="total">{stats.activity.counts.total} Total</span>
            </div>
          </div>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="recent-activity">
        <h3>Recent Activity</h3>
        {recentActivity.length === 0 ? (
          <p>No recent activity</p>
        ) : (
          <div className="activity-list">
            {recentActivity.map((activity) => (
              <div key={activity._id} className="activity-item">
                <div className="activity-icon">
                  <i className={`fas fa-${getActivityIcon(activity.action)}`}></i>
                </div>
                <div className="activity-content">
                  <p className="activity-message">
                    <strong>
                      {activity.user?.firstName} {activity.user?.lastName}
                    </strong>{" "}
                    {activity.action}ed {activity.resource}
                    {activity.resourceId && (
                      <span className="resource-id"> (ID: {activity.resourceId})</span>
                    )}
                  </p>
                  <p className="activity-time">
                    {new Date(activity.createdAt).toLocaleString()}
                  </p>
                </div>
                <div className="activity-status">
                  <span className={`status ${activity.status}`}>
                    {activity.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Quick Actions */}
      <div className="quick-actions">
        <h3>Quick Actions</h3>
        <div className="action-buttons">
          <button className="action-btn">
            <i className="fas fa-plus"></i>
            Create New Page
          </button>
          <button className="action-btn">
            <i className="fas fa-upload"></i>
            Upload Media
          </button>
          <button className="action-btn">
            <i className="fas fa-users"></i>
            Manage Users
          </button>
          <button className="action-btn">
            <i className="fas fa-cog"></i>
            Settings
          </button>
        </div>
      </div>
    </div>
  );
};

// Helper function to get activity icon
const getActivityIcon = (action) => {
  const icons = {
    create: "plus",
    update: "edit",
    delete: "trash",
    publish: "eye",
    unpublish: "eye-slash",
    login: "sign-in-alt",
    logout: "sign-out-alt",
  };
  return icons[action] || "circle";
};

export default AdminDashboard; 