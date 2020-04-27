import { RECEIVE_USERS } from '../actions/types';

export default function usersReducer(state = {}, { type, payload }) {
	switch (type) {
		case RECEIVE_USERS:
			return {
				...state,
				...payload,
			};
		default:
			return state;
	}
}
