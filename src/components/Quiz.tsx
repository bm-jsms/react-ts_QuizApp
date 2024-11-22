import { useState, useCallback } from 'react';
import { QUESTIONS } from '../data';
import { QuestionTimer } from './QuestionTimer';

import trophy from '../assets/trophy.png';

type UserAnswer = string | null;

const Quiz = () => {
	const [answerState, setAnswerState] = useState<string>('');
	const [userAnswers, setUserAnswers] = useState<UserAnswer[]>([]);

	const activeQuestionIndex =
		answerState === '' ? userAnswers.length : userAnswers.length - 1;
	const quizIsComplete = activeQuestionIndex === QUESTIONS.length;

	const handleSelectAnswer = useCallback(
		function handleSelectAnswer(selectedAnswer: UserAnswer) {
			setAnswerState('answered');
			setUserAnswers((prevUserAnswers) => {
				return [...prevUserAnswers, selectedAnswer];
			});
			setTimeout(() => {
				if (selectedAnswer === QUESTIONS[activeQuestionIndex].answers[0]) {
					setAnswerState('correct');
				} else {
					setAnswerState('wrong');
				}

				setTimeout(() => {
					setAnswerState('');
				}, 2000);
			}, 1000);
		},
		[activeQuestionIndex],
	);

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
				<QuestionTimer
					key={activeQuestionIndex}
					timeout={10000}
					onTimeout={handleSkipAnswer}
				/>
				<h2>{QUESTIONS[activeQuestionIndex].text}</h2>
				<ul id='answers'>
					{shuffledAnswers.map((answer) => {
						const isSelected = userAnswers[userAnswers.length - 1] === answer;
						let cssClass: string = '';

						if (answerState === 'answered' && isSelected) cssClass = 'selected';

						if (
							(answerState === 'correct' || answerState === 'wrong') &&
							isSelected
						)
							cssClass = answerState;

						return (
							<li key={answer} className='answer'>
								<button
									onClick={() => handleSelectAnswer(answer)}
									className={cssClass}
								>
									{answer}
								</button>
							</li>
						);
					})}
				</ul>
			</div>
		</div>
	);
};

export { Quiz };
