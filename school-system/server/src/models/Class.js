const mongoose = require('mongoose');

const ClassSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please add a class name'],
    trim: true
  },
  level: {
    type: String,
    enum: ['playclass', 'nc', 'lkg', 'ukg', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10'],
    required: [true, 'Please specify class level']
  },
  section: {
    type: String,
    required: [true, 'Please add a section']
  },
  classTeacher: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  subjects: [{
    name: {
      type: String,
      required: [true, 'Please add subject name']
    },
    teacher: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
    },
    totalMarks: {
      type: Number,
      default: 100
    },
    passingMarks: {
      type: Number,
      default: 35
    }
  }],
  schedule: [{
    day: {
      type: String,
      enum: ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday']
    },
    periods: [{
      subject: String,
      startTime: String,
      endTime: String,
      teacher: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
      }
    }]
  }],
  academicYear: {
    type: String,
    required: [true, 'Please add academic year']
  },
  room: {
    type: String
  },
  isActive: {
    type: Boolean,
    default: true
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Class', ClassSchema);
