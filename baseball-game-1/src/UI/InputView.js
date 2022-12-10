const { Console } = require('@woowacourse/mission-utils');

const InputView = {
	readBalls(callback) {
		Console.readLine('숫자를 입력해주세요 : ', (balls) => {
			callback.bind(this)(balls);
		});
	},
};

module.exports = InputView;
