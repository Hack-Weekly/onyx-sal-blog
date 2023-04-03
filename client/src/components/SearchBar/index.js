import React, { useState, useRef, useEffect } from 'react';
import './index.css'

// We want the search to only display the posts with the matching tags. 
// We also want to be able to search by tags. 

const SearchBar = ({ onSearch }) => {
    const [searchText, setSearchText] = useState('');
    const searchTextRef = useRef('');

    useEffect(() => {
        searchTextRef.current = searchText;
    }, [searchText]);

    const handleSearchTextChange = (event) => {
        setSearchText(event.target.value);
    };

    SearchBar.defaultProps = {
        onSearch: () => {},
    };


    const handleSearchButtonclick = () => {
        const searchResults = [];
        const elements = document.querySelectorAll('[data-id]');
        elements.forEach((element) => {
            if (
                element.textContent && 
                element.textContent.toLowerCase().includes(searchText.toLowerCase())
            ) {
                searchResults.push(element);
            }
        });
        onSearch(searchResults);
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            handleSearchButtonclick();
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
            <button onClick={handleSearchButtonclick}>Search</button>
        </div>
    );
};

export default SearchBar;