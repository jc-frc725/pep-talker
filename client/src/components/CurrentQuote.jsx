import React, { useState } from 'react';

const CurrentQuote = ({ current, readQuote, getQuote }) => {

  return (
    <div className="current-quote">
      <h2 className="main">{current.text}</h2>
      <h3 className="main-author"> - {current.author}</h3>
      <div>There should be a quote above here.</div>

      <label>I need something.</label>
      <button onClick={readQuote}>Read</button>
      <button onClick={getQuote}>Get random quote</button>
    </div>
  )
}

export default CurrentQuote;