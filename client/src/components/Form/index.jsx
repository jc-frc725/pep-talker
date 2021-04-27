import React, { useState } from 'react';
import styles from './Form.module.css';

const Form = ({ postQuote }) => {
  const [text, setEntry] = useState('');
  const [author, setAuthor] = useState('');

  const handleSubmit = (event) => {
    if (text === '') {
      alert('no text!');
    }
    // postQuote(text, author);
    event.preventDefault();
  }
  // TODO: modal confirmation for valid submission
  // TODO: No empty fields
  // TODO: limit chars

  return (
    <div className={`container input-field indigo darken-4 z-depth-4 ${styles.main}`}>
      <h5 className='center-align light-blue-text text-lighten-4'>Make a new pep-talk:</h5>
      <form onSubmit={handleSubmit}>
        <label className={`purple-text text-lighten-3`}>Text:</label>
        <input 
          className='input-field purple-text text-lighten-5'
          type="text"
          value={text}
          onChange={(event) => setEntry(event.target.value)}>
        </input>
        <label className={`purple-text text-lighten-3`}>Author:</label>
        <input
          className='input-field purple-text text-lighten-5'
          type="text"
          value={author}
          onChange={(event) => setAuthor(event.target.value)}>
        </input>
        <button className={`waves-effect waves-light btn purple accent-4`} type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default Form;