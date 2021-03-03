import React from 'react';
import styles from './CurrentQuote.module.css';

const CurrentQuote = ({ current, readQuote, getQuote }) => {

  const handleReadQuote = () => {
    readQuote(current.text);
  }

  return (
    <div>
      <div className={`container card-panel indigo darken-4 z-depth-4 ${styles.main}`}>
        <h2 className={`light-blue-text text-lighten-4 ${styles.text}`}>{current.text}</h2>
        <h4 className={`right-align blue-text text-lighten-2  ${styles.author}`}> - {current.author}</h4>
      </div>
      <div className={`container ${styles.buttons}`}>
        <a className={`btn-large pink darken-3 ${styles.round}`} onClick={handleReadQuote}>Speak to me.</a>
        <a className={`btn-large pink darken-3 ${styles.round}`} onClick={getQuote}>I need something.</a>
      </div>
    </div>
  )
}

export default CurrentQuote;