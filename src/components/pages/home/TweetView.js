import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { TiArrowBackOutline, TiHeartOutline, TiHeart } from 'react-icons/ti';

import useAuthUser from '../../../hooks/useAuthUser.js';
import {
	incrementTweetLikes,
	decrementTweetLikes,
} from '../../../actions/tweets/tweetsAction.js';

export default function TweetView({ tweet }) {
	const authUser = useAuthUser();
	const dispatch = useDispatch();
	const {
		tweetId,
		name,
		avatar,
		time,
		replyingTo,
		text,
		likes,
		likesCount,
		replies,
	} = tweet;
	const [isheartClicked, setHeartClicked] = useState(likes.includes(authUser));

	const handleLikesUpdate = (e) => {
		e.preventDefault();

		if (isheartClicked) {
			dispatch(decrementTweetLikes(tweetId));
		} else {
			dispatch(incrementTweetLikes({ authUser, tweetId }));
		}
		setHeartClicked((curr) => (curr ? false : true));
	};

	return (
		<li>
			<Link className='tweet' to={`/tweet/${tweetId}`}>
				<img src={avatar} alt={`Avatar of ${name}`} className='avatar' />
				<div className='tweet-info'>
					<div>
						<span>{name}</span>
						<div>{time}</div>
						<button className='replying-to'>{replyingTo}</button>
						<p>{text}</p>
					</div>
					<div className='tweet-icons'>
						<TiArrowBackOutline className='replay-icon' />
						<span style={{ fontSize: '1rem', paddingLeft: '5px' }}>
							{!replies ? null : replies}
						</span>
						<button
							className={`heart-btn ${isheartClicked ? 'clicked' : ''}`}
							onClick={handleLikesUpdate}
						>
							{isheartClicked ? <TiHeart /> : <TiHeartOutline />}
						</button>
						<span style={{ fontSize: '1rem' }}>{likesCount}</span>
					</div>
				</div>
			</Link>
		</li>
	);
}
