const express = require('express');
const router = express.Router();
const Order = require('../models/Order');

// Create a route to handle order submissions
router.post('/api/orders', async (req, res) => {
  const orderData = req.body;

  try {
    const order = new Order(orderData);
    await order.save();
    res.status(201).json({ message: 'Order placed successfully' });
  } catch (error) {
    console.error('Error saving order:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});


// server/routes/orders.js

// ...
router.get('/api/orders', async (req, res) => {
    try {
      const orders = await Order.find().select('name address city pincode contactNo paymentMethod totalAmount');
      res.status(200).json(orders);
    } catch (error) {
      console.error('Error fetching orders:', error);
      res.status(500).json({ message: 'Internal server error' });
    }
  });
  
  


module.exports = router;
