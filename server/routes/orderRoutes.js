const express = require('express');
const router = express.Router();
const Order = require('../models/Order');

// Create a route to handle order submissions
router.post('/orders', async (req, res) => {
  try {
    const { name, address, city, pincode, contactNo, paymentMethod, totalAmount, items } = req.body;

    // Create a new order object
    const newOrder = new Order({
      customer: {
        name,
        address,
        city,
        pincode,
        contactNo,
      },
      paymentMethod,
      totalAmount,
      items: items, // Use the items array from the request
    });

    // Save the order to the database
    await newOrder.save();

    res.json({ message: 'Order saved successfully' });
  } catch (error) {
    console.error('Error creating order:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});



router.get('/api/orders', async (req, res) => {
  try {
    const orders = await Order.find().select('customer paymentMethod totalAmount items');
    res.status(200).json(orders);
  } catch (error) {
    console.error('Error fetching orders:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});


module.exports = router;



