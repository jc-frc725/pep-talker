import React, {useState} from 'react';
import QuoteList from '../QuoteList';

import styles from './Search.module.css';

const Search = ({ searchResults, deleteQuote, setCurrentQuote, searchQuote, resetSearch}) => {
  const [query, setQuery] = useState('');

  return (
    <div className={`${styles.list} blue-grey darken-4 sidenav sidenav-fixed`}>
      <h4 className="blue-grey darken-4 cyan-text text-lighten-2 center-align">Pep-talks:</h4>
      <input
        value={query}
        className={`white center-align ${styles.search}`} 
        placeholder={'Search for a quote...'}
        onChange={(event) => setQuery(event.target.value)}
      />
      <button onClick={() => searchQuote(query)} className={`btn waves-effect waves-light`}>Search</button>
      <button onClick={() => resetSearch()} className={'btn waves-effect waves-light'}>Reset</button>
      <QuoteList 
        quotes={searchResults} 
        setCurrentQuote={setCurrentQuote} 
        deleteQuote={deleteQuote}/>
    </div>
  )
}

export default Search;