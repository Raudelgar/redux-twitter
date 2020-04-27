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
 * Format the hone consume data
 *
 * @return Array with objects
 */
export function formmatHomeTweetsContent(tweetsAsc, tweets, users) {
	let results = [];
	tweetsAsc.forEach((tweet) => {
		let obj = {};
		const user = users[tweet.author];
		obj.tweetId = tweet.id;
		obj.userId = tweet.author;
		obj.name = user.name;
		obj.avatar = user.avatarURL;
		obj.time = `${new Date(tweet.timestamp).toLocaleTimeString()} | ${new Date(
			tweet.timestamp
		).toLocaleDateString()}`;
		if (tweet.replyingTo !== null) {
			obj.replyingTo = `Replying to @${tweets[tweet.replyingTo].author}`;
		}
		obj.text = tweet.text;
		obj.likes = tweet.likes.length;
		results.push(obj);
	});

	return results;
}

export function isObjEmpty(obj) {
	return !Object.keys(obj).length;
}
