const mongoose = require("mongoose");

const contentSchema = new mongoose.Schema(
  {
    pageId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Page",
      required: true,
    },
    section: {
      type: String,
      required: true,
      trim: true,
    },
    type: {
      type: String,
      enum: ["text", "image", "gallery", "video", "form", "table", "list", "hero", "announcement"],
      default: "text",
    },
    title: {
      type: String,
      trim: true,
    },
    content: {
      type: mongoose.Schema.Types.Mixed, // Can be string, object, or array
      required: true,
    },
    order: {
      type: Number,
      default: 0,
    },
    isActive: {
      type: Boolean,
      default: true,
    },
    settings: {
      type: mongoose.Schema.Types.Mixed,
      default: {},
    },
    lastModifiedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

// Compound index for better query performance
contentSchema.index({ pageId: 1, section: 1 });
contentSchema.index({ pageId: 1, order: 1 });
contentSchema.index({ isActive: 1 });

module.exports = mongoose.model("Content", contentSchema); 