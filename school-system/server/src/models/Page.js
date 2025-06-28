const mongoose = require("mongoose");

const pageSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    slug: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },
    description: {
      type: String,
      trim: true,
    },
    content: {
      type: mongoose.Schema.Types.Mixed, // Can be string, object, or array
      default: {},
    },
    meta: {
      title: String,
      description: String,
      keywords: [String],
    },
    isActive: {
      type: Boolean,
      default: true,
    },
    isPublished: {
      type: Boolean,
      default: true,
    },
    order: {
      type: Number,
      default: 0,
    },
    parentPage: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Page",
      default: null,
    },
    template: {
      type: String,
      default: "default",
    },
    lastModifiedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: false,
    },
  },
  {
    timestamps: true,
  }
);

// Index for better query performance
pageSchema.index({ slug: 1 });
pageSchema.index({ isActive: 1, isPublished: 1 });
pageSchema.index({ parentPage: 1 });

module.exports = mongoose.model("Page", pageSchema); 