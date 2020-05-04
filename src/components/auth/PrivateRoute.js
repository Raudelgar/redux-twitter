import React from 'react';
import { Route, Redirect } from 'react-router-dom';

export default function PrivateRoute({ children, ...rest }) {
	const storeUserAuthId = window.localStorage.getItem('gh-authId');

	return (
		<Route
			{...rest}
			render={({ location }) =>
				storeUserAuthId ? (
					children
				) : (
					<Redirect
						to={{
							pathname: '/login',
							state: { from: location },
						}}
					/>
				)
			}
		/>
	);
}
