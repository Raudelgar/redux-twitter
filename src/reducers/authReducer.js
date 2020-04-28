import { AUTH_USER } from '../actions/types';

export default function authReducer(state = '', { type, payload }) {
	switch (type) {
		case AUTH_USER:
			return payload;
		default:
			return state;
	}
}
