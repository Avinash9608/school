const mongoose = require('mongoose');

const FacilitySchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please add a name'],
    trim: true
  },
  type: {
    type: String,
    enum: ['computer_lab', 'smart_class', 'library', 'science_lab', 'sports', 'auditorium', 'other'],
    required: [true, 'Please specify facility type']
  },
  location: {
    type: String,
    required: [true, 'Please add a location'],
    trim: true
  },
  capacity: {
    type: Number
  },
  description: {
    type: String,
    trim: true
  },
  inCharge: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Staff'
  },
  equipment: [{
    name: String,
    quantity: Number,
    condition: {
      type: String,
      enum: ['excellent', 'good', 'fair', 'poor', 'not_working']
    },
    purchaseDate: Date,
    lastMaintenanceDate: Date
  }],
  schedule: [{
    day: {
      type: String,
      enum: ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday']
    },
    slots: [{
      startTime: String,
      endTime: String,
      class: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Class'
      },
      teacher: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
      },
      purpose: String
    }]
  }],
  images: [String],
  isActive: {
    type: Boolean,
    default: true
  },
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  updatedBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Facility', FacilitySchema);
