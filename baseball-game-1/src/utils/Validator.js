const Validator = {
	validUserBalls(balls) {
		if (isNaN(balls)) {
			throw new Error('[ERROR]');
		}
	},
};

module.exports = Validator;
