import React, { useState } from 'react';

function SearchComponent() {
    const [query, setQuery] = useState('');

    const handleInputChange = (e) => {
        setQuery(e.target.value);
    };

    const handleSearch = () => {
        console.log('Search query:', query);
        // Add search logic here
    };

    return (
        <div className="search-container">
            <input 
                type="text" 
                value={query} 
                onChange={handleInputChange} 
                placeholder="Search..." 
                className="search-input"
            />
            <button onClick={handleSearch} className="search-button">Search</button>
        </div>
    );
}

export default SearchComponent;
