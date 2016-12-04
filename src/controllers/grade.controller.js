const Grade = require('./../models/grade');

module.exports = {
	
	getOne(req, res) {
		console.log(req.params.id);
		Grade.find({owner: req.params.id}).then((error, data) => {
			res.send(error || data);
		});
	},

	getAll(req, res) {
		Grade.find().then((error, data) => {
			res.send(error || data);
		});
	},

	add(req, res) {
		console.log('Got request');
		console.log(req.body);
		res.end();
		// const grade = new Grade(req.body);

		// grade.save().then(data => {
		// 	res.send(data);
		// }).catch(error => {
		// 	res.status(500).send(error);
		// });
	}

}