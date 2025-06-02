const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  message: String,
  captcha: String,
  phone: String 
 
});

module.exports = mongoose.model('User', userSchema);
