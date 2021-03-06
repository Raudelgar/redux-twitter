import { createBrowserHistory } from 'history';

/**
 * history object, to abstract history from react router
 */
export const history = createBrowserHistory();

/**
 * Tweets in Ascending Order by Timestamp
 *
 * @return Array with objects
 */
export function tweetsOrderAsc(obj) {
	return Object.keys(obj)
		.map((id) => obj[id])
		.sort((a, b) => b.timestamp - a.timestamp);
}

/**
 * Format the home consume data
 *
 * @return Array with objects
 */
export function formmatHomeTweetsContent(tweetsAsc, tweets, users) {
	let results = [];
	tweetsAsc.forEach((tweet) => {
		let tweetFormatted = formmatComposeTweet(tweet.id, tweets, users);
		results.push(tweetFormatted);
	});

	return results;
}

/**
 * Format the Tweet - Compose consume data
 *
 * @return Object
 */
export function formmatComposeTweet(id, tweets, users) {
	let obj = {};
	const tweet = tweets[id];
	const user = users[tweet.author];
	obj.tweetId = tweet.id;
	obj.userId = tweet.author;
	obj.name = user.name;
	obj.avatar = user.avatarURL;
	obj.timestamp = tweet.timestamp;
	obj.time = `${new Date(tweet.timestamp).toLocaleTimeString()} | ${new Date(
		tweet.timestamp
	).toLocaleDateString()}`;
	if (tweet.replyingTo !== null) {
		obj.replyingTo = `Replying to @${tweets[tweet.replyingTo].author}`;
	}
	obj.text = tweet.text;
	obj.likes = tweet.likes;
	obj.likesCount = tweet.likes.length;
	obj.replies = tweet.replies;
	obj.repliesCount = tweet.replies.length;

	return obj;
}

export function isObjEmpty(obj) {
	return !Object.keys(obj).length;
}
