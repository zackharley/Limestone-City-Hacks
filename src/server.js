const express = require('express');
const bodyParser = require('body-parser');
const exphbs = require('express-handlebars');
const path = require('path');
const morgan = require('morgan');
const routes = require('./routes/routing');
const cors = require('./controllers/cors');
const db = require('./config/db');

const app = express();

const port = process.env.PORT || 8000;

app.use(morgan('combined'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors);

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.use(express.static(path.join(__dirname, 'public')));

app.use(routes.index);

app.listen(port, () => {
	console.log(`Server running on ${port}`);
});
