import React, { useState } from 'react';
import './index.css'

const SearchBar = () => {
    const [searchText, setSearchText] = useState('');

    const handleSearchTextChange = (event) => {
        setSearchText(event.target.value);
    };


    const handleSearchButtonclick = () => {
        console.log('Perform search with text: ', searchText);

};


    return (
        <div className="search-bar">
            <input 
            type="text" 
            placeholder="Search.." 
            value={searchText} 
            onChange={handleSearchTextChange} 
            />
            <button onClick={handleSearchButtonclick}>Search</button>
        </div>
    );
};

export default SearchBar;