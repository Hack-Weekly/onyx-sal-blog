import React, { useState, useRef, useEffect } from 'react';
import './index.css'

// We want the search to only display the posts with the matching tags. 
// We also want to be able to search by tags. 

const SearchBar = ({ onSearch }) => {
    // Setting searchText with a default state of an empty string. 
    const [searchText, setSearchText] = useState('');
    const searchTextRef = useRef('');

    useEffect(() => {
        searchTextRef.current = searchText;
    }, [searchText]);

    // Ensures that the searchText state variable stays in sync with the input value as the user types. 
    const handleSearchTextChange = (event) => {
        setSearchText(event.target.value);
    };

    // Setting default prop as it may return an error where onSearch is not a function. 
    SearchBar.defaultProps = {
        onSearch: () => {},
    };

    // Since this button will presumably only be clicked once we have a string to search for, this handles our search by looking for everything that includes searchText. 
    const handleSearchButtonclick = () => {
        // Declaring an empty array of search results. 
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

    // This detects the 'Enter' key and routes the function to handleSearchButtonclick.
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