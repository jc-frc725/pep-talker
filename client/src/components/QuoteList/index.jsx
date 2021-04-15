import React, {useEffect} from 'react';
import Quote from '../Quote';
import M from 'materialize-css';
import styles from './QuoteList.module.css';

const QuoteList = ({ quotes, setCurrentQuote, deleteQuote }) => {

  useEffect(() => {
    var instances = M.Sidenav.init(document.querySelector('.sidenav'));
  });

  return (
      <ul className={`collection ${styles.items}`}>
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
  );
}

export default QuoteList;