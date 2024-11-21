import { useState } from 'react';
import { QUESTIONS } from '../data';

const Quiz = () => {
	const [userAnswers, setUserAnswers] = useState<string[]>([]);
	const activeQuestionIndex = userAnswers.length;

	const handleSelectAnswer = (selectedAnswer: string) => {
		setUserAnswers((preUserAnswers) => {
			return [...preUserAnswers, selectedAnswer];
		});
	};

	return (
		<div id='quiz'>
			<div id='question'>
				<h2>{QUESTIONS[activeQuestionIndex].text}</h2>
				<ul id='answers'>
					{QUESTIONS[activeQuestionIndex].answers.map((answer) => (
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
