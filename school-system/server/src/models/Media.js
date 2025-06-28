const mongoose = require("mongoose");

const mediaSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    filename: {
      type: String,
      required: true,
    },
    originalName: {
      type: String,
      required: true,
    },
    mimeType: {
      type: String,
      required: true,
    },
    size: {
      type: Number,
      required: true,
    },
    path: {
      type: String,
      required: true,
    },
    url: {
      type: String,
      required: true,
    },
    alt: {
      type: String,
      trim: true,
    },
    description: {
      type: String,
      trim: true,
    },
    type: {
      type: String,
      enum: ["image", "video", "document", "audio"],
      default: "image",
    },
    category: {
      type: String,
      trim: true,
    },
    tags: [String],
    dimensions: {
      width: Number,
      height: Number,
    },
    isActive: {
      type: Boolean,
      default: true,
    },
    uploadedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

// Index for better query performance
mediaSchema.index({ type: 1 });
mediaSchema.index({ category: 1 });
mediaSchema.index({ tags: 1 });
mediaSchema.index({ isActive: 1 });
mediaSchema.index({ uploadedBy: 1 });

module.exports = mongoose.model("Media", mediaSchema); 