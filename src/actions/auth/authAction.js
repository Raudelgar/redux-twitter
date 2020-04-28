import { AUTH_USER } from '../types';

const AUTH = 'tylermcginnis';

export function setAuthUser() {
	return {
		type: AUTH_USER,
		payload: AUTH,
	};
}
