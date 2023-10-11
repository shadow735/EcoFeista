const express = require('express');
const router = express.Router();
const Product = require('../models/Product');

// Route for creating a new product
router.post('/create', async (req, res) => {
  try {
    const { brand, name, price, desc, image } = req.body;

    // Create a new product instance
    const newProduct = new Product({
      brand,
      name,
      price,
      desc,
      image,
    });

    // Save the new product to the database
    await newProduct.save();

    res.status(201).json({ message: 'Product created successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});


router.get('/', async (req, res) => {
  try {
    // Retrieve all products from the database
    const products = await Product.find();

    // Map products to include image data
    const productsWithImageData = products.map((product) => ({
      _id: product._id,
      brand: product.brand,
      name: product.name,
      price: product.price,
      desc: product.desc,
      // Include the image data as a base64-encoded string
      image: product.image.toString('base64'),
    }));

    res.json(productsWithImageData);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Route for updating a product's price
router.put('/update/:id', async (req, res) => {
  const productId = req.params.id;
  const newPrice = req.body.price; // Get the new price from the request body

  try {
    // Find the product by ID and update its price
    const updatedProduct = await Product.findByIdAndUpdate(
      productId,
      { $set: { price: newPrice } },
      { new: true }
    );

    if (!updatedProduct) {
      return res.status(404).json({ error: 'Product not found' });
    }

    res.json({ message: 'Product price updated successfully', product: updatedProduct });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Route for deleting a product by ID
router.delete('/delete/:id', async (req, res) => {
  const productId = req.params.id;
  try {
    // Find the product by ID and delete it
    const deletedProduct = await Product.findByIdAndDelete(productId);

    if (!deletedProduct) {
      return res.status(404).json({ error: 'Product not found' });
    }

    res.json({ message: 'Product deleted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;






// Route for fetching all products
router.get('/products', async (req, res) => {
  try {
    // Retrieve all products from the database
    const products = await Product.find();

    // Map products to include image data (base64-encoded)
    const productsWithImageData = products.map((product) => ({
      _id: product._id,
      brand: product.brand,
      name: product.name,
      price: product.price,
      desc: product.desc,
      // Convert the image buffer to a base64-encoded string
      image: product.image.toString('base64'),
    }));

    res.json(productsWithImageData);
  } catch (error) {
    console.error('Error fetching products:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});
