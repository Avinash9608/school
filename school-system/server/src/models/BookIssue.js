const mongoose = require('mongoose');

const BookIssueSchema = new mongoose.Schema({
  book: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Book',
    required: true
  },
  student: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Student',
    required: true
  },
  issueDate: {
    type: Date,
    required: true,
    default: Date.now
  },
  dueDate: {
    type: Date,
    required: true
  },
  returnDate: {
    type: Date
  },
  status: {
    type: String,
    enum: ['issued', 'returned', 'overdue', 'lost', 'damaged'],
    default: 'issued'
  },
  fine: {
    amount: {
      type: Number,
      default: 0
    },
    reason: String,
    paid: {
      type: Boolean,
      default: false
    },
    paidDate: Date,
    paidAmount: {
      type: Number,
      default: 0
    }
  },
  remarks: {
    type: String
  },
  issuedBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  returnedTo: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('BookIssue', BookIssueSchema);
