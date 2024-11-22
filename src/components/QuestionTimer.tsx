import { useState, useEffect } from 'react';
import type { QuestionTimerProps } from '../types';

const QuestionTimer = ({ timeout, onTimeout, mode }: QuestionTimerProps) => {
	const [remainingTime, setRemainingTime] = useState(timeout);

	useEffect(() => {
		console.log('SETTING TIMEOUT');
		if (onTimeout) {
			const timer = setTimeout(onTimeout, timeout);

			return () => {
				clearTimeout(timer);
			};
		}
	}, [timeout, onTimeout]);

	useEffect(() => {
		console.log('SETTING INTERVAL');
		const interval = setInterval(() => {
			setRemainingTime((prevRemainingTime) => prevRemainingTime - 100);
		}, 100);

		return () => {
			clearInterval(interval);
		};
	}, []);

	return (
		<progress
			id='question-time'
			max={timeout}
			value={remainingTime}
			className={mode}
		/>
	);
};
export { QuestionTimer };
