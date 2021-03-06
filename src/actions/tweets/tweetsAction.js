import {
	RECEIVE_TWEETS,
	INCREMENT_LIKE,
	DECREMENT_LIKE,
	ADD_TWEET,
	ADD_TWEET_REPLAY,
} from '../types.js';
import { postNewTweet } from '../../utils/api.js';
import { showLoading, hideLoading } from 'react-redux-loading-bar';

const tweetActions = {
	receiveTweets,
	incrementTweetLikes,
	decrementTweetLikes,
	handleAddNewTweet,
};

function receiveTweets(tweets) {
	return {
		type: RECEIVE_TWEETS,
		payload: tweets,
	};
}

function incrementTweetLikes(data) {
	return {
		type: INCREMENT_LIKE,
		payload: data,
	};
}

function decrementTweetLikes(id) {
	return {
		type: DECREMENT_LIKE,
		payload: id,
	};
}

function addTweet(tweet) {
	return {
		type: ADD_TWEET,
		payload: tweet,
	};
}

function addTweetReplay(tweet, replayId) {
	return {
		type: ADD_TWEET_REPLAY,
		payload: {
			tweet,
			replayId,
		},
	};
}

function handleAddNewTweet(rawTweet) {
	return (dispatch) => {
		dispatch(showLoading());
		postNewTweet(rawTweet)
			.then((tweet) => {
				if (!rawTweet.replyingTo) {
					dispatch(addTweet(tweet));
				} else {
					dispatch(addTweetReplay(tweet, rawTweet.replyingTo));
				}
			})
			.then(() => dispatch(hideLoading()));
	};
}

export default tweetActions;
