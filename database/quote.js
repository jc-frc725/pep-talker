const mongoose = require('mongoose');
const db = require('./index');
mongoose.Promise = global.Promise;

const quoteSchema = new mongoose.Schema({
  text: String,
  author: {type: String, default: null}
});

quoteSchema.set('autoIndex', false);

const quote = mongoose.model('quote', quoteSchema);

module.exports = quote;