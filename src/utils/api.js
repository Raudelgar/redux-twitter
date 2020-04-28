import { _getUsers, _getTweets, _saveTweet } from './_data';

export function fetchInitialData() {
	return Promise.all([_getUsers(), _getTweets()]).then(([users, tweets]) => ({
		users,
		tweets,
	}));
}

export function postNewTweet(tweet) {
	return _saveTweet(tweet).then((res) => res);
}
