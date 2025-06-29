const express = require("express");
const router = express.Router();
const { protect: auth } = require("../middleware/auth");

// Import controllers
const pageController = require("../controllers/page.controller");
const contentController = require("../controllers/content.controller");
const mediaController = require("../controllers/media.controller");

// Import models
const Content = require("../models/Content");

// Admin Dashboard Routes
router.get("/dashboard/stats", auth, async (req, res) => {
  try {
    const Page = require("../models/Page");
    const Media = require("../models/Media");
    const ActivityLog = require("../models/ActivityLog");

    const [totalPages, totalContent, totalMedia, recentActivity] = await Promise.all([
      Page.countDocuments(),
      Content.countDocuments(),
      Media.countDocuments(),
      ActivityLog.find().sort({ createdAt: -1 }).limit(5)
    ]);

    res.json({
      success: true,
      data: {
        totalPages,
        totalContent,
        totalMedia,
        recentActivity
      }
    });
  } catch (error) {
    console.error("Error fetching dashboard stats:", error);
    res.status(500).json({
      success: false,
      message: "Error fetching dashboard stats",
      error: error.message,
    });
  }
});

// Admin Pages Routes
router.get("/pages", auth, pageController.getAllPages);
router.post("/pages", auth, pageController.createPage);
router.get("/pages/:id", auth, pageController.getPageById);
router.put("/pages/:id", auth, pageController.updatePage);
router.delete("/pages/:id", auth, pageController.deletePage);
router.patch("/pages/:id/status", auth, pageController.updatePageStatus);

// Get content by page ID (for admin)
router.get("/pages/:pageId/content", auth, async (req, res) => {
  try {
    const { pageId } = req.params;
    
    const content = await Content.find({ pageId })
      .populate("lastModifiedBy", "firstName lastName email username")
      .sort({ order: 1 });

    res.json({
      success: true,
      data: content,
    });
  } catch (error) {
    console.error("Error fetching page content:", error);
    res.status(500).json({
      success: false,
      message: "Error fetching page content",
      error: error.message,
    });
  }
});

// Admin Content Routes
router.get("/content", auth, contentController.getAllContent);
router.post("/content", auth, contentController.createContent);
router.get("/content/:id", auth, contentController.getContentById);
router.put("/content/:id", auth, contentController.updateContent);
router.delete("/content/:id", auth, contentController.deleteContent);

// Admin Media Routes
router.get("/media", auth, mediaController.getAllMedia);
router.post("/media/upload", auth, mediaController.uploadMedia);
router.delete("/media/:id", auth, mediaController.deleteMedia);

// Activity Logs
router.get("/activity-logs/recent", auth, async (req, res) => {
  try {
    const { limit = 10 } = req.query;
    const ActivityLog = require("../models/ActivityLog");
    
    const logs = await ActivityLog.find()
      .sort({ createdAt: -1 })
      .limit(parseInt(limit))
      .populate("userId", "username");

    res.json({
      success: true,
      data: logs
    });
  } catch (error) {
    console.error("Error fetching activity logs:", error);
    res.status(500).json({
      success: false,
      message: "Error fetching activity logs",
      error: error.message,
    });
  }
});

module.exports = router; 