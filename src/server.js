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

require('.config/passport')(passport);

app.set('views', __dirname + '/views');

app.use(morgan('combined'));
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors);

app.engine('handlebars', exphbs({defaultLayout: 'main', layoutsDir: __dirname + '/views/layouts'}));
app.set('view engine', 'handlebars');

app.use(express.static(path.join(__dirname, 'public')));

app.use(routes.grade);
app.use(routes.index);

app.use(routes.template);
app.use(routes.user);


// app.use(session({
// 		secret: 'limestone-city-hacks-secret',
// 		resave: true,
// 		saveUninitialized: true
// }));
// app.use(passport.initialize());
// app.use(passport.session());

// require('.routes/routing.js')(app, passport);


app.listen(port, () => {
	console.log(`Server running on ${port}`);
});
