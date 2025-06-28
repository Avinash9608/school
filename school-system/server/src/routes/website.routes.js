const express = require("express");
const router = express.Router();

// Import controllers
const pageController = require("../controllers/page.controller");
const contentController = require("../controllers/content.controller");

// Public Page Routes (no authentication required)
router.get("/pages/:slug", pageController.getPageBySlug);
router.get("/pages/:pageId/content/:section", contentController.getContentBySection);

// Get all published pages for sitemap or navigation
router.get("/pages", async (req, res) => {
  try {
    const Page = require("../models/Page");
    
    const pages = await Page.find({ 
      isActive: true, 
      isPublished: true 
    })
    .select("title slug description order parentPage")
    .sort({ order: 1 });

    res.json({
      success: true,
      data: pages,
    });
  } catch (error) {
    console.error("Error fetching published pages:", error);
    res.status(500).json({
      success: false,
      message: "Error fetching pages",
      error: error.message,
    });
  }
});

// Get website navigation structure
router.get("/navigation", async (req, res) => {
  try {
    const Page = require("../models/Page");
    
    const pages = await Page.find({ 
      isActive: true, 
      isPublished: true 
    })
    .select("title slug order parentPage")
    .sort({ order: 1 });

    // Build navigation tree
    const buildNavigationTree = (pages, parentId = null) => {
      return pages
        .filter(page => 
          parentId === null 
            ? !page.parentPage 
            : page.parentPage && page.parentPage.toString() === parentId
        )
        .map(page => ({
          ...page.toObject(),
          children: buildNavigationTree(pages, page._id.toString())
        }))
        .sort((a, b) => a.order - b.order);
    };

    const navigation = buildNavigationTree(pages);

    res.json({
      success: true,
      data: navigation,
    });
  } catch (error) {
    console.error("Error fetching navigation:", error);
    res.status(500).json({
      success: false,
      message: "Error fetching navigation",
      error: error.message,
    });
  }
});

// Get website settings/meta information
router.get("/settings", async (req, res) => {
  try {
    // You can create a Settings model for this, or return static data
    const settings = {
      siteName: "Excellence Academy",
      siteDescription: "Nurturing Global Leaders Since 1995",
      contactEmail: "info@excellenceacademy.edu",
      contactPhone: "+1 (555) 123-4567",
      address: "123 Education Street, Learning City, LC 12345",
      socialMedia: {
        facebook: "https://facebook.com/excellenceacademy",
        twitter: "https://twitter.com/excellenceacademy",
        instagram: "https://instagram.com/excellenceacademy",
        linkedin: "https://linkedin.com/company/excellenceacademy",
      },
      features: {
        announcements: true,
        events: true,
        gallery: true,
        contact: true,
      },
    };

    res.json({
      success: true,
      data: settings,
    });
  } catch (error) {
    console.error("Error fetching settings:", error);
    res.status(500).json({
      success: false,
      message: "Error fetching settings",
      error: error.message,
    });
  }
});

// Search pages and content
router.get("/search", async (req, res) => {
  try {
    const { q: query, type = "all" } = req.query;
    
    if (!query || query.trim().length < 2) {
      return res.status(400).json({
        success: false,
        message: "Search query must be at least 2 characters long",
      });
    }

    const Page = require("../models/Page");
    const Content = require("../models/Content");

    const searchRegex = new RegExp(query, "i");

    let results = {};

    if (type === "all" || type === "pages") {
      const pages = await Page.find({
        $and: [
          { isActive: true, isPublished: true },
          {
            $or: [
              { title: searchRegex },
              { description: searchRegex },
              { slug: searchRegex },
            ],
          },
        ],
      })
      .select("title slug description")
      .limit(10);

      results.pages = pages;
    }

    if (type === "all" || type === "content") {
      const content = await Content.find({
        $and: [
          { isActive: true },
          {
            $or: [
              { title: searchRegex },
              { content: searchRegex },
            ],
          },
        ],
      })
      .populate("pageId", "title slug")
      .select("title content type pageId")
      .limit(10);

      results.content = content;
    }

    res.json({
      success: true,
      data: results,
      query,
    });
  } catch (error) {
    console.error("Error searching:", error);
    res.status(500).json({
      success: false,
      message: "Error performing search",
      error: error.message,
    });
  }
});

module.exports = router; 