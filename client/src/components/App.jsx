import React, { useEffect, useState } from 'react';
import Form from './Form';
import QuoteList from './QuoteList';
import CurrentQuote from './CurrentQuote';

import sampleQuotes from '../../../database/sampleQuotes';

const App = (props) => {
  const [quotes, setQuotes] = useState([]);
  const [current, setCurrent] = useState({text: 'The hours of folly are measured by the clock; but of wisdom, no clock can measure.', author:'William Blake'});

  useEffect(() => {
    setQuotes(sampleQuotes);
  });

  const readQuote = () => {
    console.log('Quote will be read.');
    // IBM text-to-speech here
  }

  const getRandomQuote = () => {
    console.log('Getting random quote');
    setCurrent(quotes[Math.floor(Math.random() * quotes.length)]);
  }

  const setCurrentQuote = (text, author) => {
    setCurrent({text, author});
  }

  return (
    <div>
      <h1>Pep-talker</h1>
      <br></br>
      <CurrentQuote current={current} readQuote={readQuote} getQuote={getRandomQuote}/>
      <br></br>
      <h2>Type in new quotes here. Needs a form bar + submit button.</h2>
      <Form />
      <h3>List of quotes over here.</h3>
      <QuoteList quotes={quotes} setCurrentQuote={setCurrentQuote}/>
    </div>
  );
}

export default App;