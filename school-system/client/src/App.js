import React, { useContext } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  Outlet,
} from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import { WebsiteProvider } from "./context/WebsiteContext";
import AuthContext from "./context/AuthContext";

// Layout Components
import Navbar from "./components/layout/Navbar";
import Sidebar from "./components/layout/Sidebar";
import Footer from "./components/layout/Footer";
import Alert from "./components/layout/Alert";

// Auth Components
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";

// Admin Components
import AdminDashboard from "./components/admin/AdminDashboard";
import ContentManager from "./components/admin/ContentManager";
import MediaManager from "./components/admin/MediaManager";
import PagesManager from "./components/admin/PagesManager";
import HeaderManager from "./components/admin/HeaderManager";
import FooterManager from "./components/admin/FooterManager";

// Website Components
import WebsiteLayout from "./components/website/WebsiteLayout";
import Home from "./components/website/Home";
import Admissions from "./components/website/Admissions";

// About Components
import About from "./components/website/about/About";
import History from "./components/website/about/History";
import PrincipalMessage from "./components/website/about/PrincipalMessage";
import VisionMission from "./components/website/about/VisionMission";
import Achievements from "./components/website/about/Achievements";

// Academics Components
import Curriculum from "./components/website/academics/Curriculum";
import Faculty from "./components/website/academics/Faculty";
import Departments from "./components/website/academics/Departments";
import Examinations from "./components/website/academics/Examinations";

// Facilities Components
import Facilities from "./components/website/facilities/Facilities";
import Classrooms from "./components/website/facilities/Classrooms";
import Laboratory from "./components/website/facilities/Laboratory";
import Library from "./components/website/facilities/Library";
import Sports from "./components/website/facilities/Sports";
import Transport from "./components/website/facilities/Transport";

// Gallery & Events Components
import Gallery from "./components/website/gallery/Gallery";
import Events from "./components/website/events/Events";

// Contact Components
import Contact from "./components/website/contact/Contact";

// Import CSS
import "./App.css";

// Import Font Awesome
import "@fortawesome/fontawesome-free/css/all.min.css";

// Protected Route Component
const ProtectedRoute = ({ children }) => {
  const { isAuthenticated, loading } = useContext(AuthContext);

  if (loading) return <div>Loading...</div>;

  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  return children;
};

// Admin Layout Component
const AdminLayout = () => {
  return (
    <div className="app">
      <Navbar />
      <div className="main-container">
        <Sidebar />
        <main className="main-content">
          <Alert />
          <Outlet />
        </main>
      </div>
      <Footer />
    </div>
  );
};

// Placeholder components for admin sections
const StudentsManager = () => <div style={{padding: '2rem'}}>Students Manager (Coming Soon)</div>;
const ClassesManager = () => <div style={{padding: '2rem'}}>Classes Manager (Coming Soon)</div>;
const AttendanceManager = () => <div style={{padding: '2rem'}}>Attendance Manager (Coming Soon)</div>;
const FeesManager = () => <div style={{padding: '2rem'}}>Fees Manager (Coming Soon)</div>;
const ResultsManager = () => <div style={{padding: '2rem'}}>Results Manager (Coming Soon)</div>;
const LibraryManager = () => <div style={{padding: '2rem'}}>Library Manager (Coming Soon)</div>;
const StaffManager = () => <div style={{padding: '2rem'}}>Staff Manager (Coming Soon)</div>;
const FacilitiesManager = () => <div style={{padding: '2rem'}}>Facilities Manager (Coming Soon)</div>;
const UsersManager = () => <div style={{padding: '2rem'}}>Users Manager (Coming Soon)</div>;
const ActivityLog = () => <div style={{padding: '2rem'}}>Activity Log (Coming Soon)</div>;
const SettingsManager = () => <div style={{padding: '2rem'}}>Settings Manager (Coming Soon)</div>;

function App() {
  return (
    <AuthProvider>
      <WebsiteProvider>
        <Router>
          <Routes>
            {/* Admin Routes */}
            <Route path="/admin" element={<AdminLayout />}>
              <Route
                path="dashboard"
                element={
                  <ProtectedRoute>
                    <AdminDashboard />
                  </ProtectedRoute>
                }
              />
              <Route
                path="content"
                element={
                  <ProtectedRoute>
                    <ContentManager />
                  </ProtectedRoute>
                }
              />
              <Route
                path="media"
                element={
                  <ProtectedRoute>
                    <MediaManager />
                  </ProtectedRoute>
                }
              />
              <Route
                path="pages"
                element={
                  <ProtectedRoute>
                    <PagesManager />
                  </ProtectedRoute>
                }
              />
              <Route
                path="header"
                element={
                  <ProtectedRoute>
                    <HeaderManager />
                  </ProtectedRoute>
                }
              />
              <Route
                path="footer"
                element={
                  <ProtectedRoute>
                    <FooterManager />
                  </ProtectedRoute>
                }
              />
              <Route
                path="students"
                element={
                  <ProtectedRoute>
                    <StudentsManager />
                  </ProtectedRoute>
                }
              />
              <Route
                path="classes"
                element={
                  <ProtectedRoute>
                    <ClassesManager />
                  </ProtectedRoute>
                }
              />
              <Route
                path="attendance"
                element={
                  <ProtectedRoute>
                    <AttendanceManager />
                  </ProtectedRoute>
                }
              />
              <Route
                path="fees"
                element={
                  <ProtectedRoute>
                    <FeesManager />
                  </ProtectedRoute>
                }
              />
              <Route
                path="results"
                element={
                  <ProtectedRoute>
                    <ResultsManager />
                  </ProtectedRoute>
                }
              />
              <Route
                path="library"
                element={
                  <ProtectedRoute>
                    <LibraryManager />
                  </ProtectedRoute>
                }
              />
              <Route
                path="staff"
                element={
                  <ProtectedRoute>
                    <StaffManager />
                  </ProtectedRoute>
                }
              />
              <Route
                path="facilities"
                element={
                  <ProtectedRoute>
                    <FacilitiesManager />
                  </ProtectedRoute>
                }
              />
              <Route
                path="users"
                element={
                  <ProtectedRoute>
                    <UsersManager />
                  </ProtectedRoute>
                }
              />
              <Route
                path="activity-logs"
                element={
                  <ProtectedRoute>
                    <ActivityLog />
                  </ProtectedRoute>
                }
              />
              <Route
                path="settings"
                element={
                  <ProtectedRoute>
                    <SettingsManager />
                  </ProtectedRoute>
                }
              />
              <Route path="" element={<Navigate to="/admin/dashboard" />} />
            </Route>

            {/* Auth Routes */}
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />

            {/* Website Routes */}
            <Route path="/" element={<WebsiteLayout />}>
              <Route index element={<Home />} />

              {/* About Routes */}
              <Route path="about" element={<About />} />
              <Route path="about/history" element={<History />} />
              <Route
                path="about/principal-message"
                element={<PrincipalMessage />}
              />
              <Route path="about/vision-mission" element={<VisionMission />} />
              <Route path="about/achievements" element={<Achievements />} />

              {/* Academics Routes */}
              <Route path="academics/curriculum" element={<Curriculum />} />
              <Route path="academics/faculty" element={<Faculty />} />
              <Route path="academics/departments" element={<Departments />} />
              <Route path="academics/examinations" element={<Examinations />} />

              {/* Admissions Route */}
              <Route path="admissions" element={<Admissions />} />

              {/* Facilities Routes */}
              <Route path="facilities" element={<Facilities />} />
              <Route path="facilities/classrooms" element={<Classrooms />} />
              <Route path="facilities/laboratories" element={<Laboratory />} />
              <Route path="facilities/library" element={<Library />} />
              <Route path="facilities/sports" element={<Sports />} />
              <Route path="facilities/transport" element={<Transport />} />

              {/* Gallery & Events Routes */}
              <Route path="gallery" element={<Gallery />} />
              <Route path="events" element={<Events />} />

              {/* Contact Route */}
              <Route path="contact" element={<Contact />} />
            </Route>

            {/* Fallback Route */}
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </Router>
      </WebsiteProvider>
    </AuthProvider>
  );
}

export default App;
