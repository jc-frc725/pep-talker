import React, { useState } from 'react';

const App = (props) => {
  const [quotes, setQuotes] = useState(['peepee', 'poopoo']);
  return (
    <div>
      <h1>Pep-talker</h1>
      <br></br>
      <h2>Main quote display here. Needs a read quote button, and get quote button.</h2>
      <br></br>
      <h2>Type in new quotes here. Needs a form bar + submit button.</h2>
      <h3>List of quotes over here.</h3>
    </div>
  )
}

export default App;