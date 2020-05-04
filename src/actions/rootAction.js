import { fetchInitialData } from '../utils/api';
import userActions from './users/usersAction';
import tweetActions from './tweets/tweetsAction';
import { showLoading, hideLoading } from 'react-redux-loading-bar';
// import { setAuthUser } from './auth/authAction';

export function handleInitialData() {
	return (dispatch) => {
		dispatch(showLoading());
		fetchInitialData()
			.then(({ users, tweets }) => {
				dispatch(userActions.setAuthUser());
				dispatch(userActions.setUsers({ ...users }));
				dispatch(tweetActions.receiveTweets({ ...tweets }));
			})
			.then(() => dispatch(hideLoading()));
	};
}

//This will work if each action is persist on a database
// export function handleUpdateState() {
// 	return (dispatch) => {
// 		fetchInitialData().then(({ users, tweets }) => {
// 			dispatch(receiveUsers({ ...users }));
// 			dispatch(receiveTweets({ ...tweets }));
// 		});
// 	};
// }
