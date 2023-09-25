const mongoose = require('mongoose');

async function connectToDatabase() {
  try {
    await mongoose.connect('mongodb://127.0.0.1:27017/demo', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      serverSelectionTimeoutMS: 5000, // Increase server selection timeout if needed
      socketTimeoutMS: 45000, // Increase socket timeout if needed
    });
    console.log('Connected to the database');
  } catch (err) {
    console.error('MongoDB connection error:', err);
  }
}

module.exports = { connectToDatabase };
