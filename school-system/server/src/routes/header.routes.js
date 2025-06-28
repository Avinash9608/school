const express = require("express");
const router = express.Router();
const { protect, admin } = require("../middleware/auth");
const {
  getHeader,
  getAllHeaders,
  createHeader,
  updateHeader,
  deleteHeader,
  toggleHeaderStatus
} = require("../controllers/header.controller");

// Public route to get active header
router.get("/", getHeader);

// Admin routes (protected)
router.use(protect);
router.use(admin);

router.get("/admin", getAllHeaders);
router.post("/admin", createHeader);
router.put("/admin/:id", updateHeader);
router.delete("/admin/:id", deleteHeader);
router.patch("/admin/:id/status", toggleHeaderStatus);

module.exports = router; 