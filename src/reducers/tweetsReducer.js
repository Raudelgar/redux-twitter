import {
	RECEIVE_TWEETS,
	INCREMENT_LIKE,
	DECREMENT_LIKE,
	ADD_TWEET,
	ADD_TWEET_REPLAY,
} from '../actions/types';

export default function tweetsReducer(state = {}, { type, payload }) {
	switch (type) {
		case RECEIVE_TWEETS:
			return {
				...state,
				...payload,
			};
		case INCREMENT_LIKE:
			const { authUser, tweetId } = payload;
			return {
				...state,
				[tweetId]: {
					...state[tweetId],
					likes: state[tweetId].likes.concat([authUser]),
				},
			};
		case DECREMENT_LIKE:
			const lastIndex = state[payload].likes.length - 1;
			return {
				...state,
				[payload]: {
					...state[payload],
					likes: state[payload].likes.slice(0, lastIndex),
				},
			};
		case ADD_TWEET:
			return {
				...state,
				[payload.id]: payload,
			};
		case ADD_TWEET_REPLAY:
			const { tweet, replayId } = payload;
			const { id } = tweet;
			return {
				...state,
				[id]: tweet,
				[replayId]: {
					...state[replayId],
					replies: state[replayId].replies.concat([id]),
				},
			};
		default:
			return state;
	}
}
