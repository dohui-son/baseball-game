const Validator = {
	validUserBalls(balls) {
		if (!/^[1-9]{3}$/.test(balls)) {
			throw new Error('[ERROR]');
		}
		const BALLS = balls.split('');
		const BALLS_SET = new Set(BALLS);
		if (BALLS.length !== 3 || BALLS_SET.size !== 3) {
			throw new Error('[ERROR]');
		}
	},

	validRetry(retry) {
		if (retry !== '1' && retry !== '2') {
			throw new Error('[ERROR]');
		}
	},
};

module.exports = Validator;
