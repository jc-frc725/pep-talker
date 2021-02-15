import React, { useState } from 'react';

const Form = ({ postQuote }) => {
  const [text, setEntry] = useState('');
  const [author, setAuthor] = useState('');

  const handleSubmit = (event) => {
    postQuote(text, author);
    event.preventDefault();
  }

  return (
    <div className="new-quote-form">
      <form onSubmit={handleSubmit}>
        <label>
          Text:
        </label>
        <input type="text" value={text} onChange={(event) => setEntry(event.target.value)}></input>
        <label>
          Author:
        </label>
        <input type="text" value={author} onChange={(event) => setAuthor(event.target.value)}></input>
        <button>Submit</button>
      </form>
    </div>
  )
}

export default Form;