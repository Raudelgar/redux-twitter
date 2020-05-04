import React, { useState, useEffect } from 'react';

import './NewTweet.css';
import useAuthUser from '../../../hooks/useAuthUser';
import { useDispatch } from 'react-redux';
import tweetActions from '../../../actions/tweets/tweetsAction';

export default function NewTweet(props) {
	const [isBtnDisabled, setBtnDisbaled] = useState(true);
	const [comment, setComment] = useState('');
	const authUser = useAuthUser();
	const dispatch = useDispatch();

	useEffect(() => {
		if (!comment) {
			setBtnDisbaled(true);
		} else {
			setBtnDisbaled(false);
		}
	}, [comment]);

	const handleComment = (e) => {
		e.preventDefault();

		setComment(e.target.value);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(props);
		if (props.history) {
			props.history.push('/');
		}

		dispatch(
			tweetActions.handleAddNewTweet({
				text: comment,
				author: authUser,
				replyingTo: !props.id ? null : props.id,
			})
		);
		setComment('');
	};

	return (
		<div>
			<h3 className='center-text'>Compose new Tweet</h3>
			<form className='new-tweet' onSubmit={handleSubmit}>
				<textarea
					placeholder="What's happening?"
					maxLength='280'
					className='textarea'
					value={comment}
					onChange={handleComment}
				></textarea>
				<button
					disabled={isBtnDisabled ? 'disabled' : false}
					type='submit'
					className={`btn ${isBtnDisabled ? '' : 'submit'}`}
				>
					submit
				</button>
			</form>
		</div>
	);
}
