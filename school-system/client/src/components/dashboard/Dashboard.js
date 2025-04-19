import React, { useContext } from "react";
import AuthContext from "../../context/AuthContext";
import AdminDashboard from "./AdminDashboard";
import "./Dashboard.css";

const Dashboard = () => {
  const { user } = useContext(AuthContext);

  // Render dashboard based on user role
  if (user) {
    switch (user.role) {
      case "admin":
        return <AdminDashboard />;
      case "teacher":
        return (
          <div className="dashboard">
            <h1>Teacher Dashboard</h1>
            <div className="dashboard-welcome">
              <h2>Welcome, {user.firstName}!</h2>
              <p>This is your teacher dashboard.</p>
            </div>
          </div>
        );
      case "student":
        return (
          <div className="dashboard">
            <h1>Student Dashboard</h1>
            <div className="dashboard-welcome">
              <h2>Welcome, {user.firstName}!</h2>
              <p>This is your student dashboard.</p>
            </div>
          </div>
        );
      case "parent":
        return (
          <div className="dashboard">
            <h1>Parent Dashboard</h1>
            <div className="dashboard-welcome">
              <h2>Welcome, {user.firstName}!</h2>
              <p>This is your parent dashboard.</p>
            </div>
          </div>
        );
      case "librarian":
        return (
          <div className="dashboard">
            <h1>Librarian Dashboard</h1>
            <div className="dashboard-welcome">
              <h2>Welcome, {user.firstName}!</h2>
              <p>This is your librarian dashboard.</p>
            </div>
          </div>
        );
      case "staff":
        return (
          <div className="dashboard">
            <h1>Staff Dashboard</h1>
            <div className="dashboard-welcome">
              <h2>Welcome, {user.firstName}!</h2>
              <p>This is your staff dashboard.</p>
            </div>
          </div>
        );
      default:
        return (
          <div className="dashboard">
            <h1>Dashboard</h1>
            <div className="dashboard-welcome">
              <h2>Welcome, {user.firstName}!</h2>
              <p>This is your dashboard.</p>
            </div>
          </div>
        );
    }
  }

  return (
    <div className="dashboard">
      <h1>Dashboard</h1>
      <div className="loading">Loading...</div>
    </div>
  );
};

export default Dashboard;
