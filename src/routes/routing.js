const grade = require('./grade.route');
const index = require('./index.route');
const template = require('./template.route');
const user = require('./user.route');

// Add Passport routing - Zach

module.exports = {
	grade,
	index,
	template,
	user
}
