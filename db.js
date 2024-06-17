const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

const mongoURL = process.env.DATABASE_URL;  // MongoDB connection URL


mongoose.connect(mongoURL)
  .then(() => {
    console.log('Connected to MongoDB server');
  })
  .catch((err) => {
    console.error('Error connecting to MongoDB', err);
  });

const db = mongoose.connection;

db.on('disconnected', () => {
  console.log('Disconnected from server');
});


// Export the database connection
module.exports = db;
