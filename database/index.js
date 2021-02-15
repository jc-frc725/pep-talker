const mongoose = require('mongoose');
const db = mongoose.connect('mongodb://localhost/peptalker', {useNewUrlParser: true, useUnifiedTopology: true})
  .then(() => console.log('Connected to MongoDB.'))
  .catch(() => console.log('Problem connecting to MongoDB'));

module.exports = db;


