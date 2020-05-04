import React, { lazy, Suspense, useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './App.css';
import useAuthUser from '../../hooks/useAuthUser';
import LoadingBar from 'react-redux-loading-bar';
import Loader from '../loader/Loader.js';
import PrivateRoute from '../auth/PrivateRoute.js';
import { Orbitals } from 'react-spinners-css';
import { useDispatch } from 'react-redux';

const Nav = lazy(() => import('../nav/Nav.js'));
const Home = lazy(() => import('../pages/home/Home.js'));
const NewTweet = lazy(() => import('../pages/new-tweet/NewTweet.js'));
const Tweet = lazy(() => import('../pages/tweet/Tweet.js'));
const GHLogin = lazy(() => import('../auth/GHLogin.js'));

const checkUserAuth = (authUser) => (!authUser ? true : false);

export default function App() {
	const authedUser = useAuthUser();
	const [initLoading, setLoading] = useState(checkUserAuth(authedUser));
	const dispatch = useDispatch();

	useEffect(() => {
		const timer = window.setTimeout(() => {
			setLoading(false);
		}, 1000);
		return () => window.clearTimeout(timer);
	}, [initLoading, dispatch]);

	return (
		<Router>
			<Suspense fallback={<Loader />}>
				{initLoading && (
					<div style={{ margin: '20% 50%' }}>
						<Orbitals color='#fff' />
					</div>
				)}
				<div className='container App'>
					{!initLoading && (
						<>
							<LoadingBar className='loader' />
							{authedUser && <Nav />}
							<Switch>
								<Route path='/login' component={GHLogin} />
								<Route
									exact
									path='/'
									render={(props) => (
										<PrivateRoute {...props}>
											<Home />
										</PrivateRoute>
									)}
								/>
								<Route
									path='/new'
									render={(props) => (
										<PrivateRoute {...props}>
											<NewTweet {...props} />
										</PrivateRoute>
									)}
								/>
								<Route
									path='/tweet/:id'
									render={(props) => (
										<PrivateRoute {...props}>
											<Tweet {...props} />
										</PrivateRoute>
									)}
								/>
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

/* 
						<Route exact path='/' component={Home} />
								<Route path='/new' component={NewTweet} />
								<Route path='/tweet/:id' component={Tweet} />
*/
