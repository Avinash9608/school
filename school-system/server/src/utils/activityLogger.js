const ActivityLog = require("../models/ActivityLog");

/**
 * Create an activity log entry
 * @param {Object} logData - The log data object
 * @param {string} logData.user - User ID
 * @param {string} logData.action - Action performed (create, update, delete, etc.)
 * @param {string} logData.resource - Resource type (page, content, media, etc.)
 * @param {string} logData.resourceId - Resource ID (optional)
 * @param {Object} logData.details - Additional details about the action
 * @param {string} logData.ipAddress - IP address of the user
 * @param {string} logData.userAgent - User agent string
 * @param {string} logData.status - Status of the action (success, error, warning)
 * @param {string} logData.message - Custom message
 */
const createActivityLog = async (logData) => {
  try {
    const activityLog = new ActivityLog({
      user: logData.user,
      action: logData.action,
      resource: logData.resource,
      resourceId: logData.resourceId,
      details: logData.details || {},
      ipAddress: logData.ipAddress,
      userAgent: logData.userAgent,
      status: logData.status || "success",
      message: logData.message,
    });

    await activityLog.save();
    return activityLog;
  } catch (error) {
    console.error("Error creating activity log:", error);
    // Don't throw error to avoid breaking the main operation
    return null;
  }
};

/**
 * Get activity logs with pagination and filtering
 * @param {Object} options - Query options
 * @param {number} options.page - Page number (default: 1)
 * @param {number} options.limit - Items per page (default: 20)
 * @param {string} options.user - Filter by user ID
 * @param {string} options.action - Filter by action
 * @param {string} options.resource - Filter by resource type
 * @param {string} options.status - Filter by status
 * @param {Date} options.startDate - Filter by start date
 * @param {Date} options.endDate - Filter by end date
 */
const getActivityLogs = async (options = {}) => {
  try {
    const {
      page = 1,
      limit = 20,
      user,
      action,
      resource,
      status,
      startDate,
      endDate,
    } = options;

    const query = {};

    // Apply filters
    if (user) query.user = user;
    if (action) query.action = action;
    if (resource) query.resource = resource;
    if (status) query.status = status;

    // Date range filter
    if (startDate || endDate) {
      query.createdAt = {};
      if (startDate) query.createdAt.$gte = new Date(startDate);
      if (endDate) query.createdAt.$lte = new Date(endDate);
    }

    const skip = (page - 1) * limit;

    const [logs, total] = await Promise.all([
      ActivityLog.find(query)
        .populate("user", "firstName lastName email username")
        .sort({ createdAt: -1 })
        .skip(skip)
        .limit(limit),
      ActivityLog.countDocuments(query),
    ]);

    return {
      logs,
      pagination: {
        page,
        limit,
        total,
        pages: Math.ceil(total / limit),
      },
    };
  } catch (error) {
    console.error("Error fetching activity logs:", error);
    throw error;
  }
};

/**
 * Get recent activity logs for dashboard
 * @param {number} limit - Number of recent logs to fetch (default: 10)
 */
const getRecentActivityLogs = async (limit = 10) => {
  try {
    const logs = await ActivityLog.find({})
      .populate("user", "firstName lastName email username")
      .sort({ createdAt: -1 })
      .limit(limit);

    return logs;
  } catch (error) {
    console.error("Error fetching recent activity logs:", error);
    throw error;
  }
};

/**
 * Get activity statistics for dashboard
 */
const getActivityStats = async () => {
  try {
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const yesterday = new Date(today);
    yesterday.setDate(yesterday.getDate() - 1);

    const lastWeek = new Date(today);
    lastWeek.setDate(lastWeek.getDate() - 7);

    const lastMonth = new Date(today);
    lastMonth.setMonth(lastMonth.getMonth() - 1);

    const [
      todayCount,
      yesterdayCount,
      lastWeekCount,
      lastMonthCount,
      totalCount,
      actionStats,
      resourceStats,
    ] = await Promise.all([
      ActivityLog.countDocuments({ createdAt: { $gte: today } }),
      ActivityLog.countDocuments({
        createdAt: { $gte: yesterday, $lt: today },
      }),
      ActivityLog.countDocuments({ createdAt: { $gte: lastWeek } }),
      ActivityLog.countDocuments({ createdAt: { $gte: lastMonth } }),
      ActivityLog.countDocuments({}),
      ActivityLog.aggregate([
        { $group: { _id: "$action", count: { $sum: 1 } } },
        { $sort: { count: -1 } },
      ]),
      ActivityLog.aggregate([
        { $group: { _id: "$resource", count: { $sum: 1 } } },
        { $sort: { count: -1 } },
      ]),
    ]);

    return {
      counts: {
        today: todayCount,
        yesterday: yesterdayCount,
        lastWeek: lastWeekCount,
        lastMonth: lastMonthCount,
        total: totalCount,
      },
      actionStats,
      resourceStats,
    };
  } catch (error) {
    console.error("Error fetching activity stats:", error);
    throw error;
  }
};

/**
 * Clean old activity logs (keep only last N days)
 * @param {number} daysToKeep - Number of days to keep (default: 90)
 */
const cleanOldActivityLogs = async (daysToKeep = 90) => {
  try {
    const cutoffDate = new Date();
    cutoffDate.setDate(cutoffDate.getDate() - daysToKeep);

    const result = await ActivityLog.deleteMany({
      createdAt: { $lt: cutoffDate },
    });

    console.log(`Cleaned ${result.deletedCount} old activity logs`);
    return result.deletedCount;
  } catch (error) {
    console.error("Error cleaning old activity logs:", error);
    throw error;
  }
};

module.exports = {
  createActivityLog,
  getActivityLogs,
  getRecentActivityLogs,
  getActivityStats,
  cleanOldActivityLogs,
}; 