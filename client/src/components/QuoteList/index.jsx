import React, {useEffect} from 'react';
import Quote from '../Quote';
import M from 'materialize-css';
import styles from './QuoteList.module.css';

const QuoteList = ({ quotes, setCurrentQuote, deleteQuote }) => {

  useEffect(() => {
    var instances = M.Sidenav.init(document.querySelector('.sidenav'));
  });

  return (
    <div className={`sidenav sidenav-fixed ${styles.list}`}>
      <h4 className="center-align">Pep-talks:</h4>
      <ul className="collection">
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