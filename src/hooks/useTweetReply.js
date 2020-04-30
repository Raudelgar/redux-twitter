import { useState } from 'react';

export default function useTweetReply() {
	const [isRepliesClicked, setRepliesCliked] = useState(false);

	const handleReplyClick = () => {
		console.log('hook');
		setRepliesCliked(true);
	};

	return { isRepliesClicked, handleReplyClick };
}
