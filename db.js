const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/edu_mongo')
  .then(() => console.log('MongoDB connected to edu_mongo'))
  .catch(err => console.error('MongoDB connection error:', err));

module.exports = mongoose;
