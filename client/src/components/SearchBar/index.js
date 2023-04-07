import React, { useState } from 'react';
import './index.css'

// We want the search to only display the posts with the matching tags. 
// We also want to be able to search by tags. 

const SearchBar = ({ onSearch }) => {
    const [searchText, setSearchText] = useState('');

    const handleSearchTextChange = (event) => {
        setSearchText(event.target.value);
    };

    const handleSearchButtonClick = () => {
        onSearch(searchText.toLowerCase());
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            handleSearchButtonClick();
        }
    };

    return (
        <div className="search-bar">
            <input 
                type="text" 
                placeholder="Search.." 
                value={searchText} 
                onChange={handleSearchTextChange} 
                onKeyDown={handleKeyPress}
            />
            <button onClick={handleSearchButtonClick}>Search</button>
        </div>
    );
};

export default SearchBar;