const mongoose = require("mongoose");

const headerSchema = new mongoose.Schema(
  {
    logo: {
      text: {
        type: String,
        default: "Excellence Academy"
      },
      image: {
        type: String,
        default: ""
      }
    },
    contactInfo: {
      phone: {
        type: String,
        default: "+1 234 567 8900"
      },
      email: {
        type: String,
        default: "info@excellenceacademy.com"
      },
      address: {
        type: String,
        default: "123 Education Street, City, State 12345"
      }
    },
    navigation: [{
      title: {
        type: String,
        required: true
      },
      url: {
        type: String,
        required: true
      },
      order: {
        type: Number,
        default: 0
      },
      isActive: {
        type: Boolean,
        default: true
      },
      hasSubmenu: {
        type: Boolean,
        default: false
      },
      submenu: [{
        title: {
          type: String,
          required: true
        },
        url: {
          type: String,
          required: true
        },
        order: {
          type: Number,
          default: 0
        },
        isActive: {
          type: Boolean,
          default: true
        }
      }]
    }],
    ctaButton: {
      text: {
        type: String,
        default: "Apply Now"
      },
      url: {
        type: String,
        default: "/admissions"
      },
      isActive: {
        type: Boolean,
        default: true
      }
    },
    loginButton: {
      text: {
        type: String,
        default: "Login"
      },
      url: {
        type: String,
        default: "/admin/login"
      },
      isActive: {
        type: Boolean,
        default: true
      }
    },
    isActive: {
      type: Boolean,
      default: true
    },
    lastModifiedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: false
    }
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model("Header", headerSchema); 