import React from 'react';

import './Home.css';
import useHomeData from '../../../hooks/useHomeData';
import TweetView from './TweetView.js';

export default function Home() {
	const tweetsFormatted = useHomeData();
	console.log(tweetsFormatted);
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
