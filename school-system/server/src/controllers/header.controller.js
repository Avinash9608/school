const Header = require("../models/Header");
const { createActivityLog } = require("../utils/activityLogger");

// Get header content
const getHeader = async (req, res) => {
  try {
    const header = await Header.findOne({ isActive: true }).sort({ createdAt: -1 });
    
    if (!header) {
      return res.status(404).json({
        success: false,
        message: "Header not found"
      });
    }

    res.status(200).json({
      success: true,
      data: header
    });
  } catch (error) {
    console.error("Error fetching header:", error);
    res.status(500).json({
      success: false,
      message: "Internal server error"
    });
  }
};

// Get all headers (admin)
const getAllHeaders = async (req, res) => {
  try {
    const headers = await Header.find().sort({ createdAt: -1 });
    
    res.status(200).json({
      success: true,
      data: headers
    });
  } catch (error) {
    console.error("Error fetching headers:", error);
    res.status(500).json({
      success: false,
      message: "Internal server error"
    });
  }
};

// Create header
const createHeader = async (req, res) => {
  try {
    const headerData = {
      ...req.body,
      lastModifiedBy: req.user._id
    };

    const header = await Header.create(headerData);

    // Log activity
    await createActivityLog({
      user: req.user._id,
      action: "create",
      resource: "content",
      resourceId: header._id,
      message: `Created header: ${header.logo.text}`,
      ipAddress: req.ip,
      userAgent: req.get('User-Agent')
    });

    res.status(201).json({
      success: true,
      message: "Header created successfully",
      data: header
    });
  } catch (error) {
    console.error("Error creating header:", error);
    res.status(500).json({
      success: false,
      message: "Internal server error"
    });
  }
};

// Update header
const updateHeader = async (req, res) => {
  try {
    const { id } = req.params;
    const updateData = {
      ...req.body,
      lastModifiedBy: req.user._id
    };

    const header = await Header.findByIdAndUpdate(
      id,
      updateData,
      { new: true, runValidators: true }
    );

    if (!header) {
      return res.status(404).json({
        success: false,
        message: "Header not found"
      });
    }

    // Log activity
    await createActivityLog({
      user: req.user._id,
      action: "update",
      resource: "content",
      resourceId: header._id,
      message: `Updated header: ${header.logo.text}`,
      ipAddress: req.ip,
      userAgent: req.get('User-Agent')
    });

    res.status(200).json({
      success: true,
      message: "Header updated successfully",
      data: header
    });
  } catch (error) {
    console.error("Error updating header:", error);
    res.status(500).json({
      success: false,
      message: "Internal server error"
    });
  }
};

// Delete header
const deleteHeader = async (req, res) => {
  try {
    const { id } = req.params;
    
    const header = await Header.findByIdAndDelete(id);

    if (!header) {
      return res.status(404).json({
        success: false,
        message: "Header not found"
      });
    }

    // Log activity
    await createActivityLog({
      user: req.user._id,
      action: "delete",
      resource: "content",
      resourceId: header._id,
      message: `Deleted header: ${header.logo.text}`,
      ipAddress: req.ip,
      userAgent: req.get('User-Agent')
    });

    res.status(200).json({
      success: true,
      message: "Header deleted successfully"
    });
  } catch (error) {
    console.error("Error deleting header:", error);
    res.status(500).json({
      success: false,
      message: "Internal server error"
    });
  }
};

// Toggle header status
const toggleHeaderStatus = async (req, res) => {
  try {
    const { id } = req.params;
    
    const header = await Header.findById(id);
    
    if (!header) {
      return res.status(404).json({
        success: false,
        message: "Header not found"
      });
    }

    header.isActive = !header.isActive;
    header.lastModifiedBy = req.user._id;
    await header.save();

    // Log activity
    await createActivityLog({
      user: req.user._id,
      action: "update",
      resource: "content",
      resourceId: header._id,
      message: `${header.isActive ? 'Activated' : 'Deactivated'} header: ${header.logo.text}`,
      ipAddress: req.ip,
      userAgent: req.get('User-Agent')
    });

    res.status(200).json({
      success: true,
      message: `Header ${header.isActive ? 'activated' : 'deactivated'} successfully`,
      data: header
    });
  } catch (error) {
    console.error("Error toggling header status:", error);
    res.status(500).json({
      success: false,
      message: "Internal server error"
    });
  }
};

module.exports = {
  getHeader,
  getAllHeaders,
  createHeader,
  updateHeader,
  deleteHeader,
  toggleHeaderStatus
}; 