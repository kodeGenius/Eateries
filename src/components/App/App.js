import React from 'react';
import logo from './logo'
import './App.css';
import BusinessList from '../BusinessList/BusinessList';
import SearchBar from '../SearchBar/SearchBar';

function App() {
  return (
  <div className="App">
    <h1>Eateries</h1>
    <SearchBar />
    <BusinessList />
  </div>
  )
}

export default App;