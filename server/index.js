require('dotenv').config();
const express = require('express');
const path = require('path');
const app = express();
const quote = require('../database/quote');
const { IamTokenManager } = require('ibm-watson/auth');

const PORT = 8080;
const PUBLIC_DIR = path.resolve('./client', 'public');
const url = '/api/pep-talker';

// work with IBM Bluemix reverse proxy
app.enable('trust proxy');
// rate limiter?

app.use(express.static(PUBLIC_DIR));
app.use(express.json());

// check for missing keys/url
if (!process.env.TEXT_TO_SPEECH_IAM_APIKEY) {
  console.error('Missing credentials for IBM Cloud Text-to-Speech. Check environmental variables.');
  process.exit(1);
} else {
  console.log('API key found.');
}

// make new token manager instance for text-to-speech api key
const ttsAuthenticator = new IamTokenManager({
  apikey: process.env.TEXT_TO_SPEECH_IAM_APIKEY
});

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
});

app.delete('/api/pep-talker/:_id', (request, response) => {
  const { _id } = request.params;
  quote.deleteOne({_id})
    .then(data => response.sendStatus(204))
    .catch(error => console.error(error));
});

app.get('/api/text-to-speech/token', (request, response) => {
  return ttsAuthenticator
    // request a token
    .requestToken()
    .then(({ result }) => {
      // if token valiated, will be return in { result }
      console.log('Token validated?');
      response.json({ accessToken: result.access_token, url: process.env.TEXT_TO_SPEECH_URL})
    })
    .catch(console.error);
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`)
});