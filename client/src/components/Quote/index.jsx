import React from 'react';
import styles from './Quote.module.css';

const Quote = ({ _id, text, author, setCurrentQuote, deleteQuote }) => {

  const handleQuoteClick = () => {
    setCurrentQuote(text, author);
  }

  const handleDelete = () => {
    deleteQuote(_id);
  }

  return (
    <li className={`card-panel ${styles.test}`} onClick={handleQuoteClick}>
      {`${text} - ${author}`}
      <button className={`btn-floating btn-small red accent-4`}onClick={handleDelete}>
        <i className="material-icons">remove</i>
      </button>
    </li>
  );
}

export default Quote;