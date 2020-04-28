import { RECEIVE_TWEETS, INCREMENT_LIKE, DECREMENT_LIKE } from '../types.js';

export function receiveTweets(tweets) {
	return {
		type: RECEIVE_TWEETS,
		payload: tweets,
	};
}

export function incrementTweetLikes(data) {
	return {
		type: INCREMENT_LIKE,
		payload: data,
	};
}
export function decrementTweetLikes(id) {
	return {
		type: DECREMENT_LIKE,
		payload: id,
	};
}
