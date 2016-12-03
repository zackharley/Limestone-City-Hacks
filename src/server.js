const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes');

const app = express();

const port = process.env.PORT || 8000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(routes.index);

app.listen(port, () => {
	console.log(`Server running on ${port}`);
});