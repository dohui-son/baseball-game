const InputView = require('../UI/InputView');

const Validator = {
	validUserBalls(balls) {
		if (!/^[1-9]{3}$/.test(balls)) {
			this.validationFail();
		}
		const BALLS = balls.split('');
		const BALLS_SET = new Set(BALLS);
		if (BALLS.length !== 3 || BALLS_SET.size !== 3) {
			this.validationFail();
		}
	},

	validRetry(retry) {
		if (retry !== '1' && retry !== '2') {
			this.validationFail();
		}
	},

	validationFail() {
		InputView.endUI();
		throw '[ERROR]';
	},
};

module.exports = Validator;
