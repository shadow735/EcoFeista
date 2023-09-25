const express = require('express');
const router = express.Router();
const Contact = require('../models/Contact');

// Create a new contact
router.post('/create', async (req, res) => {
  try {
    const { fullname, email, phone, message } = req.body;

    const newContact = new Contact({
      fullname,
      email,
      phone,
      message,
    });

    await newContact.save();

    res.json({ message: 'Message sent successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});



module.exports = router;
