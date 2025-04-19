const mongoose = require('mongoose');

const BookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Please add a title'],
    trim: true
  },
  isbn: {
    type: String,
    unique: true,
    trim: true
  },
  author: {
    type: String,
    required: [true, 'Please add an author'],
    trim: true
  },
  publisher: {
    type: String,
    trim: true
  },
  edition: {
    type: String,
    trim: true
  },
  category: {
    type: String,
    required: [true, 'Please add a category'],
    trim: true
  },
  subject: {
    type: String,
    trim: true
  },
  language: {
    type: String,
    trim: true
  },
  publicationYear: {
    type: Number
  },
  quantity: {
    type: Number,
    required: [true, 'Please add quantity'],
    default: 1
  },
  availableQuantity: {
    type: Number,
    default: function() {
      return this.quantity;
    }
  },
  price: {
    type: Number
  },
  location: {
    rack: String,
    shelf: String,
    row: String
  },
  description: {
    type: String,
    trim: true
  },
  coverImage: {
    type: String
  },
  addedBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  isActive: {
    type: Boolean,
    default: true
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Book', BookSchema);
