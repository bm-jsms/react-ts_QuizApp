import { useState } from 'react';
import { QUESTIONS } from '../data';

import trophy from '../assets/trophy.png';

const Quiz = () => {
	const [userAnswers, setUserAnswers] = useState<string[]>([]);
	const activeQuestionIndex = userAnswers.length;
	const quizIsComplete = activeQuestionIndex === QUESTIONS.length;

	const handleSelectAnswer = (selectedAnswer: string) => {
		setUserAnswers((preUserAnswers) => {
			return [...preUserAnswers, selectedAnswer];
		});
	};

	if (quizIsComplete) {
		return (
			<div id='summary'>
				<img src={trophy} alt='trophy icon' />
				<h2>Quiz completed</h2>
			</div>
		);
	}

	const shuffledAnswers = [...QUESTIONS[activeQuestionIndex].answers];
	shuffledAnswers.sort(() => Math.random() - 0.5);

	return (
		<div id='quiz'>
			<div id='question'>
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
