const express = require("express");
const router = express.Router();
const { protect, admin } = require("../middleware/auth");
const {
  getFooter,
  getAllFooters,
  createFooter,
  updateFooter,
  deleteFooter,
  toggleFooterStatus
} = require("../controllers/footer.controller");

// Public route to get active footer
router.get("/", getFooter);

// Admin routes (protected)
router.use(protect);
router.use(admin);

router.get("/admin", getAllFooters);
router.post("/admin", createFooter);
router.put("/admin/:id", updateFooter);
router.delete("/admin/:id", deleteFooter);
router.patch("/admin/:id/status", toggleFooterStatus);

module.exports = router; 