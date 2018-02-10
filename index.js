'use strict';

var MongoClient = require('mongodb').MongoClient;

module.exports = function (uri, databaseName, opts) {
	if (typeof uri !== 'string') {
		throw new TypeError('Expected uri to be a string');
	}

	if (typeof databaseName !== 'string') {
		throw new TypeError('Expected databaseName to be a string');
	}

	opts = opts || {};
	var property = opts.property || 'db';
	delete opts.property;

	var connection;

	return function expressMongoDb(req, res, next) {
		if (!connection) {
			connection = MongoClient.connect(uri, opts);
		}

		connection
			.then(function (client) {
				req[property] = client.db(databaseName);
				next();
			})
			.catch(function (err) {
				connection = undefined;
				next(err);
			});
	};
};
