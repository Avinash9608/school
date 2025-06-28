const Footer = require("../models/Footer");
const { createActivityLog } = require("../utils/activityLogger");

// Get footer content
const getFooter = async (req, res) => {
  try {
    const footer = await Footer.findOne({ isActive: true }).sort({ createdAt: -1 });
    
    if (!footer) {
      return res.status(404).json({
        success: false,
        message: "Footer not found"
      });
    }

    res.status(200).json({
      success: true,
      data: footer
    });
  } catch (error) {
    console.error("Error fetching footer:", error);
    res.status(500).json({
      success: false,
      message: "Internal server error"
    });
  }
};

// Get all footers (admin)
const getAllFooters = async (req, res) => {
  try {
    const footers = await Footer.find().sort({ createdAt: -1 });
    
    res.status(200).json({
      success: true,
      data: footers
    });
  } catch (error) {
    console.error("Error fetching footers:", error);
    res.status(500).json({
      success: false,
      message: "Internal server error"
    });
  }
};

// Create footer
const createFooter = async (req, res) => {
  try {
    const footerData = {
      ...req.body,
      lastModifiedBy: req.user._id
    };

    const footer = await Footer.create(footerData);

    // Log activity
    await createActivityLog({
      user: req.user._id,
      action: "create",
      resource: "content",
      resourceId: footer._id,
      message: `Created footer: ${footer.companyInfo.name}`,
      ipAddress: req.ip,
      userAgent: req.get('User-Agent')
    });

    res.status(201).json({
      success: true,
      message: "Footer created successfully",
      data: footer
    });
  } catch (error) {
    console.error("Error creating footer:", error);
    res.status(500).json({
      success: false,
      message: "Internal server error"
    });
  }
};

// Update footer
const updateFooter = async (req, res) => {
  try {
    const { id } = req.params;
    const updateData = {
      ...req.body,
      lastModifiedBy: req.user._id
    };

    const footer = await Footer.findByIdAndUpdate(
      id,
      updateData,
      { new: true, runValidators: true }
    );

    if (!footer) {
      return res.status(404).json({
        success: false,
        message: "Footer not found"
      });
    }

    // Log activity
    await createActivityLog({
      user: req.user._id,
      action: "update",
      resource: "content",
      resourceId: footer._id,
      message: `Updated footer: ${footer.companyInfo.name}`,
      ipAddress: req.ip,
      userAgent: req.get('User-Agent')
    });

    res.status(200).json({
      success: true,
      message: "Footer updated successfully",
      data: footer
    });
  } catch (error) {
    console.error("Error updating footer:", error);
    res.status(500).json({
      success: false,
      message: "Internal server error"
    });
  }
};

// Delete footer
const deleteFooter = async (req, res) => {
  try {
    const { id } = req.params;
    
    const footer = await Footer.findByIdAndDelete(id);

    if (!footer) {
      return res.status(404).json({
        success: false,
        message: "Footer not found"
      });
    }

    // Log activity
    await createActivityLog({
      user: req.user._id,
      action: "delete",
      resource: "content",
      resourceId: footer._id,
      message: `Deleted footer: ${footer.companyInfo.name}`,
      ipAddress: req.ip,
      userAgent: req.get('User-Agent')
    });

    res.status(200).json({
      success: true,
      message: "Footer deleted successfully"
    });
  } catch (error) {
    console.error("Error deleting footer:", error);
    res.status(500).json({
      success: false,
      message: "Internal server error"
    });
  }
};

// Toggle footer status
const toggleFooterStatus = async (req, res) => {
  try {
    const { id } = req.params;
    
    const footer = await Footer.findById(id);
    
    if (!footer) {
      return res.status(404).json({
        success: false,
        message: "Footer not found"
      });
    }

    footer.isActive = !footer.isActive;
    footer.lastModifiedBy = req.user._id;
    await footer.save();

    // Log activity
    await createActivityLog({
      user: req.user._id,
      action: "update",
      resource: "content",
      resourceId: footer._id,
      message: `${footer.isActive ? 'Activated' : 'Deactivated'} footer: ${footer.companyInfo.name}`,
      ipAddress: req.ip,
      userAgent: req.get('User-Agent')
    });

    res.status(200).json({
      success: true,
      message: `Footer ${footer.isActive ? 'activated' : 'deactivated'} successfully`,
      data: footer
    });
  } catch (error) {
    console.error("Error toggling footer status:", error);
    res.status(500).json({
      success: false,
      message: "Internal server error"
    });
  }
};

module.exports = {
  getFooter,
  getAllFooters,
  createFooter,
  updateFooter,
  deleteFooter,
  toggleFooterStatus
}; 