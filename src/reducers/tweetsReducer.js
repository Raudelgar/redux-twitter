import { RECEIVE_TWEETS } from '../actions/types';

export default function tweetsReducer(state = {}, { type, payload }) {
	switch (type) {
		case RECEIVE_TWEETS:
			return {
				...state,
				...payload,
			};
		default:
			return state;
	}
}
