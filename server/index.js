const express = require('express');
const path = require('path');
const app = express();
const PORT = 8080;
const PUBLIC_DIR = path.resolve('./client', 'public');

app.use(express.static(PUBLIC_DIR));

app.get('/', (request, response) => {
  response.send('GET reached.');
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`)
});