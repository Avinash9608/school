const Page = require("../models/Page");
const Content = require("../models/Content");
const ActivityLog = require("../models/ActivityLog");
const { createActivityLog } = require("../utils/activityLogger");

// Get all pages
const getAllPages = async (req, res) => {
  try {
    const pages = await Page.find({})
      .populate("lastModifiedBy", "firstName lastName email username")
      .populate("parentPage", "title slug")
      .sort({ order: 1, createdAt: -1 });

    res.json({
      success: true,
      data: pages,
    });
  } catch (error) {
    console.error("Error fetching pages:", error);
    res.status(500).json({
      success: false,
      message: "Error fetching pages",
      error: error.message,
    });
  }
};

// Get page by slug (for public access)
const getPageBySlug = async (req, res) => {
  try {
    const { slug } = req.params;
    
    const page = await Page.findOne({ 
      slug, 
      isActive: true, 
      isPublished: true 
    }).populate("lastModifiedBy", "firstName lastName");

    if (!page) {
      return res.status(404).json({
        success: false,
        message: "Page not found",
      });
    }

    // Get page content
    const content = await Content.find({ 
      pageId: page._id, 
      isActive: true 
    }).sort({ order: 1 });

    res.json({
      success: true,
      data: {
        page,
        content,
      },
    });
  } catch (error) {
    console.error("Error fetching page:", error);
    res.status(500).json({
      success: false,
      message: "Error fetching page",
      error: error.message,
    });
  }
};

// Get page by ID (for admin)
const getPageById = async (req, res) => {
  try {
    const { id } = req.params;
    
    const page = await Page.findById(id)
      .populate("lastModifiedBy", "firstName lastName email username")
      .populate("parentPage", "title slug");

    if (!page) {
      return res.status(404).json({
        success: false,
        message: "Page not found",
      });
    }

    // Get page content
    const content = await Content.find({ pageId: page._id }).sort({ order: 1 });

    res.json({
      success: true,
      data: {
        page,
        content,
      },
    });
  } catch (error) {
    console.error("Error fetching page:", error);
    res.status(500).json({
      success: false,
      message: "Error fetching page",
      error: error.message,
    });
  }
};

// Create new page
const createPage = async (req, res) => {
  try {
    const {
      title,
      slug,
      description,
      content,
      meta,
      parentPage,
      template,
      order,
    } = req.body;

    // Check if slug already exists
    const existingPage = await Page.findOne({ slug });
    if (existingPage) {
      return res.status(400).json({
        success: false,
        message: "Page with this slug already exists",
      });
    }

    const page = new Page({
      title,
      slug,
      description,
      content,
      meta,
      parentPage,
      template,
      order,
      lastModifiedBy: req.user.id,
    });

    await page.save();

    // Log activity
    await createActivityLog({
      user: req.user.id,
      action: "create",
      resource: "page",
      resourceId: page._id,
      details: { title, slug },
      ipAddress: req.ip,
      userAgent: req.get("User-Agent"),
    });

    res.status(201).json({
      success: true,
      message: "Page created successfully",
      data: page,
    });
  } catch (error) {
    console.error("Error creating page:", error);
    res.status(500).json({
      success: false,
      message: "Error creating page",
      error: error.message,
    });
  }
};

// Update page
const updatePage = async (req, res) => {
  try {
    const { id } = req.params;
    const updateData = {
      ...req.body,
      lastModifiedBy: req.user.id,
    };

    const page = await Page.findByIdAndUpdate(
      id,
      updateData,
      { new: true, runValidators: true }
    ).populate("lastModifiedBy", "firstName lastName email username");

    if (!page) {
      return res.status(404).json({
        success: false,
        message: "Page not found",
      });
    }

    // Log activity
    await createActivityLog({
      user: req.user.id,
      action: "update",
      resource: "page",
      resourceId: page._id,
      details: { title: page.title, slug: page.slug },
      ipAddress: req.ip,
      userAgent: req.get("User-Agent"),
    });

    res.json({
      success: true,
      message: "Page updated successfully",
      data: page,
    });
  } catch (error) {
    console.error("Error updating page:", error);
    res.status(500).json({
      success: false,
      message: "Error updating page",
      error: error.message,
    });
  }
};

// Delete page
const deletePage = async (req, res) => {
  try {
    const { id } = req.params;
    
    const page = await Page.findById(id);
    if (!page) {
      return res.status(404).json({
        success: false,
        message: "Page not found",
      });
    }

    // Check if page has child pages
    const childPages = await Page.find({ parentPage: id });
    if (childPages.length > 0) {
      return res.status(400).json({
        success: false,
        message: "Cannot delete page with child pages",
      });
    }

    // Delete associated content
    await Content.deleteMany({ pageId: id });

    await Page.findByIdAndDelete(id);

    // Log activity
    await createActivityLog({
      user: req.user.id,
      action: "delete",
      resource: "page",
      resourceId: id,
      details: { title: page.title, slug: page.slug },
      ipAddress: req.ip,
      userAgent: req.get("User-Agent"),
    });

    res.json({
      success: true,
      message: "Page deleted successfully",
    });
  } catch (error) {
    console.error("Error deleting page:", error);
    res.status(500).json({
      success: false,
      message: "Error deleting page",
      error: error.message,
    });
  }
};

// Toggle page status
const togglePageStatus = async (req, res) => {
  try {
    const { id } = req.params;
    const { isActive, isPublished } = req.body;

    const page = await Page.findById(id);
    if (!page) {
      return res.status(404).json({
        success: false,
        message: "Page not found",
      });
    }

    const updateData = { lastModifiedBy: req.user.id };
    if (isActive !== undefined) updateData.isActive = isActive;
    if (isPublished !== undefined) updateData.isPublished = isPublished;

    const updatedPage = await Page.findByIdAndUpdate(
      id,
      updateData,
      { new: true }
    ).populate("lastModifiedBy", "firstName lastName email username");

    // Log activity
    await createActivityLog({
      user: req.user.id,
      action: isPublished ? "publish" : "unpublish",
      resource: "page",
      resourceId: page._id,
      details: { title: page.title, slug: page.slug },
      ipAddress: req.ip,
      userAgent: req.get("User-Agent"),
    });

    res.json({
      success: true,
      message: "Page status updated successfully",
      data: updatedPage,
    });
  } catch (error) {
    console.error("Error updating page status:", error);
    res.status(500).json({
      success: false,
      message: "Error updating page status",
      error: error.message,
    });
  }
};

module.exports = {
  getAllPages,
  getPageBySlug,
  getPageById,
  createPage,
  updatePage,
  deletePage,
  togglePageStatus,
  updatePageStatus: togglePageStatus,
}; 