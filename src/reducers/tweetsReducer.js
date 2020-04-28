import { RECEIVE_TWEETS, UPDATE_LIKE } from '../actions/types';

export default function tweetsReducer(state = {}, { type, payload }) {
	switch (type) {
		case RECEIVE_TWEETS:
			return {
				...state,
				...payload,
			};
		case UPDATE_LIKE:
			const { authUser, tweetId } = payload;
			return {
				...state,
				[tweetId]: {
					...state[tweetId],
					likes: state[tweetId].likes.concat([authUser]),
				},
			};
		default:
			return state;
	}
}
