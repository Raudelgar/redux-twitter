import { useSelector, shallowEqual } from 'react-redux';
import { authUserSelector } from './selectorHelper';

export default function useAuthUser() {
	let authUser = useSelector(authUserSelector, shallowEqual);

	return authUser;
}
