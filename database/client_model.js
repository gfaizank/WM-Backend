const mongoose = require('mongoose')

const tokenSchema = new mongoose.Schema({
  value: {
    type: String
  }
});

const serviceSchema = new mongoose.Schema({
  service_title: {
    type: String,
    trim: true
  },
  service_desc: {
    type: String,
    trim: true
  },
  price: Number,
  isfixed: Boolean
});

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true
  },
  password: {
    type: String,
    required: true
  },
  confirmpassword: {
    type: String,
    required: true
  },
  otp: Number,
  tokens: [tokenSchema],
  services: [serviceSchema]
});


const Clients = new mongoose.model("Client",userSchema)

module.exports = Clients