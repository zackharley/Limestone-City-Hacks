const mongoose = require('mongoose');
const gradeSchema = require('./schemas/grade.schema');

const Grade = mongoose.model('Grade', gradeSchema);

module.exports = Grade;