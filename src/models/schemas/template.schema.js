const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const templateSchema = new Schema({
	owner: {
		type: String,
		required: true
	},
	name: {
		type: String,
		required: true
	},
	assignments: [
		{
			name: {
				type: String,
				required: true
			},
			weight: {
				type: Number,
				required: true
			}
		}
	]

});

module.exports = templateSchema;