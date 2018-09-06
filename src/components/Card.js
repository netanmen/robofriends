import React from 'react';
import './Card.css';


const Card = ({id, name, email}) => {
	return (
		<div className='container'>
			<div className='image-container'>
				<img src={`https://robohash.org/${id.toString()}?size=200x200`} alt='a robot'/>
			</div>
			<h2>{name}</h2>
			<h4>{email}</h4>
		</div>
		);	
}

export default Card;