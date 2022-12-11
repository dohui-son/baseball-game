const { Console } = require('@woowacourse/mission-utils');
const { MESSAGE } = require('../utils/constants');

const OutputView = {
	printWelcome() {
		Console.print(MESSAGE['WELCOME']);
	},

	printScore(gameResult) {
		const FORMATTED_SCORE = this.scorePrintFormatter(gameResult);
		Console.print(FORMATTED_SCORE);
	},

	scorePrintFormatter(gameResult) {
		if (gameResult['STRIKE'] === 3) {
			return MESSAGE['SUCCESS'];
		}
		if (gameResult['BALL'] === 0 && gameResult['STRIKE'] === 0) {
			return MESSAGE['LOST'];
		}
		let ballStrike = '';
		if (gameResult['BALL'] > 0) {
			ballStrike += gameResult['BALL'] + MESSAGE['BALL'] + ' ';
		}
		if (gameResult['STRIKE'] > 0) {
			ballStrike += gameResult['STRIKE'] + MESSAGE['STRIKE'];
		}
		return ballStrike;
	},
};
module.exports = OutputView;
