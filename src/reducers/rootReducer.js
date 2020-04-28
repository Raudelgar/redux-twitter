import { combineReducers } from 'redux';
import usersReducer from './usersReducer.js';
import tweetsReducer from './tweetsReducer.js';
import { loadingBarReducer } from 'react-redux-loading-bar';
import authReducer from './authReducer.js';

const STATE = {
	loadingBar: loadingBarReducer,
	users: usersReducer,
	tweets: tweetsReducer,
	authedUser: authReducer,
};

export default combineReducers(STATE);
