const mongoose = require("mongoose");

const activityLogSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    action: {
      type: String,
      required: true,
      enum: [
        "create",
        "update",
        "delete",
        "publish",
        "unpublish",
        "login",
        "logout",
        "upload",
        "download",
        "export",
        "import",
      ],
    },
    resource: {
      type: String,
      required: true,
      enum: ["page", "content", "media", "user", "settings", "system"],
    },
    resourceId: {
      type: mongoose.Schema.Types.ObjectId,
      refPath: "resource",
    },
    details: {
      type: mongoose.Schema.Types.Mixed,
      default: {},
    },
    ipAddress: {
      type: String,
    },
    userAgent: {
      type: String,
    },
    status: {
      type: String,
      enum: ["success", "error", "warning"],
      default: "success",
    },
    message: {
      type: String,
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

// Index for better query performance
activityLogSchema.index({ user: 1, createdAt: -1 });
activityLogSchema.index({ action: 1 });
activityLogSchema.index({ resource: 1 });
activityLogSchema.index({ createdAt: -1 });

module.exports = mongoose.model("ActivityLog", activityLogSchema); 