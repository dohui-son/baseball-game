const { Console } = require('@woowacourse/mission-utils');
const { MESSAGE } = require('../utils/constants');

const OutputView = {
	printWelcome() {
		Console.print(MESSAGE['WELCOME']);
	},

	printScore(gameReult) {
		const FORMATTED_SCORE = s;
	},

	scorePrintFormatter(gameResult) {
		if (gameReult['STRIKE'] === 3) {
			return MESSAGE['SUCCESS'];
		}
		if (gameReult['BALL'] === 0 && gameReult['STRIKE'] === 0) {
			return MESSAGE['LOST'];
		}
		let ballStrike = '';
		if (gameReult['BALL'] > 0) {
			ballStrike += gameResult['BALL'] + MESSAGE['BALL'];
		}
	},
};
module.exports = OutputView;
