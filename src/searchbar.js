import React, { useState } from 'react';

function SearchBar({ onSearch }) {
    const [input, setInput] = useState('');

    const handleInputChange = (event) => {
        setInput(event.target.value);
        onSearch(event.target.value);
    };

    return (
        <li className="nav-link">
            <label htmlFor="search-input" className="visually-hidden"></label>
            <input
                id="search-input"
                type="text"
                placeholder="Search"
                className="nav-link search"
                value={input}
                onChange={handleInputChange}
            />
        </li>
    );
}

export default SearchBar;
