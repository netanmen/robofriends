import React from 'react';
import './CardList.css';
import Card from './Card';

const CardList = ({robots}) => {
	return (
		<div className='robots-container'>
			{robots.map((robot) => 
				<Card key={robot.id} id={robot.id} name={robot.name} email={robot.email}></Card>
			)}
		</div>
	);
}

export default CardList;