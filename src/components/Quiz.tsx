import { useState, useCallback } from 'react';

import { QUESTIONS } from '../data';
import { Question } from './Question';
import { Summary } from './Summary';

type UserAnswersType = (string | null)[];

const Quiz = () => {
	const [userAnswers, setUserAnswers] = useState<UserAnswersType>([]);

	const activeQuestionIndex = userAnswers.length;
	const quizIsComplete = activeQuestionIndex === QUESTIONS.length;

	const handleSelectAnswer = useCallback(function handleSelectAnswer(
		selectedAnswer: string | null,
	) {
		setUserAnswers((prevUserAnswers) => {
			return [...prevUserAnswers, selectedAnswer];
		});
	},
	[]);

	const handleSkipAnswer = useCallback(
		() => handleSelectAnswer(null),
		[handleSelectAnswer],
	);

	if (quizIsComplete) {
		const transformedAnswers = userAnswers.map((answer) => answer ?? 'Skipped');
		return <Summary userAnswers={transformedAnswers} />;
	}

	return (
		<div id='quiz'>
			<Question
				key={activeQuestionIndex}
				index={activeQuestionIndex}
				onSelectAnswer={handleSelectAnswer}
				onSkipAnswer={handleSkipAnswer}
			/>
		</div>
	);
};

export { Quiz };
