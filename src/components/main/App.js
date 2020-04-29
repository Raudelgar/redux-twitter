import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './App.css';

import LoadingBar from 'react-redux-loading-bar';
import Nav from '../nav/Nav.js';
import Home from '../pages/home/Home.js';
import NewTweet from '../pages/new-tweet/NewTweet.js';
import Tweet from '../pages/tweet/Tweet.js';
import useInitData from '../../hooks/useInitData';
import useAuthUser from '../../hooks/useAuthUser';

export default function App() {
	useInitData();
	const authUser = useAuthUser();

	return (
		<Router>
			<div className='container App'>
				<LoadingBar className='loader' />
				<Nav />
				{authUser && (
					<Switch>
						<Route exact path='/' component={Home} />
						<Route path='/new' component={NewTweet} />
						<Route path='/tweet/:id' component={Tweet} />
						<Route
							render={() => (
								<div>
									<h2 style={{ textAlign: 'center', color: 'inherit' }}>
										404 - Page Not Found
									</h2>
								</div>
							)}
						/>
					</Switch>
				)}
			</div>
		</Router>
	);
}
