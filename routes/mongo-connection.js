const express = require("express");
const MongoClient = require('mongodb').MongoClient
const assert = require('assert');
var _db = null;

module.exports =  {
	getDb: getDb,
	connect: connect
}

const url = process.env.MONGODB_URI ? process.env.MONGODB_URI : process.env.MONGODB_LOCAL;

// Creates a connection to MongoDB and returns the db object.
function connect() {

	return new Promise(function(resolve, reject){
		MongoClient.connect(url, function(err, db) {
			if (err) reject(err);

			console.log("Connected successfully to database");
			_db = db;
			resolve(db);
		});
	});
};

// Gets the db object created by MongoClient.connect()
function getDb() {
	return _db;
}