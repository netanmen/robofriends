import React from 'react';
import './SearchBox.css';

const SearchBox = ({searchChange}) => {
	return (
		<div className='search-container'>
			<input id='search-input' type='search' onChange={searchChange} placeholder='Search...'/>
		</div>
	);
}

export default SearchBox;
			
// <button id='search-button' placeholder='hit me!'><img id='search-icon' src={require('./search.png')} alt='search icon'/></button>