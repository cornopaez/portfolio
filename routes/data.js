const express = require("express");
const router = express.Router();
const connection = require("./mongo-connection.js");

module.exports = router;

router.get('/main', function(req, res) {

	var db = connection.getDb();

	db.collection('main').find({}, {"_id":0}).next(function(err, docs){
		res.json(docs);
	});
});

router.get('/about', function(req, res) {

	var db = connection.getDb();

	db.collection('about').find({}, {"_id":0}).next(function(err, docs){
		res.json(docs);
	});
});

router.get('/projects', function(req, res) {

	var db = connection.getDb();

	db.collection('projects').find({}, {"_id":0}).toArray(function(err, docs){
		res.json(docs);
	});
});
