const express = require('express');
const multer = require('multer');
const router = express.Router();
const Image = require('../models/Image');
const path = require('path'); // Import the path module

// Multer storage configuration
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, '../data/img');
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname);
  },
});

const upload = multer({ storage });

// Image upload route
router.post('/upload', upload.single('image'), async (req, res) => {
  try {
    const { title, description } = req.body;
    const imagePath = req.file.path;

    const newImage = new Image({ title, description, imagePath });
    await newImage.save();

    res.json({ message: 'Image uploaded successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
});

// New route to fetch images
router.get('/fetch-images', async (req, res) => {
  try {
    // Fetch all images from the database
    const images = await Image.find();
    res.json(images);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;
