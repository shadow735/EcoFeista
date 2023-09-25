const express = require('express');
const cors = require('cors');
const app = express();
const bodyParser = require('body-parser');
const { connectToDatabase } = require('./config/config');
const mongoose = require('mongoose');
const imageRoute = require('./routes/image');
// Import models
const User = require('./models/User');
const Contact = require('./models/Contact');
const path = require('path');
// Import routes
const userAuthRoutes = require('./routes/userAuth');
const userRoutes = require('./routes/userRoutes');
const productRoutes = require('./routes/productRoutes');
const contactRoutes = require('./routes/contactRoutes');
const adminAuthRoutes = require('./routes/adminAuth');
const Blogs = require('./routes/Blog');
const Blog = require('./models/Blog');

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb', extended: true }));
app.use(bodyParser.json());
// Serve uploaded images statically from the data/images directory
app.use('/api/images/uploads', express.static('../data/images'));

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
app.use('/blog', Blogs); // User authentication routes
app.use('/api/images', imageRoute);
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
app.get('/user', async (req, res) => {
  try {
    // Retrieve all users from the database
    const users = await User.find();
    res.json(users);
  } catch (error) {
    console.error('Error fetching users:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Start your server
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
