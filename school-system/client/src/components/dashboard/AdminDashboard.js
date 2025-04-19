import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import AuthContext from '../../context/AuthContext';
import './Dashboard.css';

const AdminDashboard = () => {
  const { user } = useContext(AuthContext);

  return (
    <div className="dashboard">
      <h1>Admin Dashboard</h1>
      
      <div className="dashboard-welcome">
        <h2>Welcome, {user?.firstName || 'Admin'}!</h2>
        <p>Here's an overview of your school management system.</p>
      </div>
      
      <div className="dashboard-stats">
        <div className="stat-card">
          <div className="stat-icon">
            <i className="fas fa-user-graduate"></i>
          </div>
          <div className="stat-content">
            <h3>Total Students</h3>
            <p className="stat-number">850</p>
            <Link to="/admin/students" className="stat-link">View All</Link>
          </div>
        </div>
        
        <div className="stat-card">
          <div className="stat-icon">
            <i className="fas fa-chalkboard-teacher"></i>
          </div>
          <div className="stat-content">
            <h3>Total Teachers</h3>
            <p className="stat-number">45</p>
            <Link to="/admin/staff" className="stat-link">View All</Link>
          </div>
        </div>
        
        <div className="stat-card">
          <div className="stat-icon">
            <i className="fas fa-chalkboard"></i>
          </div>
          <div className="stat-content">
            <h3>Total Classes</h3>
            <p className="stat-number">30</p>
            <Link to="/admin/classes" className="stat-link">View All</Link>
          </div>
        </div>
        
        <div className="stat-card">
          <div className="stat-icon">
            <i className="fas fa-book"></i>
          </div>
          <div className="stat-content">
            <h3>Library Books</h3>
            <p className="stat-number">5000</p>
            <p className="stat-subtext">320 books issued</p>
            <Link to="/admin/library" className="stat-link">View Library</Link>
          </div>
        </div>
      </div>
      
      <div className="dashboard-row">
        <div className="dashboard-col">
          <div className="dashboard-card">
            <h3>Fee Collection</h3>
            <div className="fee-stats">
              <div className="fee-stat">
                <span className="fee-label">Total</span>
                <span className="fee-value">₹8,500,000</span>
              </div>
              <div className="fee-stat">
                <span className="fee-label">Collected</span>
                <span className="fee-value">₹6,375,000</span>
              </div>
              <div className="fee-stat">
                <span className="fee-label">Pending</span>
                <span className="fee-value">₹2,125,000</span>
              </div>
            </div>
            <div className="fee-progress">
              <div 
                className="fee-progress-bar" 
                style={{ width: '75%' }}
              ></div>
            </div>
            <p className="fee-percentage">
              75% Collected
            </p>
            <Link to="/admin/fees" className="btn btn-primary">Manage Fees</Link>
          </div>
        </div>
        
        <div className="dashboard-col">
          <div className="dashboard-card">
            <h3>Today's Attendance</h3>
            <div className="attendance-chart">
              <div className="attendance-present" style={{ height: '92%' }}>
                <span>780</span>
              </div>
              <div className="attendance-absent" style={{ height: '8%' }}>
                <span>70</span>
              </div>
            </div>
            <div className="attendance-legend">
              <div className="legend-item">
                <span className="legend-color present"></span>
                <span className="legend-label">Present</span>
              </div>
              <div className="legend-item">
                <span className="legend-color absent"></span>
                <span className="legend-label">Absent</span>
              </div>
            </div>
            <p className="attendance-percentage">
              92% Present
            </p>
            <Link to="/admin/attendance" className="btn btn-primary">View Attendance</Link>
          </div>
        </div>
      </div>
      
      <div className="dashboard-card">
        <h3>Recent Admissions</h3>
        <div className="table-container">
          <table className="table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Class</th>
                <th>Date</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>STD2023001</td>
                <td>John Smith</td>
                <td>Class 5A</td>
                <td>15 Jul 2023</td>
                <td><span className="badge badge-success">Approved</span></td>
                <td>
                  <Link to="/admin/students/STD2023001" className="btn btn-sm btn-primary">View</Link>
                </td>
              </tr>
              <tr>
                <td>STD2023002</td>
                <td>Emily Johnson</td>
                <td>Class 3B</td>
                <td>16 Jul 2023</td>
                <td><span className="badge badge-warning">Pending</span></td>
                <td>
                  <Link to="/admin/students/STD2023002" className="btn btn-sm btn-primary">View</Link>
                </td>
              </tr>
              <tr>
                <td>STD2023003</td>
                <td>Michael Brown</td>
                <td>Class 7C</td>
                <td>17 Jul 2023</td>
                <td><span className="badge badge-success">Approved</span></td>
                <td>
                  <Link to="/admin/students/STD2023003" className="btn btn-sm btn-primary">View</Link>
                </td>
              </tr>
              <tr>
                <td>STD2023004</td>
                <td>Sarah Davis</td>
                <td>Class 2A</td>
                <td>18 Jul 2023</td>
                <td><span className="badge badge-warning">Pending</span></td>
                <td>
                  <Link to="/admin/students/STD2023004" className="btn btn-sm btn-primary">View</Link>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="card-footer">
          <Link to="/admin/admissions" className="btn btn-primary">View All Admissions</Link>
        </div>
      </div>
      
      <div className="dashboard-actions">
        <div className="action-card">
          <i className="fas fa-user-plus"></i>
          <h4>Add Student</h4>
          <Link to="/admin/students/add" className="btn btn-secondary">Add New</Link>
        </div>
        
        <div className="action-card">
          <i className="fas fa-user-tie"></i>
          <h4>Add Staff</h4>
          <Link to="/admin/staff/add" className="btn btn-secondary">Add New</Link>
        </div>
        
        <div className="action-card">
          <i className="fas fa-chalkboard"></i>
          <h4>Add Class</h4>
          <Link to="/admin/classes/add" className="btn btn-secondary">Add New</Link>
        </div>
        
        <div className="action-card">
          <i className="fas fa-book"></i>
          <h4>Add Book</h4>
          <Link to="/admin/library/books/add" className="btn btn-secondary">Add New</Link>
        </div>
        
        <div className="action-card">
          <i className="fas fa-bullhorn"></i>
          <h4>Announcements</h4>
          <Link to="/admin/announcements" className="btn btn-secondary">Manage</Link>
        </div>
        
        <div className="action-card">
          <i className="fas fa-cog"></i>
          <h4>Website Settings</h4>
          <Link to="/admin/settings/website" className="btn btn-secondary">Configure</Link>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
