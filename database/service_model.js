const mongoose = require('mongoose');

const serviceSchema = new mongoose.Schema({
  service_title: {
    type: String,
    required: true,
    unique: true,
    trim: true
  },
  service_desc: {
    type: String,
    trim: true
  },
  service_img: {
    type: String,
    trim: true
  },
  price: {
    type: Number, 
    required: true
  },
  isfixed: {
    type: Boolean,
    default: true
  }
});

const productSchema = new mongoose.Schema({
  category: {
    type: String,
    required: true,
    trim: true
  },
  title: {
    type: String,
    trim: true
  },
  desc: {
    type: String,
    trim: true
  },
  img: {
    type: String, 
    trim: true
  },
  services: [serviceSchema]
});

const Services = mongoose.model('Service', productSchema);

module.exports = Services;
