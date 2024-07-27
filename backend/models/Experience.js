const mongoose = require('mongoose');

const experienceSchema = new mongoose.Schema({
  title: String,
  company: String,
  startDate: Date,
  endDate: Date,
  description: String
});

module.exports = mongoose.model('Experience', experienceSchema);