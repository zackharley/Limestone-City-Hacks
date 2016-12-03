const Grade = require('./../models/grade');

module.exports = {
	
	getOne(req, res) {
		console.log(req.params.grade);
		Grade.find({_id: req.params.grade}).then((error, data) => {
			res.send(error || data);
		});
	},

	getAll(req, res) {
		Grade.find().then((error, data) => {
			res.send(error || data);
		});
	},

	add(req, res) {
		const grade = new Grade(req.body);

		grade.save().then(data => {
			res.send(data);
		}).catch(error => {
			res.status(500).send(error);
		});
	}

}