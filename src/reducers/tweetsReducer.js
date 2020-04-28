import {
	RECEIVE_TWEETS,
	INCREMENT_LIKE,
	DECREMENT_LIKE,
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
		default:
			return state;
	}
}
