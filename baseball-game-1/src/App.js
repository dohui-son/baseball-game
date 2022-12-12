const OutputView = require('./UI/OutputView');
const InputView = require('./UI/InputView');
const runGenerator = require('./utils/Generator');
const Validator = require('./utils/Validator');
const Game = require('./components/Game');

class App {
	#game;

	play() {
		OutputView.printWelcome();
		this.#game = new Game();
		this.#initializeGame();
	}

	#initializeGame() {
		this.#game.generateBalls();
		this.#userBallHandler();
	}

	#userBallHandler() {
		InputView.readBalls.bind(this)(this.#generateUserBall);
	}

	#generateUserBall(balls) {
		Validator.validUserBalls(balls);
		const USER_BALLS = balls.split('').map((element) => {
			return parseInt(element);
		});
		return this.#handleScore(USER_BALLS);
	}

	#handleScore(userBall) {
		const GAME_RESULT = this.#game.calculateScore(userBall);
		OutputView.printScore(GAME_RESULT);
		return this.#handleGame(GAME_RESULT);
	}

	#handleGame(gameResult) {
		if (gameResult['STRIKE'] === 3) {
			return this.#queryRetry();
		}
		return this.#userBallHandler();
	}

	#queryRetry() {
		InputView.readRetry.bind(this)(this.#handleRetry);
	}

	#handleRetry(retry) {
		Validator.validRetry(retry);
		if (retry === '1') {
			return this.#initializeGame();
		}
		if (retry === '2') {
			return InputView.endUI();
		}
	}

	#errorHandler(errorType, callback) {
		try {
			callback();
		} catch (error) {
			OutputView.printError(errorType);
			return InputView.endUI();
			//this.#errorResponse(errorType);
		}
	}

	#errorResponse(errorType) {
		if (errorType === 'BALLS') {
			return InputView.readBalls.bind(this)(this.#generateUserBall);
		}
		if (errorType === 'RETRY') {
			return InputView.readRetry.bind(this)(this.#queryRetry);
		}
	}
}

const app = new App();
app.play();

module.exports = App;
