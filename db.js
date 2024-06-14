const mongoose = require('mongoose');

const mongoURL = 'mongodb://127.0.0.1:27017/danceinfo';  // MongoDB connection URL

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
