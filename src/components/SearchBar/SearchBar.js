import React from 'react';
import './SearchBar.css';

const sortByOptions = {
    'Best Match': 'best_match',
    'Highest Rated': 'rating',
    'Most Viewed': 'review_count'
}

class SearchBar extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            term,
            location,
            sortBy
        }
    }
    
    renderSortByOptions(){
        return Object.keys(sortByOptions).map(sortByOptions => {
            let sortByOptionValue = sortByOptions[sortByOptions];
            return <li key={sortByOptionValue}>{sortByOptions}</li>
        });
        
    }
    render(){
        return(
        <div className="SearchBar">
            <div className="SearchBar-sort-options">
                <ul>
                   {this.renderSortByOptions()}
                </ul>
            </div>
            <div className="SearchBar-fields">
                <input placeholder="Search Businesses" />
                <input placeholder="Where?" />
            </div>
            <div className="SearchBar-submit">
                <a href ="https:// go.com">Let's Go</a>
            </div>
        </div>
        )
    }
};

export default SearchBar;