import React from 'react';
import './App.css';
import SearchBar from './Components/SearchBar';
import ArticleData from './db.json';

function App() {
  return (
    <div className="App">
      <SearchBar placeholder="Enter the article name..." data={ArticleData} />
    </div>
  );
}

export default App;
