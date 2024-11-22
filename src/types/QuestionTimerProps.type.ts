export type QuestionTimerProps = {
	timeout: number;
	onTimeout: (() => void) | undefined;
	mode: string;
};
