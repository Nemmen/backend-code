const mongoose = require('mongoose');
require('dotenv').config()

const dbConnection = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Database connected successfully');
  } catch (error) {
    console.log('Database connection failed');
  }
}

module.exports = dbConnection;