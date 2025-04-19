const mongoose = require('mongoose');

const FeeSchema = new mongoose.Schema({
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
  feeType: {
    type: String,
    enum: ['tuition', 'transportation', 'examination', 'library', 'laboratory', 'sports', 'computer', 'other'],
    required: true
  },
  amount: {
    type: Number,
    required: true
  },
  dueDate: {
    type: Date,
    required: true
  },
  paymentStatus: {
    type: String,
    enum: ['paid', 'unpaid', 'partial'],
    default: 'unpaid'
  },
  paymentDate: {
    type: Date
  },
  paymentMethod: {
    type: String,
    enum: ['cash', 'cheque', 'online', 'bank transfer', 'other']
  },
  transactionId: {
    type: String
  },
  paidAmount: {
    type: Number,
    default: 0
  },
  balance: {
    type: Number,
    default: function() {
      return this.amount;
    }
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
  remarks: {
    type: String
  },
  receiptNumber: {
    type: String
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

module.exports = mongoose.model('Fee', FeeSchema);
