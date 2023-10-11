const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  brand: String,
  name: String,
  price: Number,
  desc: String,
  image: String, // Add an image field of type Buffer
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
