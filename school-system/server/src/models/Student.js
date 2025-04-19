const mongoose = require('mongoose');

const StudentSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  rollNumber: {
    type: String,
    required: [true, 'Please add a roll number'],
    unique: true,
    trim: true
  },
  class: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Class',
    required: true
  },
  section: {
    type: String,
    required: [true, 'Please add a section']
  },
  admissionDate: {
    type: Date,
    default: Date.now
  },
  dateOfBirth: {
    type: Date,
    required: [true, 'Please add date of birth']
  },
  gender: {
    type: String,
    enum: ['male', 'female', 'other'],
    required: [true, 'Please specify gender']
  },
  bloodGroup: {
    type: String
  },
  parentDetails: {
    fatherName: {
      type: String,
      required: [true, 'Please add father name']
    },
    fatherOccupation: String,
    fatherContactNumber: String,
    motherName: {
      type: String,
      required: [true, 'Please add mother name']
    },
    motherOccupation: String,
    motherContactNumber: String,
    guardianName: String,
    guardianRelation: String,
    guardianContactNumber: String,
    guardianAddress: String
  },
  previousSchool: {
    name: String,
    address: String,
    reasonForLeaving: String
  },
  medicalConditions: [String],
  emergencyContact: {
    name: String,
    relation: String,
    contactNumber: String,
    address: String
  },
  isActive: {
    type: Boolean,
    default: true
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Student', StudentSchema);
