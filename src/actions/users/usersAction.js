import { RECEIVE_USERS, AUTH_USER } from '../types.js';

const userActions = {
	setUserid,
	setUsers,
	setAuthUser,
};

function setUsers(users) {
	return {
		type: RECEIVE_USERS,
		payload: users,
	};
}

function setUserid(userId) {
	return {
		type: AUTH_USER,
		payload: userId,
	};
}

function setAuthUser() {
	const AUTH = !window.localStorage.getItem('gh-authId')
		? ''
		: window.localStorage.getItem('gh-authId');

	return {
		type: AUTH_USER,
		payload: AUTH,
	};
}

export default userActions;
