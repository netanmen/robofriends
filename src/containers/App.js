import React, {Component} from 'react';
import './App.css';
import Scroll from '../components/Scroll';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
		robots: [],
		searchfield: ''
		}
	}
	
	componentDidMount() {
		fetch('https://jsonplaceholder.typicode.com/users')
		.then(response => response.json())
		.then(data => this.setState({ robots: data }));
	}

	onTextChanged = (e) => {
		this.setState({ searchfield: e.target.value.toLowerCase() });
	}

	render() {
		const  { robots, searchfield } = this.state;
		const filteredRobots = robots.filter(robot => {
			return robot.name.toLowerCase().includes(searchfield)
		});
		return !robots.length ?
		(
			<div className='main-container'>
				<h1 id='robofriends-header'>Loading...</h1>
			</div>
		) :
		(
			<div className='main-container'>
				<h1 id='robofriends-header'>RoboFriends</h1>
				<SearchBox className='searchbox' searchChange={this.onTextChanged}/>
				<Scroll>
					<CardList className='cardlist' robots={filteredRobots}/>
				</Scroll>
			</div>
		)	
	}			
}

// const App = () => {
// 	return (
// 		<div className='main-container'>
// 			<h1 id='robofriends-header'>Robofriends</h1>
// 			<SearchBox className='searchbox'/>
// 			<CardList className='cardlist' robots={robots}/>
// 		</div>
// 	);
// }

export default App;
			// <input className='searchbox' type='text' placeholder='Search...'/>