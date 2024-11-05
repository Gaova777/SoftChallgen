import React from 'react';
import './SearchBar.css';

const SearchBar = () => (
  <div className="search-bar">
    <input type="text" placeholder="Buscar..." className="search-input" />
    <button className="new-client-button">+ Nuevo cliente</button>
  </div>
);

export default SearchBar;