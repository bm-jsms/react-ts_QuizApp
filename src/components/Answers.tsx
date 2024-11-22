import { useRef } from 'react';

import type { AnswersProps } from '../types';

type shuffledAnswersType = string[];

const Answers = ({
	answers,
	selectedAnswer,
	answerState,
	onSelect,
}: AnswersProps) => {
	const shuffledAnswers = useRef<shuffledAnswersType>();

	if (!shuffledAnswers.current) {
		shuffledAnswers.current = [...answers];
		shuffledAnswers.current.sort(() => Math.random() - 0.5);
	}

	return (
		<ul id='answers'>
			{shuffledAnswers.current.map((answer) => {
				const isSelected = selectedAnswer === answer;
				let cssClass = '';

				if (answerState === 'answered' && isSelected) {
					cssClass = 'selected';
				}

				if (
					(answerState === 'correct' || answerState === 'wrong') &&
					isSelected
				) {
					cssClass = answerState;
				}

				return (
					<li key={answer} className='answer'>
						<button
							onClick={() => onSelect(answer)}
							className={cssClass}
							disabled={answerState !== ''}
						>
							{answer}
						</button>
					</li>
				);
			})}
		</ul>
	);
};

export { Answers };
