const { Console } = require('@woowacourse/mission-utils');
const { MESSAGE } = require('../utils/constants');

const OutputView = {
	printWelcome() {
		Console.print(MESSAGE['WELCOME']);
	},
};
module.exports = OutputView;
