import React from 'react';
import Quote from './Quote';

const QuoteList = ({ quotes, setCurrentQuote }) => {
  return (
    <div className="quotes-list">
      <ul>
        {quotes.map(quote => 
          <Quote text={quote.text} author={quote.author} setCurrentQuote={setCurrentQuote}/>
        )}
      </ul>
    </div>
  );
}

export default QuoteList;