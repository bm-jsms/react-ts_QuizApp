import logo from '../assets/logo.png';

const Header = () => {
	return (
		<header>
			<img src={logo} alt='App Logo' />
			<h1>Quiz App</h1>
		</header>
	);
};

export { Header };
