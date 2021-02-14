const express = require('express');
const path = require('path');
const app = express();
const db = require('../database');

const PORT = 8080;
const PUBLIC_DIR = path.resolve('./client', 'public');

app.use(express.static(PUBLIC_DIR));

app.get('/', (request, response) => {
  // retrieve all quotes from db
  response.send('GET reached.');
});

// post new quote to db
// app.post('/')

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`)
});