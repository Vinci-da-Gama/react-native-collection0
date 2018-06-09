// detect what the platform is, this is the way to pass theme style. Also check boot/setup.js
import variable from '../platforms/platforms';

export default (variables = variable) => {
	const bodyTheme = {
		flex: 1,
		alignItems: 'center',
		alignSelf: 'center',
	};

	return bodyTheme;
};
