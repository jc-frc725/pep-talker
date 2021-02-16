import React, { useEffect, useState } from 'react';
import Form from '../Form';
import QuoteList from '../QuoteList';
import CurrentQuote from '../CurrentQuote';
import axios from 'axios';
import styles from './App.module.css';

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

  const readQuote = () => {
    console.log('Quote will be read.');
    // IBM text-to-speech here
    // url: https://api.us-south.text-to-speech.watson.cloud.ibm.com/instances/22b07993-c125-413a-b7fc-efd644d4c021
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
      <h1 className={`center-align ${styles.title}`}>Pep-talker</h1>
      <br></br>
      <CurrentQuote current={current} readQuote={readQuote} getQuote={getRandomQuote}/>
      <br></br>
      <Form postQuote={postNewQuote}/>
      <QuoteList quotes={quotes} setCurrentQuote={setCurrentQuote} deleteQuote={deleteQuote}/>
    </div>
  );
}

export default App;