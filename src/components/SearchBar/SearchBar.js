import React from 'react';
import './SearchBar.css';

const sortByOptions = {
    'Best Match': 'best_match',
    'Highest Rated': 'rating',
    'Most Viewed': 'review_count'
}

class SearchBar extends React.Component{
    
    renderSortByOptions(){
        return Object.keys(sortByOptions).map(sortByOptions => {
            let sortByOptionValue = sortByOptions[sortByOption];
            return <li key="sortByOptionValue"></li>
        });
        
    }
    render(){
        <div class="SearchBar">
            <div class="SearchBar-sort-options">
                <ul>
                 <!-- Use .renderSortByOptions() to sort the businesses by their options -->
                </ul>
            </div>
            <div class="SearchBar-fields">
                <input placeholder="Search Businesses" />
                <input placeholder="Where?" />
            </div>
            <div class="SearchBar-submit">
                <a>Let's Go</a>
            </div>
        </div>
    }
}