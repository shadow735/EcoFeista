const mongoose = require('mongoose');

const imageSchema = new mongoose.Schema({
  title: String,
  description: String,
  imagePath: String,
});

module.exports = mongoose.model('Image', imageSchema);
