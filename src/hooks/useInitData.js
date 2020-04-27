import { useEffect } from 'react';
import { useSelector, useDispatch, shallowEqual } from 'react-redux';
import handleInitialData from '../actions/rootAction';
import {
	authUserSelector,
	usersSelector,
	tweetsSelector,
} from './selectorHelper';

export default function useInitData() {
	useSelector(authUserSelector, shallowEqual);
	useSelector(usersSelector, shallowEqual);
	useSelector(tweetsSelector, shallowEqual);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(handleInitialData());
	}, [dispatch]);
}
