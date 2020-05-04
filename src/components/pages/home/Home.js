import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import useHomeData from '../../../hooks/useHomeData';
import TweetView from '../../View/TweetView.js';
import { handleInitialData } from '../../../actions/rootAction';

export default function Home() {
	const tweetsFormatted = useHomeData();
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(handleInitialData());
	}, [dispatch]);

	if (!tweetsFormatted.length) {
		return null;
	} else {
		return (
			<div>
				<h3 className='center-text'>Your Timeline</h3>
				<ul>
					{tweetsFormatted.map((tweet) => (
						<TweetView key={tweet.tweetId} tweet={tweet} />
					))}
				</ul>
			</div>
		);
	}
}
