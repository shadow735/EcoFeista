// server/models/Cart.js

const mongoose = require('mongoose');

const cartItemSchema = new mongoose.Schema({
  productName: {
    type: String,
    required: true,
  },
  productPrice: {
    type: Number,
    required: true,
  },
  quantity: {
    type: Number,
    default: 1, // Initialize the quantity with 1 by default
  },
  // Add other product details as needed
});

const cartSchema = new mongoose.Schema({
  items: [cartItemSchema],
  // You can add other fields to your cart schema as needed
  // For example, you may want to include a user reference to associate carts with users.
});

const Cart = mongoose.model('Cart', cartSchema);

module.exports = Cart;
