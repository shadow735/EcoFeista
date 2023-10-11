const express = require('express');
const router = express.Router();
const Cart = require('../models/Cart');

let cartId = null;

router.post('/create-cart', async (req, res) => {
  try {
    if (!cartId) {
      const newCart = await Cart.create({});
      cartId = newCart._id;
    }

    res.json({ cartId });
  } catch (error) {
    console.error('Error creating cart:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

router.post('/add-to-cart', async (req, res) => {
  const { productName, productPrice } = req.body;

  try {
    if (!cartId) {
      return res.status(404).json({ error: 'Cart not found' });
    }

    const cart = await Cart.findById(cartId);

    if (!cart) {
      return res.status(404).json({ error: 'Cart not found' });
    }

    const existingItem = cart.items.find(
      (item) => item.productName === productName && item.productPrice === productPrice
    );

    if (existingItem) {
      existingItem.quantity += 1; // Increase quantity by one
    } else {
      cart.items.push({
        productName,
        productPrice,
        quantity: 1, // Set the default quantity to 1
      });
    }

    await cart.save();

    res.json({ message: 'Product added to cart successfully' });
  } catch (error) {
    console.error('Error adding product to cart:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

router.get('/get-cart-content', async (req, res) => {
  try {
    if (!cartId) {
      return res.status(404).json({ error: 'Cart not found' });
    }

    const cart = await Cart.findById(cartId);

    if (!cart) {
      return res.status(404).json({ error: 'Cart not found' });
    }

    res.json({ items: cart.items });
  } catch (error) {
    console.error('Error fetching cart content:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

router.post('/clear-cart', async (req, res) => {
  try {
    const cart = await Cart.findById(cartId);

    if (!cart) {
      return res.status(404).json({ error: 'Cart not found' });
    }

    cart.items = [];

    await cart.save();

    res.json({ message: 'Cart cleared successfully' });
  } catch (error) {
    console.error('Error clearing cart:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// server/routes/carts.js

// ...

router.get('/api/carts', async (req, res) => {
  try {
    const carts = await Cart.find(); // Fetch all cart items
    const cartItems = carts.flatMap(cart => cart.items); // Flatten the cart items array

    // Extract the required fields (productName, quantity, productPrice) from cart items
    const formattedCartItems = cartItems.map(item => ({
      productName: item.productName,
      quantity: item.quantity,
      productPrice: item.productPrice,
    }));

    res.status(200).json(formattedCartItems);
  } catch (error) {
    console.error('Error fetching cart items:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});





module.exports = router;
