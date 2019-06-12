import React from 'react';
import './App.css';
import BusinessList from '../BusinessList/BusinessList';
import SearchBar from '../SearchBar/SearchBar';
import BusInfo from '../BusInfo/BusInfo';

function App() {
  return (
  <div className="App">
    <p><img src="./ravenous_favicon.ico" alt="icon" /></p>
    <h1>Eateries</h1>
    <SearchBar />
    <BusinessList />
    <BusInfo />
  </div>
  )
}

export default App;
