import React from 'react';

import TweetView from '../home/TweetView.js';
import NewTweet from '../new-tweet/NewTweet.js';
import useComposeTweet from '../../../hooks/useComposeTweet';

export default function Tweet({ match }) {
	const { id } = match.params;
	const tweet = useComposeTweet(id);

	return (
		<div>
			<TweetView tweet={tweet} />
			<NewTweet />
		</div>
	);
}
