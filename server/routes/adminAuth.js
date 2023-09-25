const express = require('express');
const bcrypt = require('bcrypt');
const Admin = require('../models/Admin'); // Import your Admin model here

const router = express.Router();

// Admin Signup
router.post('/signup', async (req, res) => {
  try {
    const { username, password } = req.body;

    // Generate a salt and hash the password
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    // Create a new admin instance with the hashed password
    const admin = new Admin({ username, password: hashedPassword });

    // Save the admin to the database
    await admin.save();

    res.status(201).json({ message: 'Signup successful' });
  } catch (error) {
    console.error('Error during admin signup:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// Admin Login
router.post('/login', async (req, res) => {
  try {
    const { username, password } = req.body;

    // Find the admin by username
    const admin = await Admin.findOne({ username });

    if (!admin) {
      return res.status(401).json({ message: 'Admin not found' });
    }

    // Compare the provided password with the hashed password in the database
    const passwordMatch = await bcrypt.compare(password, admin.password);

    if (!passwordMatch) {
      return res.status(401).json({ message: 'Incorrect password' });
    }

    res.status(200).json({ message: 'Admin login successful' });
  } catch (error) {
    console.error('Error during admin login:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

module.exports = router;
