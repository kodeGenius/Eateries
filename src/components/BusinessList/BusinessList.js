import React from 'react';
import './Business.css';
import Business from '../Business/Business';

class BusinessList extends React.Component{
    render(){
        return(
            <div class="BusinessList">
                <Business />
                <Business />
                <Business />
                <Business />
                <Business />
                <Business />
            </div>
        )
    }
}