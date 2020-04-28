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
	const { tweetId, name, avatar, time, replyingTo, text, likes } = tweet;
	const [isheartClicked, setHeartClicked] = useState(false);

	const handleLikesUpdate = (e) => {
		//TODO: It can be more than one like per authuser
		e.preventDefault();
		if (isheartClicked) {
			setHeartClicked(false);
			dispatch(decrementTweetLikes(tweetId));
		} else {
			setHeartClicked(true);
			dispatch(incrementTweetLikes({ authUser, tweetId }));
		}
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
						<span className='replay-icon'>
							<TiArrowBackOutline />
						</span>
						<button
							className={`heart-btn ${isheartClicked ? 'clicked' : ''}`}
							onClick={handleLikesUpdate}
						>
							{isheartClicked ? <TiHeart /> : <TiHeartOutline />}
						</button>
						<span style={{ fontSize: '1rem' }}>{likes}</span>
					</div>
				</div>
			</Link>
		</li>
	);
}
