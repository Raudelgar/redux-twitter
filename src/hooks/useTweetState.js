import { useSelector, shallowEqual } from 'react-redux';
import { tweetsSelector } from './selectorHelper';

export default function useTweetState() {
	let tweets = useSelector(tweetsSelector, shallowEqual);

	return tweets;
}
