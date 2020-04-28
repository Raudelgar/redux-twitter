import React from 'react';
import { TiArrowBackOutline, TiHeartOutline } from 'react-icons/ti';

export default function TweetView({ tweet }) {
	const { tweetId, name, avatar, time, replyingTo, text, likes } = tweet;
	return (
		<li>
			<a className='tweet' href={`/tweet/${tweetId}`}>
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
						<button className='heart-btn'>
							<TiHeartOutline />
						</button>
						<span style={{ fontSize: '1rem' }}>{likes}</span>
					</div>
				</div>
			</a>
		</li>
	);
}
