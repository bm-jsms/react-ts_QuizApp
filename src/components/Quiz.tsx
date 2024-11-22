import { useState, useCallback } from 'react';
import { QUESTIONS } from '../data';
import { QuestionTimer } from './QuestionTimer';

import trophy from '../assets/trophy.png';

type UserAnswer = string | null;

const Quiz = () => {
	const [userAnswers, setUserAnswers] = useState<UserAnswer[]>([]);

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
		return (
			<div id='summary'>
				<img src={trophy} alt='Trophy icon' />
				<h2>Quiz Completed!</h2>
			</div>
		);
	}

	const shuffledAnswers = [...QUESTIONS[activeQuestionIndex].answers];
	shuffledAnswers.sort(() => Math.random() - 0.5);

	return (
		<div id='quiz'>
			<div id='question'>
				<QuestionTimer timeout={10000} onTimeout={handleSkipAnswer} />
				<h2>{QUESTIONS[activeQuestionIndex].text}</h2>
				<ul id='answers'>
					{shuffledAnswers.map((answer) => (
						<li key={answer} className='answer'>
							<button onClick={() => handleSelectAnswer(answer)}>
								{answer}
							</button>
						</li>
					))}
				</ul>
			</div>
		</div>
	);
};

export { Quiz };
