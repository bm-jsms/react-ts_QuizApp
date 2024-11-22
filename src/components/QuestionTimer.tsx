import { useEffect, useState } from 'react';

type QuestionTimerType = {
	onTimeout: () => void;
	timeout: number;
};

const QuestionTimer = ({ onTimeout, timeout }: QuestionTimerType) => {
	const [remainingTime, setRemainingTime] = useState<number>(timeout);

	setTimeout(onTimeout, timeout);

	useEffect(() => {
		setTimeout(onTimeout, timeout);
	}, [timeout, onTimeout]);

	useEffect(() => {
		setInterval(() => {
			setRemainingTime((prevRemainingTime) => prevRemainingTime - 100);
		}, 100);
	}, [timeout, onTimeout]);

	return <progress id='question-time' max={timeout} value={remainingTime} />;
};

export { QuestionTimer };
