import React from 'react';
import './App.css';
import CardList from './CardList';
import SearchBox from './SearchBox';
import {robots} from './robots';

const App = () => {
	return (
		<div className='main-container'>
			<SearchBox className='searchbox'/>
			<CardList className='cardlist' robots={robots}/>
		</div>
	);
}

export default App;
			// <input className='searchbox' type='text' placeholder='Search...'/>