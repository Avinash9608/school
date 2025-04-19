const mongoose = require('mongoose');

const StaffSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  employeeId: {
    type: String,
    required: [true, 'Please add an employee ID'],
    unique: true,
    trim: true
  },
  designation: {
    type: String,
    required: [true, 'Please add a designation'],
    trim: true
  },
  department: {
    type: String,
    required: [true, 'Please add a department'],
    trim: true
  },
  qualifications: [{
    degree: String,
    institution: String,
    year: Number,
    specialization: String
  }],
  joiningDate: {
    type: Date,
    required: [true, 'Please add joining date']
  },
  employmentType: {
    type: String,
    enum: ['full-time', 'part-time', 'contract', 'temporary'],
    default: 'full-time'
  },
  experience: {
    type: Number,
    default: 0
  },
  previousEmployment: [{
    organization: String,
    position: String,
    from: Date,
    to: Date,
    reasonForLeaving: String
  }],
  salary: {
    basic: Number,
    allowances: Number,
    deductions: Number,
    total: Number
  },
  bankDetails: {
    accountNumber: String,
    bankName: String,
    ifscCode: String,
    branch: String
  },
  documents: [{
    name: String,
    type: String,
    url: String,
    uploadDate: {
      type: Date,
      default: Date.now
    }
  }],
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

module.exports = mongoose.model('Staff', StaffSchema);
