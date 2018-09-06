import React from 'react';

const Scroll = (props) => {
	return (
		<div style={{overflowY: 'scroll', border: '2px dotted black', height: '550px', width: '100%'}}>
			{props.children}
		</div>
	);
}

export default Scroll;