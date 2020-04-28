import { fetchInitialData } from '../utils/api';
import { receiveUsers } from './users/usersAction';
import { receiveTweets } from './tweets/tweetsAction';
import { showLoading, hideLoading } from 'react-redux-loading-bar';
import { setAuthUser } from './auth/authAction';

export function handleInitialData() {
	return (dispatch) => {
		dispatch(showLoading());
		fetchInitialData()
			.then(({ users, tweets }) => {
				dispatch(setAuthUser());
				dispatch(receiveUsers({ ...users }));
				dispatch(receiveTweets({ ...tweets }));
			})
			.then(() => dispatch(hideLoading()));
	};
}

export function handleUpdateState() {
	return (dispatch) => {
		fetchInitialData().then(({ users, tweets }) => {
			dispatch(receiveUsers({ ...users }));
			dispatch(receiveTweets({ ...tweets }));
		});
	};
}
