import React from 'react';
import './SearchBar.css';


class SearchBar extends React.Component{
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