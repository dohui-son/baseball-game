const MissionUtils = require('@woowacourse/mission-utils');

class Game {
	#computerBalls;
	constructor() {
		this.#computerBalls = [];
	}

	generateBalls() {
		const computer = [];
		while (computer.length < 3) {
			const number = MissionUtils.Random.pickNumberInRange(1, 9);
			if (!computer.includes(number)) {
				computer.push(number);
			}
		}
		this.#computerBalls = this.computer;
	}
}

module.exports = Game;
