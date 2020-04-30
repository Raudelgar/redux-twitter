import React, { useEffect, useState } from 'react';

import TweetView from '../../View/TweetView.js';
import NewTweet from '../new-tweet/NewTweet.js';
import useComposeTweet from '../../../hooks/useComposeTweet';
import useTweetReply from '../../../hooks/useTweetReply.js';
import useTweetState from '../../../hooks/useTweetState.js';
import useUserState from '../../../hooks/useUserState.js';
import { formmatComposeTweet } from '../../../utils/helper.js';

export default function Tweet(props) {
	const { id } = props.match.params;
	const tweet = useComposeTweet(id);
	const tweets = useTweetState();
	const users = useUserState();
	const { isRepliesClicked } = useTweetReply();
	const [replyTweets, setReplyTweets] = useState([]);

	useEffect(() => {
		if (tweet.replies.length !== 0) {
			setReplyTweets((curr) =>
				tweet.replies.map((id) => formmatComposeTweet(id, tweets, users))
			);
		}
	}, [tweet.replies]);
	console.log(replyTweets);
	return (
		<div>
			<TweetView tweet={tweet} />
			<NewTweet id={id} />
			{!replyTweets.length ? null : (
				<>
					<h3 style={{ textAlign: 'center' }}>Replies</h3>
					{replyTweets.map((tweet) => (
						<TweetView key={tweet.tweetId} tweet={tweet} />
					))}
				</>
			)}
		</div>
	);
}
