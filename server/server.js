const express = require('express');
const cors = require('cors');
const app = express();
const bodyParser = require('body-parser');
const { connectToDatabase } = require('./config/config');
const mongoose = require('mongoose');
const path = require('path');

// Import models
const User = require('./models/User');
const Contact = require('./models/Contact');
const Blog = require('./models/Blog');
const Cart = require('./models/Cart');

// Import routes
const userAuthRoutes = require('./routes/userAuth');
const userRoutes = require('./routes/userRoutes');
const productRoutes = require('./routes/productRoutes');
const contactRoutes = require('./routes/contactRoutes');
const adminAuthRoutes = require('./routes/adminAuth');
const cartRoutes = require('./routes/cart');
const Blogs = require('./routes/Blog');
const imageRoute = require('./routes/image');
const orderRoutes = require('./routes/orderRoutes');

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb', extended: true }));
app.use(bodyParser.json({ limit: '50mb' })); // Increase the payload limit to 50MB

// Serve uploaded images statically from the data/images directory
app.use('/api/images/uploads', express.static(path.join(__dirname, '../data/images')));

// Connect to the database
connectToDatabase().catch((err) => {
  console.error('Database connection error:', err);
});

// Define routes
app.use('/admin', adminAuthRoutes); // Admin authentication routes
app.use('/user', userRoutes); // User routes
app.use('/contact', contactRoutes); // Contact routes
app.use('/products', productRoutes); // Product routes
app.use('/user', userAuthRoutes); // User authentication routes
app.use('/blog', Blogs); // Blog routes
app.use('/cart', cartRoutes); // Cart routes
app.use('/api/images', imageRoute);
app.use('/', orderRoutes);

// Get all contacts
app.get('/contacts', async (req, res) => {
  try {
    // Retrieve all contacts from the database
    const contacts = await Contact.find();
    res.json(contacts);
  } catch (error) {
    console.error('Error fetching contacts:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Get all users
app.get('/users', async (req, res) => {
  try {
    // Retrieve all users from the database
    const users = await User.find();
    res.json(users);
  } catch (error) {
    console.error('Error fetching users:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Handle base64-encoded image data
app.post('/upload', (req, res) => {
  try {
    const { image } = req.body; // Base64-encoded image data

    if (!image) {
      return res.status(400).json({ error: 'No image data provided' });
    }

    // Handle the base64-encoded image data, e.g., save it to a file or a database

    res.status(200).json({ message: 'Image data received and processed successfully' });
  } catch (error) {
    console.error('Error handling image data:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Start your server
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
