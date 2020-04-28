import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { TiArrowBackOutline, TiHeartOutline, TiHeart } from 'react-icons/ti';

import useAuthUser from '../../../hooks/useAuthUser.js';
import { updateTweetLikes } from '../../../actions/tweets/tweetsAction.js';

export default function TweetView({ tweet }) {
	const authUser = useAuthUser();
	const dispatch = useDispatch();
	const { tweetId, name, avatar, time, replyingTo, text, likes } = tweet;
	const [isheartClicked, setHeartClicked] = useState(false);

	const handleLikesUpdate = (e) => {
		e.preventDefault();
		console.log('Likes');
		setHeartClicked(true);
		dispatch(updateTweetLikes({ authUser, tweetId }));
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

/* 
<Link to={`/tweet/${tweetId}`} className='reply-link'>
								<TiArrowBackOutline />
							</Link>

*/
