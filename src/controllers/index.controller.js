module.exports = function indexController(req, res) {
HEAD:src/controllers/index.controller.js
	res.render('home');

	res.send('<h1>Server time</h1>');
}