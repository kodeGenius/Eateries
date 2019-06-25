import React from 'react';
import './App.css';
import BusinessList from '../BusinessList/BusinessList';
import SearchBar from '../SearchBar/SearchBar';
import Yelp from '../components/util/Yelp';
import BusInfo from './BusInfo/BusInfo';

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

class App extends React.Component{

  searchYelp(term, location, sortBy){
    Yelp.searchYelp(term, location, sortBy).then(businesses => {
      this.setState({businesses: businesses});
    });
  }
  render(){
    return (
      <div className="App">
        <p><img src="./ravenous_favicon.ico" className="logo" alt="icon" /></p>
        <h1>Eateries for Food</h1>
        <SearchBar searchYelp={this.searchYelp} />
        <BusinessList businesses={businesses}/>
        <BusInfo />
      </div>
    )
  }
}

export default App;
