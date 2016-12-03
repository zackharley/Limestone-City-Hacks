const User = require('./../models/user');

module.exports = {
	
	getOne(req, res) {
		console.log(req.params.user);
		User.find({_id: req.params.user}).then((error, data) => {
			res.send(error || data);
		});
	},

	getAll(req, res) {
		User.find().then((error, data) => {
			res.send(error || data);
		});
	},

	add(req, res) {
		const user = new User(req.body);

		user.save().then(data => {
			res.send(data);
		}).catch(error => {
			res.status(500).send(error);
		});
	}

}