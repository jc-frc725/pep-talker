const express = require('express');
const path = require('path');
const app = express();
const quote = require('../database/quote');

const PORT = 8080;
const PUBLIC_DIR = path.resolve('./client', 'public');
const url = '/api/pep-talker';

app.use(express.static(PUBLIC_DIR));
app.use(express.json());

app.use((req, res, next) => {
  console.log(`${req.method} from ${req.path}`)
  next();
})

app.get(url, (request, response) => {
  quote.find()
    .then(data => response.send(data))
    .catch(error => console.error(error));
});

app.post('/api/pep-talker', (request, response) => {
  const { text, author } = request.body;
  const newQuote = new quote({ text, author });
  newQuote.save()
    .then(data => response.sendStatus(201))
    .catch(error => console.error(error));
})

app.delete('/api/pep-talker/:_id', (request, response) => {
  const { _id } = request.params;
  quote.deleteOne({_id})
    .then(data => response.sendStatus(204))
    .catch(error => console.error(error));
})

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`)
});