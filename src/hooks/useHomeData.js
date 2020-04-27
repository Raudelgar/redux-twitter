import useUserState from './useUserState';
import useTweetState from './useTweetState';
import {
	tweetsOrderAsc,
	isObjEmpty,
	formmatHomeTweetsContent,
} from '../utils/helper';

export default function useHomeData() {
	const users = useUserState();
	const tweets = useTweetState();
	let tweetsAsc = isObjEmpty(tweets) ? [] : tweetsOrderAsc(tweets);
	let tweetsFormatted = [];

	if (tweetsAsc.length) {
		tweetsFormatted = formmatHomeTweetsContent(tweetsAsc, tweets, users);
	}

	return tweetsFormatted;
}
