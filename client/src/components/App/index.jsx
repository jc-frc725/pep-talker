import React, { useEffect, useState } from 'react';
import Form from '../Form';
import Search from '../Search';
import CurrentQuote from '../CurrentQuote';
import axios from 'axios';
import styles from './App.module.css';

import { TextToSpeech } from 'watson-speech';
import { get } from 'mongoose';

const App = (props) => {
  const [quotes, setQuotes] = useState([]);
  const [current, setCurrent] = useState({text: 'The hours of folly are measured by the clock; but of wisdom, no clock can measure.', author:'William Blake'});
  const [searchResults, setResults] = useState([]);

  // TODO: use disclaimer on bottom of page/footer

  useEffect(() => {
    getQuotes();
  }, []);

  const getQuotes = () => {
    axios.get('/api/pep-talker')
      .then(({ data }) => setQuotes(data));
    axios.get('/api/pep-talker')
      .then(({ data }) => setResults(data));
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

  // search for quotes that match input from search bar
  const searchQuote = (query) => {
    if (!query) {
      setResults(quotes);
    }
    const toSearch = quotes;
    const searchTerm = query.toLowerCase();
    const searchedStuff = toSearch.filter((quote) => {
      return quote.text.toLowerCase().includes(searchTerm);
    })
    setResults(searchedStuff);
  }

  const resetSearch = () => {
    setResults(quotes);
  }

  return (
    <div className='pep-talk-main'>
      <h1 className={`center-align light-blue-text text-lighten-3 ${styles.title}`}>Pep-talker</h1>
      <br></br>
      <CurrentQuote current={current} readQuote={readQuote} getQuote={getRandomQuote}/>
      <br></br>
      <Form postQuote={postNewQuote}/>
      <Search searchResults={searchResults}
        deleteQuote={deleteQuote}
        setCurrentQuote={setCurrentQuote}
        searchQuote={searchQuote} 
        resetSearch={resetSearch}/>
    </div>
  );
}

export default App;