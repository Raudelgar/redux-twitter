import React from 'react';
import { Link } from 'react-router-dom';
import { TiArrowBackOutline, TiHeartOutline } from 'react-icons/ti';

export default function TweetView({ tweet }) {
	const { tweetId, name, avatar, time, replyingTo, text, likes } = tweet;

	const handleLikesUpdate = (e) => {
		e.preventDefault();
		console.log('Likes');
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
						<button className='heart-btn' onClick={handleLikesUpdate}>
							<TiHeartOutline />
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
