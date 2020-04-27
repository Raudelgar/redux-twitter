import { combineReducers } from 'redux';
import usersReducer from './usersReducer.js';
import tweetsReducer from './tweetsReducer.js';
import { loadingBarReducer } from 'react-redux-loading-bar';

const STATE = {
	loadingBar: loadingBarReducer,
	users: usersReducer,
	tweets: tweetsReducer,
};

export default combineReducers(STATE);
