import React, { useState } from 'react';

const Form = (props) => {
  const [entry, setEntry] = useState('');

  return (
    <div className="new-quote-form">
      <form>
        <input type="text" value={entry} onChange={(event) => setEntry(event.target.value)}></input>
      </form>
      <button>Submit</button>
    </div>
  )
}

export default Form;