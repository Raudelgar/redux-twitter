import { RECEIVE_TWEETS } from '../types.js';

export function receiveTweets(tweets) {
	return {
		type: RECEIVE_TWEETS,
		payload: tweets,
	};
}
