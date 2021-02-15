import React from 'react';
import Quote from './Quote';

const QuoteList = ({ quotes, setCurrentQuote, deleteQuote }) => {
  return (
    <div className="quotes-list">
      <ul>
        {quotes.map((quote, idx) => 
          <Quote
            key={idx}
            _id={quote._id}
            text={quote.text}
            author={quote.author}
            setCurrentQuote={setCurrentQuote}
            deleteQuote={deleteQuote}
          />
        )}
      </ul>
    </div>
  );
}

export default QuoteList;