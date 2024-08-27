// config/db.js
const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      serverSelectionTimeoutMS: 5000, // Keep this setting for retry logic
      socketTimeoutMS: 45000,
      useNewUrlParser: true, // Ensure this is removed if using the latest driver
      useUnifiedTopology: true, // Ensure this is removed if using the latest driver
    });
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};

module.exports = connectDB;
