export type QuestionProps = {
	index: number;
	onSelectAnswer: (answer: string) => void;
	onSkipAnswer: () => void;
};
