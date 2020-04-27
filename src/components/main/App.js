import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import './App.css';
import handleInitialData from '../../actions/rootAction';
import LoadingBar from 'react-redux-loading-bar';

export default function App() {
	const state = useSelector(initialStateSelector);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(handleInitialData());
	}, []);

	return (
		<div className='App'>
			<LoadingBar />
			<div>hello world</div>
		</div>
	);
}

function initialStateSelector({ users, tweets }) {
	return {
		users,
		tweets,
	};
}
