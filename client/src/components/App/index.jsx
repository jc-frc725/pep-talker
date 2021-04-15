import React, { useEffect, useState } from 'react';
import Form from '../Form';
import Search from '../Search';
import CurrentQuote from '../CurrentQuote';
import axios from 'axios';
import styles from './App.module.css';

import { TextToSpeech } from 'watson-speech';

const App = (props) => {
  const [quotes, setQuotes] = useState([]);
  const [current, setCurrent] = useState({text: 'The hours of folly are measured by the clock; but of wisdom, no clock can measure.', author:'William Blake'});

  // TODO: use disclaimer on bottom of page/footer

  useEffect(() => {
    getQuotes();
  }, []);

  const getQuotes = () => {
    axios.get('/api/pep-talker')
      .then(({ data }) => setQuotes(data));
  }

  // Request a token, then use returned audio
  const readQuote = (toRead) => {
    axios.get('/api/text-to-speech/token')
      // response: { data: accessToken: ... }
      .then(({ data }) => {
        return data;
      })
      .then(accessToken => {
        const audio = TextToSpeech.synthesize(Object.assign(accessToken, {
          text: toRead,
        }));
        audio.onerror = (error) => {
          console.log('audio error: ', error);
        }
      });
  }

  const getRandomQuote = () => {
    setCurrent(quotes[Math.floor(Math.random() * quotes.length)]);
  }

  const postNewQuote = (text, author) => {
    axios.post('/api/pep-talker', { text, author })
      .then(response => getQuotes());
  }

  const deleteQuote = (_id) => {
    axios.delete(`/api/pep-talker/${_id}`)
      .then(response => getQuotes());
  }

  const setCurrentQuote = (text, author) => {
    setCurrent({text, author});
  }

  return (
    <div className='pep-talk-main'>
      <h1 className={`center-align light-blue-text text-lighten-3 ${styles.title}`}>Pep-talker</h1>
      <br></br>
      <CurrentQuote current={current} readQuote={readQuote} getQuote={getRandomQuote}/>
      <br></br>
      <Form postQuote={postNewQuote}/>
      <Search quotes={quotes} setCurrentQuote={setCurrentQuote} deleteQuote={deleteQuote}/>
    </div>
  );
}

export default App;