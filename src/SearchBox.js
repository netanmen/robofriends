import React from 'react';
import './SearchBox.css';

const SearchBox = () => {
	return (
		<div className='search-container'>
			<input id='search-input' type='text' placeholder='Search...'/>
			<button id='search-button' placeholder='hit me!'><img id='search-icon' src={require('./search.png')} alt='search icon'/></button>
		</div>
	);
}

export default SearchBox;