const Content = require("../models/Content");
const Page = require("../models/Page");
const { createActivityLog } = require("../utils/activityLogger");

// Get content by page ID
const getContentByPageId = async (req, res) => {
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
    console.error("Error fetching content:", error);
    res.status(500).json({
      success: false,
      message: "Error fetching content",
      error: error.message,
    });
  }
};

// Get content by section
const getContentBySection = async (req, res) => {
  try {
    const { pageId, section } = req.params;
    
    const content = await Content.findOne({ 
      pageId, 
      section,
      isActive: true 
    }).populate("lastModifiedBy", "firstName lastName");

    if (!content) {
      return res.status(404).json({
        success: false,
        message: "Content not found",
      });
    }

    res.json({
      success: true,
      data: content,
    });
  } catch (error) {
    console.error("Error fetching content:", error);
    res.status(500).json({
      success: false,
      message: "Error fetching content",
      error: error.message,
    });
  }
};

// Get all content (for admin)
const getAllContent = async (req, res) => {
  try {
    const content = await Content.find({})
      .populate("pageId", "title slug")
      .populate("lastModifiedBy", "firstName lastName email username")
      .sort({ createdAt: -1 });

    res.json({
      success: true,
      data: content,
    });
  } catch (error) {
    console.error("Error fetching content:", error);
    res.status(500).json({
      success: false,
      message: "Error fetching content",
      error: error.message,
    });
  }
};

// Get content by ID (for admin)
const getContentById = async (req, res) => {
  try {
    const { id } = req.params;
    
    const content = await Content.findById(id)
      .populate("pageId", "title slug")
      .populate("lastModifiedBy", "firstName lastName email username");

    if (!content) {
      return res.status(404).json({
        success: false,
        message: "Content not found",
      });
    }

    res.json({
      success: true,
      data: content,
    });
  } catch (error) {
    console.error("Error fetching content:", error);
    res.status(500).json({
      success: false,
      message: "Error fetching content",
      error: error.message,
    });
  }
};

// Create new content
const createContent = async (req, res) => {
  try {
    const {
      pageId,
      section,
      type,
      title,
      content,
      order,
      settings,
    } = req.body;

    // Verify page exists
    const page = await Page.findById(pageId);
    if (!page) {
      return res.status(404).json({
        success: false,
        message: "Page not found",
      });
    }

    const newContent = new Content({
      pageId,
      section,
      type,
      title,
      content,
      order,
      settings,
      lastModifiedBy: req.user.id,
    });

    await newContent.save();

    // Log activity
    await createActivityLog({
      user: req.user.id,
      action: "create",
      resource: "content",
      resourceId: newContent._id,
      details: { pageId, section, type },
      ipAddress: req.ip,
      userAgent: req.get("User-Agent"),
    });

    res.status(201).json({
      success: true,
      message: "Content created successfully",
      data: newContent,
    });
  } catch (error) {
    console.error("Error creating content:", error);
    res.status(500).json({
      success: false,
      message: "Error creating content",
      error: error.message,
    });
  }
};

// Update content
const updateContent = async (req, res) => {
  try {
    const { id } = req.params;
    const updateData = {
      ...req.body,
      lastModifiedBy: req.user.id,
    };

    const content = await Content.findByIdAndUpdate(
      id,
      updateData,
      { new: true, runValidators: true }
    ).populate("lastModifiedBy", "firstName lastName email username");

    if (!content) {
      return res.status(404).json({
        success: false,
        message: "Content not found",
      });
    }

    // Log activity
    await createActivityLog({
      user: req.user.id,
      action: "update",
      resource: "content",
      resourceId: content._id,
      details: { pageId: content.pageId, section: content.section },
      ipAddress: req.ip,
      userAgent: req.get("User-Agent"),
    });

    res.json({
      success: true,
      message: "Content updated successfully",
      data: content,
    });
  } catch (error) {
    console.error("Error updating content:", error);
    res.status(500).json({
      success: false,
      message: "Error updating content",
      error: error.message,
    });
  }
};

// Delete content
const deleteContent = async (req, res) => {
  try {
    const { id } = req.params;
    
    const content = await Content.findById(id);
    if (!content) {
      return res.status(404).json({
        success: false,
        message: "Content not found",
      });
    }

    await Content.findByIdAndDelete(id);

    // Log activity
    await createActivityLog({
      user: req.user.id,
      action: "delete",
      resource: "content",
      resourceId: id,
      details: { pageId: content.pageId, section: content.section },
      ipAddress: req.ip,
      userAgent: req.get("User-Agent"),
    });

    res.json({
      success: true,
      message: "Content deleted successfully",
    });
  } catch (error) {
    console.error("Error deleting content:", error);
    res.status(500).json({
      success: false,
      message: "Error deleting content",
      error: error.message,
    });
  }
};

// Toggle content status
const toggleContentStatus = async (req, res) => {
  try {
    const { id } = req.params;
    const { isActive } = req.body;

    const content = await Content.findById(id);
    if (!content) {
      return res.status(404).json({
        success: false,
        message: "Content not found",
      });
    }

    const updatedContent = await Content.findByIdAndUpdate(
      id,
      { 
        isActive,
        lastModifiedBy: req.user.id 
      },
      { new: true }
    ).populate("lastModifiedBy", "firstName lastName email username");

    // Log activity
    await createActivityLog({
      user: req.user.id,
      action: "update",
      resource: "content",
      resourceId: content._id,
      details: { 
        pageId: content.pageId, 
        section: content.section,
        status: isActive ? "activated" : "deactivated"
      },
      ipAddress: req.ip,
      userAgent: req.get("User-Agent"),
    });

    res.json({
      success: true,
      message: "Content status updated successfully",
      data: updatedContent,
    });
  } catch (error) {
    console.error("Error updating content status:", error);
    res.status(500).json({
      success: false,
      message: "Error updating content status",
      error: error.message,
    });
  }
};

// Reorder content
const reorderContent = async (req, res) => {
  try {
    const { pageId } = req.params;
    const { contentOrder } = req.body; // Array of { id, order }

    // Update each content item's order
    const updatePromises = contentOrder.map(({ id, order }) =>
      Content.findByIdAndUpdate(id, { order, lastModifiedBy: req.user.id })
    );

    await Promise.all(updatePromises);

    // Log activity
    await createActivityLog({
      user: req.user.id,
      action: "update",
      resource: "content",
      details: { pageId, action: "reordered" },
      ipAddress: req.ip,
      userAgent: req.get("User-Agent"),
    });

    res.json({
      success: true,
      message: "Content reordered successfully",
    });
  } catch (error) {
    console.error("Error reordering content:", error);
    res.status(500).json({
      success: false,
      message: "Error reordering content",
      error: error.message,
    });
  }
};

// Bulk update content
const bulkUpdateContent = async (req, res) => {
  try {
    const { pageId } = req.params;
    const { updates } = req.body; // Array of { id, updates }

    const updatePromises = updates.map(({ id, updates: contentUpdates }) =>
      Content.findByIdAndUpdate(
        id,
        { ...contentUpdates, lastModifiedBy: req.user.id },
        { new: true, runValidators: true }
      )
    );

    const updatedContent = await Promise.all(updatePromises);

    // Log activity
    await createActivityLog({
      user: req.user.id,
      action: "update",
      resource: "content",
      details: { pageId, action: "bulk_update", count: updates.length },
      ipAddress: req.ip,
      userAgent: req.get("User-Agent"),
    });

    res.json({
      success: true,
      message: "Content updated successfully",
      data: updatedContent,
    });
  } catch (error) {
    console.error("Error bulk updating content:", error);
    res.status(500).json({
      success: false,
      message: "Error bulk updating content",
      error: error.message,
    });
  }
};

module.exports = {
  getContentByPageId,
  getContentBySection,
  getAllContent,
  getContentById,
  createContent,
  updateContent,
  deleteContent,
  toggleContentStatus,
  reorderContent,
  bulkUpdateContent,
}; 