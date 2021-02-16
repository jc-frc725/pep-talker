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
    <li className={`collection-item ${styles.item}`} onClick={handleQuoteClick}>
      <section className={`list-item-body`}>
        <div className={`text ${styles.text}`}>{`${text}`}</div>
        <div className={`author ${styles.author}`}>{`- ${author}`}</div>
          <button className={`secondary-content btn-floating btn-small red lighten-1 ${styles.delete}`} onClick={handleDelete}>
            <i className="material-icons">remove</i>
          </button>
      </section>
    </li>
  );
}

export default Quote;