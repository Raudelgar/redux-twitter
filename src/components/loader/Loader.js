import React, { useState, useEffect } from 'react';

export default function Loader() {
	const delay = 200; // 200ms
	const [showLoadingIndicator, setLoadingIndicatorVisibility] = useState(false);

	useEffect(() => {
		const timer = setTimeout(() => setLoadingIndicatorVisibility(true), delay);

		return () => {
			clearTimeout(timer);
		};
	});

	return showLoadingIndicator ? <p>Loadin App...</p> : null;
}
