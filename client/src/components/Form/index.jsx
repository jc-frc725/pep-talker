import React, { useState } from 'react';
import styles from './Form.module.css';

const Form = ({ postQuote }) => {
  const [text, setEntry] = useState('');
  const [author, setAuthor] = useState('');

  const handleSubmit = (event) => {
    postQuote(text, author);
    event.preventDefault();
  }
  // TODO: modal confirmation for valid submission
  // TODO: No empty fields
  // TODO: limit chars

  return (
    <div className={`container input-field ${styles.main}`}>
      <h5 className='center-align'>Make a new pep-talk:</h5>
      <form onSubmit={handleSubmit}>
        <label>Text:</label>
        <input 
          className='input-field'
          type="text"
          value={text}
          onChange={(event) => setEntry(event.target.value)}>
        </input>
        {/* <textarea class='materialize-textarea'></textarea> */}
        <label>Author:</label>
        <input
          type="text"
          value={author}
          onChange={(event) => setAuthor(event.target.value)}>
        </input>
        <button className={`btn purple accent-4`} type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default Form;