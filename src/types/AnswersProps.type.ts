export type AnswersProps = {
	answers: string[];
	selectedAnswer: string | null;
	answerState: string;
	onSelect: (answer: string) => void;
};
