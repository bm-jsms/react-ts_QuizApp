import type { QuestionType } from '../types';

export const questions: QuestionType[] = [
	{
		id: 'q1',
		text: 'Which of the following definitions best describes React.js?',
		answers: [
			'A library to build user interfaces with help of declarative code.',
			'A library for managing state in web applications.',
			'A framework to build user interfaces with help of imperative code.',
			'A library used for building mobile applications only.',
		],
	},
	{
		id: 'q2',
		text: 'What is the primary purpose of TypeScript?',
		answers: [
			'To add static types to JavaScript.',
			'To manage CSS styles in JavaScript applications.',
			'To optimize performance of React applications.',
			'To replace React for UI development.',
		],
	},
	{
		id: 'q3',
		text: 'Which of the following is a valid React Hook?',
		answers: ['useState', 'useVars', 'useInit', 'useProp'],
	},
	{
		id: 'q4',
		text: 'What is JSX in the context of React?',
		answers: [
			'A syntax extension for JavaScript to describe UI elements.',
			'A JavaScript function to manage state in React.',
			'A compiler for TypeScript code.',
			'A CSS preprocessor for React components.',
		],
	},
	{
		id: 'q5',
		text: 'How does TypeScript help in React development?',
		answers: [
			'It provides type safety, reducing runtime errors.',
			'It increases the rendering speed of components.',
			'It automatically generates HTML from React components.',
			'It replaces JavaScript in the React environment.',
		],
	},
	{
		id: 'q6',
		text: 'Which of the following is NOT a lifecycle method in React?',
		answers: [
			'useState',
			'componentDidMount',
			'componentDidUpdate',
			'componentWillUnmount',
		],
	},
	{
		id: 'q7',
		text: 'What does the "key" prop help React identify in a list?',
		answers: [
			'Which items have changed, are added, or are removed.',
			'The data type of each list item.',
			'The default styling for list elements.',
			'The state of each component in the list.',
		],
	},
	{
		id: 'q8',
		text: 'What is a TypeScript "interface" commonly used for?',
		answers: [
			'Defining the structure of an object or a class.',
			'Connecting components to APIs.',
			'Enforcing unique keys in React lists.',
			'Styling components in React.',
		],
	},
	{
		id: 'q9',
		text: 'What does "prop drilling" mean in React?',
		answers: [
			'Passing props through multiple layers of components.',
			'Updating the state of a parent component.',
			'Optimizing component rendering.',
			'Using Context API to manage global state.',
		],
	},
	{
		id: 'q10',
		text: 'Which of the following best describes "useEffect" in React?',
		answers: [
			'A Hook that performs side effects in functional components.',
			'A function to create class components.',
			'A state management tool in React.',
			'A built-in function for rendering components.',
		],
	},
];
