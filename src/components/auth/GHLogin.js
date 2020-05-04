import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import queryString from 'query-string';
import GitHubIcon from '@material-ui/icons/GitHub';

import './Auth.scss';
import authActions from '../../actions/auth/authAction';
import { fetchGithubCode } from '../../utils/api.js';

export default function GHLogin(props) {
	const [isLoading, setLoading] = useState(false);
	const dispatch = useDispatch();

	useEffect(() => {
		const { code } = queryString.parse(window.location.search);
		if (code) {
			dispatch(authActions.login(code, props));
		}

		return () => setLoading(false);
	}, [dispatch, props]);

	const handleUserLogin = () => {
		const redirect_uri = window.location.href;
		setLoading(true);
		fetchGithubCode().then((res) => {
			if (res) {
				const { url, scope, client_id } = res;
				const params = queryString.stringify({
					scope,
					client_id,
					redirect_uri,
				});
				const authUrl = `${url}?${params}`;
				window.location.assign(authUrl);
			}
		});
	};

	return (
		<section className='card-container'>
			<div>
				<h1>Welcome</h1>
				<span></span>
				<div
					className={`login-container ${isLoading ? 'spinning-container' : ''}`}
				>
					{isLoading ? (
						<div className='spinning'></div>
					) : (
						<button className='login-link' onClick={handleUserLogin}>
							<GitHubIcon />
							<span>Login with Github</span>
						</button>
					)}
				</div>
			</div>
		</section>
	);
}
