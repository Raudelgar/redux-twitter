import React, { useState, useEffect } from 'react';

import './NewTweet.css';

export default function NewTweet() {
	const [isBtnDisabled, setBtnDisbaled] = useState(true);
	const [comment, setComment] = useState('');

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

	return (
		<div>
			<h3 className='center-text'>Compose new Tweet</h3>
			<form className='new-tweet'>
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
