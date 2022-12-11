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
		this.#errorHandler('BALLS', () => {
			Validator.validUserBalls(balls);
			const USER_BALLS = balls.split('').map((element) => {
				return parseInt(element);
			});
			return this.#handleScore(USER_BALLS);
		});
	}

	#handleScore(userBall) {
		const GAME_RESULT = this.#game.calculateScore(userBall);
		OutputView.printScore(GAME_RESULT);
		//return this.#handleGame(GAME_RESULT);
	}

	#handleGame(gameResult) {
		console.log(gameResult);
		//if(3스트라이크){ handleRestry()}
	}

	#errorHandler(errorType, callback) {
		try {
			callback();
		} catch (error) {
			console.log(error);
			this.#errorResponse(errorType);
		}
	}

	#errorResponse(errorType) {
		console.log(errorType);
	}
}

const app = new App();
app.play();

module.exports = App;
