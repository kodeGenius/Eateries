import React from 'react';
import './SearchBar.css';



class SearchBar extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            term: '',
            location: '',
            sortBy: 'best_match'
            
        }
        this.sortByOptions = {
            'Best Match': 'best_match',
            'Highest Rated': 'rating',
            'Most Viewed': 'review_count'
        }

    }
    getSortByClass(sortByOption){
        if(this.state.sortBy === sortByOption){
            return 'active';
        }else{
            return '';
        }
    }
    handleSortByChange(sortByOption){
        this.setState({
            sortByOption: sortBy
        });
    }
    handleTermChange(event){
        this.setState({term: event.target.value});
    }
    handleLocationChange(event){
        this.setState({locattion: event.target.value});
    }
    
    handleSearch(event){
        this.props.searchYelp(this.state.term, this.state.location, this.state.sortBy)
    }

    renderSortByOptions(){
        return Object.keys(sortByOptions).map(sortByOption => {
            let sortByOptionValue = sortByOptions[sortByOption];
            return <li key={sortByOptionValue} onClick = {this.handleSortByChange.bind(this, sortByOptionValue)} className = {this.getSortByClass(sortByOptionValue)}>{sortByOptions}</li>
        });  
    }
    render(){
        return(
        <div className="SearchBar" >
            <div className="SearchBar-sort-options">
                <ul>
                   {this.renderSortByOptions}
                </ul>
            </div>
            <div className="SearchBar-fields">
                <input onChange={this.handleTermChange} placeholder="Search Businesses" />
                <input onChange={this.handleLocationChange} placeholder="Where?" />
            </div>
            <div className="SearchBar-submit">
                <a  href ="https:// go.com">Let's Go</a>
            </div>
        </div>
        )
    }
};

export default SearchBar;