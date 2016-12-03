const mongoose = require('mongoose');
const templateSchema = require('./schemas/template.schema');

const Template = mongoose.model('Template', templateSchema);

module.exports = Template;