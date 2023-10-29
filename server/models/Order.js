const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  productName: String,
  quantity: Number,
  productPrice: Number,
});

const OrderSchema = new mongoose.Schema({
  customer: {
    name: String,
    address: String,
    city: String,
    pincode: String,
    contactNo: String,
  },
  paymentMethod: String,
  totalAmount: Number,
  items: [productSchema], // An array of products in the order
});

module.exports = mongoose.model('Order', OrderSchema);
