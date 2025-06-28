const Media = require("../models/Media");
const path = require("path");
const fs = require("fs");

// List all media
const listMedia = async (req, res) => {
  try {
    const media = await Media.find({ isActive: true }).sort({ createdAt: -1 });
    res.json({ success: true, data: media });
  } catch (error) {
    console.error("Error listing media:", error);
    res.status(500).json({ success: false, message: "Error listing media", error: error.message });
  }
};

// Upload media (single file)
const uploadMedia = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ success: false, message: "No file uploaded" });
    }
    const { originalname, filename, mimetype, size, path: filePath } = req.file;
    const url = `/uploads/${filename}`;
    const title = req.body.title || originalname;
    const type = req.body.type || "image";
    const alt = req.body.alt || "";
    const description = req.body.description || "";
    const category = req.body.category || "";
    const tags = req.body.tags ? req.body.tags.split(",") : [];
    const dimensions = req.body.dimensions ? JSON.parse(req.body.dimensions) : {};

    const media = new Media({
      title,
      filename,
      originalName: originalname,
      mimeType: mimetype,
      size,
      path: filePath,
      url,
      alt,
      description,
      type,
      category,
      tags,
      dimensions,
      uploadedBy: req.user.id,
    });
    await media.save();
    res.status(201).json({ success: true, data: media });
  } catch (error) {
    console.error("Error uploading media:", error);
    res.status(500).json({ success: false, message: "Error uploading media", error: error.message });
  }
};

// Delete media
const deleteMedia = async (req, res) => {
  try {
    const { id } = req.params;
    const media = await Media.findById(id);
    if (!media) {
      return res.status(404).json({ success: false, message: "Media not found" });
    }
    // Remove file from disk
    if (media.path && fs.existsSync(media.path)) {
      fs.unlinkSync(media.path);
    }
    await Media.findByIdAndDelete(id);
    res.json({ success: true, message: "Media deleted successfully" });
  } catch (error) {
    console.error("Error deleting media:", error);
    res.status(500).json({ success: false, message: "Error deleting media", error: error.message });
  }
};

module.exports = {
  listMedia,
  uploadMedia,
  deleteMedia,
}; 