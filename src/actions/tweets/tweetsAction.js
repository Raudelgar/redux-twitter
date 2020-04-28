import { RECEIVE_TWEETS, INCREMENT_LIKE, DECREMENT_LIKE } from '../types.js';
import { postNewTweet } from '../../utils/api.js';
import { showLoading, hideLoading } from 'react-redux-loading-bar';
import { handleUpdateState } from '../rootAction.js';

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

export function handleAddNewTweet(rawTweet) {
	return (dispatch) => {
		dispatch(showLoading());
		postNewTweet(rawTweet)
			.then((tweet) => {
				dispatch(handleUpdateState());
			})
			.then(() => dispatch(hideLoading()));
	};
}
