const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({
  fullname: String,
  email: String,
  phone: String,
  message: String,

});

const Contact = mongoose.model('Contact', contactSchema);

module.exports = Contact;
