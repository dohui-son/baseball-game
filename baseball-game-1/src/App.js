const OutputView = require('./UI/OutputView');

class App {
	play() {
		OutputView.printWelcome();
	}
}

const app = new App();
app.play();

module.exports = App;
