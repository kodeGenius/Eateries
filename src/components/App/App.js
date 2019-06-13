import React from 'react';
import './App.css';
import BusinessList from '../BusinessList/BusinessList';
import SearchBar from '../SearchBar/SearchBar';
import BusInfo from '../BusInfo/BusInfo';

const business = {
  imageSrc: 'pizza.jpg',
name: 'MarginOtto Pizzeria',
address: '1010 Paddington Way',
city: 'Flavortown',
state: 'NY',
zipCode: '10101',
category: 'Italian',
rating: 4.5,
reviewCount: 90
}

const businesses = [business, business, business, business, business, business];

function App() {
  return (
  <div className="App">
    <p><img src="./ravenous_favicon.ico" className="logo" alt="icon" /></p>
    <h1>Eateries</h1>
    <SearchBar />
    <BusinessList businesses={businesses}/>
    <BusInfo />
  </div>
  )
}

export default App;
