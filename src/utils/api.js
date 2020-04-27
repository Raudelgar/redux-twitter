import { _getUsers, _getTweets } from './_data';

export function fetchInitialData() {
	return Promise.all([_getUsers(), _getTweets()]).then(([users, tweets]) => ({
		users,
		tweets,
	}));
}
