const mongoose = require('mongoose');
const db = require('../index');
const quote = require('../quote');
const sampleQuotes = require('./sampleQuotes');

const seedData = [];
for (let i = 0; i < sampleQuotes.length; i++) {
  const { text, author } = sampleQuotes[i];
  const newQuote = { text, author };
  seedData.push(newQuote);
}

function seedQuotes() {
  quote.create(seedData)
    .then(response => mongoose.connection.close())
    .catch(console.log('Problem with seeding database.'));
}

seedQuotes();