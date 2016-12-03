const mongoose = require('mongoose');

const username = process.env.MONGO_USERNAME;
const password = process.env.MONGO_PASSWORD;
const host = process.env.MONGO_HOST;
const database = process.env.MONGO_DATABASE;
const uri = `mongodb://${username}:${password}@${host}/${database}`;

mongoose.connect(uri);

mongoose.connection.on('connected', () => {
	console.log(`Mongoose connected on ${uri}`);
});

mongoose.connection.on('error', error => {
	console.error(error);
});

mongoose.connection.on('disconnected', () => {
	console.log('Mongoose connection terminated!');
});

process.on('SIGINT', () => {
	mongoose.connection.close(() => {
		console.log('Mongoose default connection disconnected through app termination');
    	process.exit(0);
	});
});
