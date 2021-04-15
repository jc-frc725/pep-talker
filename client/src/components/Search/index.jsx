import React, {useState} from 'react';
import QuoteList from '../QuoteList';

import styles from './Search.module.css';

const Search = ({ quotes, setCurrentQuote, deleteQuote }) => {
  const [filter, setFilter] = useState('');

  // search for quotes that match input from search bar
  

  return (
    <div className={`${styles.list} blue-grey darken-4 sidenav sidenav-fixed`}>
      <h4 className="blue-grey darken-4 cyan-text text-lighten-2 center-align">Pep-talks:</h4>
      <input
        value={filter}
        className={`white center-align ${styles.search}`} 
        placeholder={'Search for a quote...'}
        onChange={(event) => setFilter(event.target.value)}
      />
      <button className={`btn waves-effect waves-light`}>Search</button>
      <QuoteList quotes={quotes} setCurrentQuote={setCurrentQuote} deleteQuote={deleteQuote}/>
    </div>
  )
}

export default Search;