const OutputView = require('./UI/OutputView');
const InputView = require('./UI/InputView');
const { runGenerator } = require('./utils/Generator');

class App {
	#game;

	play() {
		OutputView.printWelcome();
		runGenerator(this.#gameHandle.bind(this));
	}

	*#gameHandle() {
		//const game = new Game();

		while (true) {
			const userBalls = InputView.readBalls.bind(this)(this.#userBallHandler);
		}
	}

	// #userBallHandler(balls) {
	//   this.#errorHandler('BALLS',()=>{
	//     Validator.validUserBalls(balls)
	//   })
	// }

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
