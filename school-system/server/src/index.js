const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
const path = require("path");

// Load environment variables
dotenv.config();

// Initialize Express app
const app = express();

// Middleware
app.use(
  cors({
    origin: process.env.FRONTEND_URL || "*",
    methods: ["GET", "POST", "PUT", "DELETE", "PATCH", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Define routes
app.get("/", (req, res) => {
  res.send("School Management System API is running");
});

// Health check route (no database required)
app.get("/health", (req, res) => {
  res.json({
    success: true,
    message: "Server is running",
    timestamp: new Date().toISOString(),
    environment: process.env.NODE_ENV || "development"
  });
});

// Test route for debugging
app.get("/test", (req, res) => {
  res.json({
    success: true,
    message: "Test route working",
    routes: ["auth", "website", "header", "footer"]
  });
});

// Import routes
const authRoutes = require("./routes/auth.routes");
const websiteRoutes = require("./routes/website.routes");
const headerRoutes = require("./routes/header.routes");
const footerRoutes = require("./routes/footer.routes");
const adminRoutes = require("./routes/admin.routes");
const mediaRoutes = require("./routes/media.routes");

try {
  console.log("All routes imported successfully");
} catch (error) {
  console.error("Error importing routes:", error);
  throw error;
}
/*
const studentRoutes = require('./routes/student.routes');
const classRoutes = require('./routes/class.routes');
const attendanceRoutes = require('./routes/attendance.routes');
const feeRoutes = require('./routes/fee.routes');
const resultRoutes = require('./routes/result.routes');
const libraryRoutes = require('./routes/library.routes');
const staffRoutes = require('./routes/staff.routes');
const facilityRoutes = require('./routes/facility.routes');
*/

// Use routes
app.use("/api/auth", authRoutes);
app.use("/api/website", websiteRoutes);
app.use("/api/header", headerRoutes);
app.use("/api/footer", footerRoutes);
app.use("/api/admin", adminRoutes);
app.use("/api/media", mediaRoutes);
app.use("/uploads", express.static(path.join(__dirname, "../../uploads")));
/*
app.use('/api/students', studentRoutes);
app.use('/api/classes', classRoutes);
app.use('/api/attendance', attendanceRoutes);
app.use('/api/fees', feeRoutes);
app.use('/api/results', resultRoutes);
app.use('/api/library', libraryRoutes);
app.use('/api/staff', staffRoutes);
app.use('/api/facilities', facilityRoutes);
*/

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({
    success: false,
    message: "Server Error",
    error: process.env.NODE_ENV === "development" ? err.message : undefined,
  });
});

// Connect to MongoDB
const MONGO_URI =
  process.env.MONGO_URI || "mongodb://localhost:27017/school-management";

console.log("Attempting to connect to MongoDB...");
console.log("MongoDB URI:", MONGO_URI ? "Set" : "Not set");

mongoose
  .connect(MONGO_URI)
  .then(() => {
    console.log("MongoDB connected successfully");
    console.log("Database:", mongoose.connection.name);
  })
  .catch((err) => {
    console.error("MongoDB connection error:", err);
    console.error("Please check your MONGO_URI environment variable");
  });

// Handle MongoDB connection errors
mongoose.connection.on('error', (err) => {
  console.error('MongoDB connection error:', err);
});

mongoose.connection.on('disconnected', () => {
  console.log('MongoDB disconnected');
});

// For local development
if (process.env.NODE_ENV !== "production") {
  const PORT = process.env.PORT || 5000;
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}

// Export the Express API for Vercel
module.exports = app;
