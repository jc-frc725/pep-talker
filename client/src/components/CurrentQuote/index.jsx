import React from 'react';
import styles from './CurrentQuote.module.css';

const CurrentQuote = ({ current, readQuote, getQuote }) => {

  return (
    <div>
      <div className={`container card-panel ${styles.main}`}>
        <h2 className={styles.text}>{current.text}</h2>
        <h4 className={`right-align ${styles.author}`}> - {current.author}</h4>
      </div>
      <div className={`container ${styles.buttons}`}>
        <a className={`btn-large ${styles.round}`} onClick={readQuote}>Read aloud</a>
        <a className={`btn-large ${styles.round}`} onClick={getQuote}>I need something.</a>
      </div>
    </div>
  )
}

export default CurrentQuote;