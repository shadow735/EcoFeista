const mongoose = require('mongoose');

const OrderSchema = new mongoose.Schema({
  name: String,
  address: String,
  city: String,
  pincode: String,
  contactNo: String,
  paymentMethod: String,
  totalAmount: Number,
});

module.exports = mongoose.model('Order', OrderSchema);
