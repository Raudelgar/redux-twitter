import React from 'react';
import { NavLink } from 'react-router-dom';

import './Nav.css';

export default function Nav() {
	return (
		<nav className='nav'>
			<ul>
				<div>
					<NavLink exact to='/' className='link' activeClassName='active'>
						Home
					</NavLink>
				</div>
				<div>
					<NavLink to='/new' className='link' activeClassName='active'>
						New Tweet
					</NavLink>
				</div>
			</ul>
		</nav>
	);
}
