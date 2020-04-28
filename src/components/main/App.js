import React from 'react';

import './App.css';

import LoadingBar from 'react-redux-loading-bar';
import Home from '../pages/home/Home.js';
import NewTweet from '../pages/new-tweet/NewTweet.js';
import useInitData from '../../hooks/useInitData';
import useAuthUser from '../../hooks/useAuthUser';

export default function App() {
	useInitData();
	const authUser = useAuthUser();

	return (
		<div className='container App'>
			<LoadingBar className='loader' />
			{authUser && (
				<>
					<div>{JSON.stringify(authUser, null, 2)}</div>
					<NewTweet />
				</>
			)}
		</div>
	);
}
