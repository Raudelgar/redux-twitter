import { fetchGithubUser, fetchInitialData } from '../../utils/api.js';
import userActions from '../users/usersAction';
import tweetActions from '../tweets/tweetsAction.js';

const authActions = {
	login,
};

function login(code, { history }) {
	return (dispatch) => {
		fetchGithubUser(code).then((res) => {
			//I should now dispatch the response, which user data
			//In this case, it can't be, because I have user data mocked
			//and I just need the userId.
			window.localStorage.setItem('gh-authId', res.login);
			dispatch(loginSuccess(res.login));
			history.push('/');
		});
	};
}

function loginSuccess(userId) {
	return (dispatch) => {
		fetchInitialData().then(({ users, tweets }) => {
			dispatch(userActions.setUserid(userId));
			dispatch(userActions.setUsers({ ...users }));
			dispatch(tweetActions.receiveTweets({ ...tweets }));
		});
	};
}

export default authActions;
