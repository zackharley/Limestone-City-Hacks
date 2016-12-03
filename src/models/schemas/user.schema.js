const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
	userId: {
		type: String,
		required: true
	},
	templates: [
		{
			id: {
				type: String,
				required: true
			}
		}
	],
	grades: [
		{
			id: {
				type: String,
				required: true
			}
		}
	]
});

module.exports = userSchema;