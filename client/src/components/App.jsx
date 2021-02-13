import React, { useState } from 'react';
import Form from './Form';
import QuoteList from './QuoteList';
import CurrentQuote from './CurrentQuote';

const App = (props) => {
  const [quotes, setQuotes] = useState(['peepee', 'poopoo']);
  const [current, setCurrent] = useState('');


  return (
    <div>
      <h1>Pep-talker</h1>
      <br></br>
      <CurrentQuote />
      <br></br>
      <h2>Type in new quotes here. Needs a form bar + submit button.</h2>
      <Form />
      <h3>List of quotes over here.</h3>
      <QuoteList />
    </div>
  )
}

export default App;