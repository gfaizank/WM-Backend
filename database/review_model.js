const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
  image: {
    type: String,
    trim: true
  },
  rating: {
    type: Number,
    required: true
  },
  name: {
    type: String,
    required: true,
    trim: true
  },
  rating_txt: {
    type: String,
    trim: true
  }
});

const Review = mongoose.model('Review', reviewSchema);

module.exports = Review;
