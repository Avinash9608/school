const mongoose = require("mongoose");

const footerSchema = new mongoose.Schema(
  {
    companyInfo: {
      name: {
        type: String,
        default: "Excellence Academy"
      },
      description: {
        type: String,
        default: "Excellence Academy is committed to providing quality education and fostering academic excellence."
      },
      logo: {
        type: String,
        default: ""
      }
    },
    contactInfo: {
      address: {
        type: String,
        default: "123 Education Street, City, State 12345"
      },
      phone: {
        type: String,
        default: "+1 234 567 8900"
      },
      email: {
        type: String,
        default: "info@excellenceacademy.com"
      },
      workingHours: {
        type: String,
        default: "Monday - Friday: 8:00 AM - 4:00 PM"
      }
    },
    quickLinks: [{
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
    }],
    socialLinks: {
      facebook: {
        type: String,
        default: ""
      },
      twitter: {
        type: String,
        default: ""
      },
      instagram: {
        type: String,
        default: ""
      },
      linkedin: {
        type: String,
        default: ""
      },
      youtube: {
        type: String,
        default: ""
      }
    },
    newsletter: {
      title: {
        type: String,
        default: "Subscribe to Our Newsletter"
      },
      description: {
        type: String,
        default: "Stay updated with our latest news and events"
      },
      isActive: {
        type: Boolean,
        default: true
      }
    },
    copyright: {
      text: {
        type: String,
        default: "© 2024 Excellence Academy. All rights reserved."
      },
      links: [{
        title: {
          type: String,
          required: true
        },
        url: {
          type: String,
          required: true
        }
      }]
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

module.exports = mongoose.model("Footer", footerSchema); 