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
		this.#computerBalls = computer;
	}

	calculateScore(userBalls) {
		const baseballScore = { BALL: 0, STRIKE: 0 };
		for (let index = 0; index < 3; index++) {
			if (userBalls[index] === this.#computerBalls[index]) {
				baseballScore['STRIKE'] += 1;
			}
			if (
				userBalls[index] !== this.#computerBalls[index] &&
				this.#computerBalls.includes(userBalls[index])
			) {
				baseballScore['BALL'] += 1;
			}
		}
		console.log(baseballScore);
		return baseballScore;
	}
}

module.exports = Game;
