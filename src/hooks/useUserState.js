import { useSelector, shallowEqual } from 'react-redux';
import { usersSelector } from './selectorHelper';

export default function useUserState() {
	let users = useSelector(usersSelector, shallowEqual);

	return users;
}
