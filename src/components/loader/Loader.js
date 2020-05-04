import React, { useState, useEffect } from 'react';
import { Orbitals } from 'react-spinners-css';

export default function Loader() {
	const delay = 200; // 200ms
	const [showLoadingIndicator, setLoadingIndicatorVisibility] = useState(false);

	useEffect(() => {
		const timer = setTimeout(() => setLoadingIndicatorVisibility(true), delay);

		return () => {
			clearTimeout(timer);
		};
	});

	return showLoadingIndicator ? (
		<div style={{ margin: '20% 50%' }}>
			<Orbitals color='#fff' />
		</div>
	) : null;
}
