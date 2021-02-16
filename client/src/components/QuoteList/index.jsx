import React, {useEffect} from 'react';
import Quote from '../Quote';
import M from 'materialize-css';
import styles from './QuoteList.module.css';

const QuoteList = ({ quotes, setCurrentQuote, deleteQuote }) => {

  useEffect(() => {
    var instances = M.Collapsible.init(document.querySelector('.collapsible'));
  });

  return (
    <div className="quotes-list">
      <h3>List of quotes over here.</h3>
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