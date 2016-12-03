const Template = require('./../models/template');

module.exports = {
	
	getOne(req, res) {
		console.log(req.params.template);
		Template.find({_id: req.params.template}).then((error, data) => {
			res.send(error || data);
		});
	},

	getAll(req, res) {
		Template.find().then((error, data) => {
			res.send(error || data);
		});
	},

	add(req, res) {
		const template = new Template(req.body);

		template.save().then(data => {
			res.send(data);
		}).catch(error => {
			res.status(500).send(error);
		});
	}

}