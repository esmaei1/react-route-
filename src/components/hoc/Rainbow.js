import React from 'react';

const Rainbow = (WrappedComponent) => {

	const colors = ['red', 'blue', 'green', 'pink', 'yellow', 'orange'];
	let color = colors[Math.floor(Math.random() * 6)];
	let className = color + '-text';

	return (props) => {
		return (
			<div className={ className }>
				<WrappedComponent {...props}/>
			</div>
		)
	}
}

export default Rainbow;