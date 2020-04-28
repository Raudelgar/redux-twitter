import useTweetState from './useTweetState';
import useUserState from './useUserState';
import { formmatComposeTweet } from '../utils/helper';

export default function useComposeTweet(id) {
	const tweets = useTweetState();
	const users = useUserState();

	return formmatComposeTweet(id, tweets, users);
}
