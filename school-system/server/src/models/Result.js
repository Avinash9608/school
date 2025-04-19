const mongoose = require('mongoose');

const ResultSchema = new mongoose.Schema({
  student: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Student',
    required: true
  },
  class: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Class',
    required: true
  },
  examType: {
    type: String,
    enum: ['unit_test', 'mid_term', 'final', 'quarterly', 'half_yearly', 'annual'],
    required: true
  },
  academicYear: {
    type: String,
    required: true
  },
  term: {
    type: String,
    enum: ['term1', 'term2', 'term3', 'annual'],
    required: true
  },
  subjects: [{
    name: {
      type: String,
      required: true
    },
    marksObtained: {
      type: Number,
      required: true
    },
    totalMarks: {
      type: Number,
      required: true,
      default: 100
    },
    grade: String,
    remarks: String
  }],
  totalMarksObtained: {
    type: Number,
    required: true
  },
  totalMaxMarks: {
    type: Number,
    required: true
  },
  percentage: {
    type: Number,
    required: true
  },
  grade: {
    type: String
  },
  rank: {
    type: Number
  },
  result: {
    type: String,
    enum: ['pass', 'fail', 'compartment'],
    required: true
  },
  remarks: {
    type: String
  },
  attendance: {
    present: Number,
    total: Number,
    percentage: Number
  },
  declaredDate: {
    type: Date,
    default: Date.now
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

// Compound index to ensure a student can only have one result per exam type per term per academic year
ResultSchema.index({ student: 1, examType: 1, term: 1, academicYear: 1 }, { unique: true });

module.exports = mongoose.model('Result', ResultSchema);
