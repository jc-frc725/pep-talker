import React from 'react';

const Quote = ({ _id, text, author, setCurrentQuote, deleteQuote }) => {

  const handleQuoteClick = () => {
    setCurrentQuote(text, author);
  }

  const handleDelete = () => {
    deleteQuote(_id);
  }

  return (
    <div className="quote-item">
      <li onClick={handleQuoteClick}>
        {`${text} - ${author}`}
        <button onClick={handleDelete}>Remove</button>
      </li>
    </div>
  );
}

export default Quote;