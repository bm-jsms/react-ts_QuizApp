import { useState } from 'react';

import { QuestionTimer } from './QuestionTimer';
import { Answers } from './Answers';
import { QUESTIONS } from '../data';

import type { QuestionProps } from '../types';

type AnswerStateType = {
	selectedAnswer: string | null;
	isCorrect: boolean | null;
};

const Question = ({ index, onSelectAnswer, onSkipAnswer }: QuestionProps) => {
	const [answer, setAnswer] = useState<AnswerStateType>({
		selectedAnswer: '',
		isCorrect: null,
	});

	let timer = 10000;

	if (answer.selectedAnswer) {
		timer = 1000;
	}

	if (answer.isCorrect !== null) {
		timer = 2000;
	}

	function handleSelectAnswer(answer: string) {
		setAnswer({
			selectedAnswer: answer,
			isCorrect: null,
		});

		setTimeout(() => {
			setAnswer({
				selectedAnswer: answer,
				isCorrect: QUESTIONS[index].answers[0] === answer,
			});

			setTimeout(() => {
				onSelectAnswer(answer);
			}, 2000);
		}, 1000);
	}

	let answerState = '';

	if (answer.selectedAnswer && answer.isCorrect !== null) {
		answerState = answer.isCorrect ? 'correct' : 'wrong';
	} else if (answer.selectedAnswer) {
		answerState = 'answered';
	}

	return (
		<div id='question'>
			<QuestionTimer
				key={timer}
				timeout={timer}
				onTimeout={answer.selectedAnswer === '' ? onSkipAnswer : undefined}
				mode={answerState}
			/>
			<h2>{QUESTIONS[index].text}</h2>
			<Answers
				answers={QUESTIONS[index].answers}
				selectedAnswer={answer.selectedAnswer}
				answerState={answerState}
				onSelect={handleSelectAnswer}
			/>
		</div>
	);
};

export { Question };
