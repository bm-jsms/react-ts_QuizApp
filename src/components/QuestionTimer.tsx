import { useEffect, useState } from 'react';

type QuestionTimerType = {
	onTimeout: () => void;
	timeout: number;
};

const QuestionTimer = ({ onTimeout, timeout }: QuestionTimerType) => {
	const [remainingTime, setRemainingTime] = useState<number>(timeout);

	useEffect(() => {
		const timer = setTimeout(onTimeout, timeout);
		return () => {
			clearTimeout(timer);
		};
	}, [timeout, onTimeout]);

	useEffect(() => {
		const interval = setInterval(() => {
			setRemainingTime((prevRemainingTime) => prevRemainingTime - 100);
		}, 100);
		return () => {
			clearInterval(interval);
		};
	}, []);

	return <progress id='question-time' max={timeout} value={remainingTime} />;
};

export { QuestionTimer };
