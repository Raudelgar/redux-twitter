import axios from 'axios';
import queryString from 'query-string';
import { _getUsers, _getTweets, _saveTweet } from './_data';
import { SERVER_PROXY_DEV, SERVER_PROXY_PROD } from '../config/env.js';

let serverProxyUrl =
	process.env.NODE_ENV === 'production' ? SERVER_PROXY_PROD : SERVER_PROXY_DEV;

export function fetchInitialData() {
	return Promise.all([_getUsers(), _getTweets()]).then(([users, tweets]) => ({
		users,
		tweets,
	}));
}

export function postNewTweet(tweet) {
	return _saveTweet(tweet).then((res) => res);
}

export function fetchGithubCode() {
	return axios
		.get(`${serverProxyUrl}/gh-client`)
		.then((response) => {
			if (response.status >= 200 || response.status < 300) {
				return response.data;
			} else {
				return false;
			}
		})
		.catch((error) => console.log(error));
}

export function fetchGithubUser(code) {
	return axios
		.post(`${serverProxyUrl}/gh-token`, { params: { code } })
		.then((response) => fetchWithToken(response.data))
		.then((res) => res.data)
		.catch((error) => console.log(error));
}

function fetchWithToken(params) {
	const resParams = queryString.parse(params);
	window.localStorage.setItem('gh-token', resParams.access_token);
	return getUser(resParams);
}

export function getUser(params) {
	const url = `https://api.github.com/user?user`;
	const GH_TOKEN = window.localStorage.getItem('gh-token')
		? window.localStorage.getItem('gh-token')
		: params.access_token;

	const config = {
		url,
		method: 'get',
		headers: {
			Authorization: `Bearer ${GH_TOKEN}`,
		},
	};

	return axios(config);
}
