import { RECEIVE_USERS, ADD_TWEET, ADD_TWEET_REPLAY } from '../actions/types';

export default function usersReducer(state = {}, { type, payload }) {
	switch (type) {
		case RECEIVE_USERS:
			return {
				...state,
				...payload,
			};
		case ADD_TWEET:
			return {
				...state,
				[payload.author]: {
					...state[payload.author],
					tweets: state[payload.author].tweets.concat([payload.id]),
				},
			};
		case ADD_TWEET_REPLAY:
			const { tweet } = payload;
			const { author, id } = tweet;
			return {
				...state,
				[author]: {
					...state[author],
					tweets: state[author].tweets.concat([id]),
				},
			};
		default:
			return state;
	}
}
