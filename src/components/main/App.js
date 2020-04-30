import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './App.css';

import useInitData from '../../hooks/useInitData';
import useAuthUser from '../../hooks/useAuthUser';
import LoadingBar from 'react-redux-loading-bar';
import Loader from '../loader/Loader.js';
import { Orbitals } from 'react-spinners-css';
const Nav = lazy(() => import('../nav/Nav.js'));
const Home = lazy(() => import('../pages/home/Home.js'));
const NewTweet = lazy(() => import('../pages/new-tweet/NewTweet.js'));
const Tweet = lazy(() => import('../pages/tweet/Tweet.js'));

export default function App() {
	useInitData();
	const authUser = useAuthUser();

	return (
		<Router>
			<Suspense fallback={<Loader />}>
				{!authUser && (
					<div style={{ margin: '20% 50%' }}>
						<Orbitals color='#fff' />
					</div>
				)}
				<div className='container App'>
					{authUser && (
						<>
							<LoadingBar className='loader' />
							<Nav />
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
						</>
					)}
				</div>
			</Suspense>
		</Router>
	);
}
