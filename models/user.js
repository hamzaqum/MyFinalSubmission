const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

// User Schema
const UserSchema = mongoose.Schema({
  username: {
    type: String,
    index: true
  },
  country: {
    type: String,
  },
  password: {
    type: String
  },
  email: {
    type: String
  },
  name: {
    type: String
  }
});

const User = module.exports = mongoose.model('User', UserSchema);

