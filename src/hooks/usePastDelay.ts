import { useState, useEffect } from 'react';

export const usePastDelay = (delay = 200) => {
	const [ past_delay, setPastDelay ] = useState(false);

	useEffect(() => {
		const timeout = setTimeout(() => setPastDelay(true), delay);
		return () => {
			clearTimeout(timeout);
		};
	}, [delay]);

	return past_delay;
};