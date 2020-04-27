import { RECEIVE_USERS } from '../types.js';

export function receiveUsers(users) {
	console.log('users', users);
	return {
		type: RECEIVE_USERS,
		payload: users,
	};
}
