import { RECEIVE_TWEETS, UPDATE_LIKE } from '../types.js';

export function receiveTweets(tweets) {
	return {
		type: RECEIVE_TWEETS,
		payload: tweets,
	};
}

export function updateTweetLikes(data) {
	return {
		type: UPDATE_LIKE,
		payload: data,
	};
}
