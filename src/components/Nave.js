import React from 'react';
import { NavLink, Link, withRouter } from 'react-router-dom';

const Nave = (props) => {

	return(
		<nav className="nav-wrapper blue darken-3">
			<div className="container">
				<a className="brand-logo">React Route</a>
				<ul className="right">
					<li><Link to="/">Home</Link></li>
					<li><NavLink to="/about">About</NavLink></li>
					<li><NavLink to="/contact">contact</NavLink></li>
				</ul>
			</div>
		</nav>
	)
}

export default withRouter(Nave);