const express = require("express");
const router = express.Router();
const connection = require("./mongo-connection.js");

module.exports = router;

router.get('/projects', function(req, res) {

	var db = connection.getDb();
	var query = {};
	var projection = {
		"_id": 0
	}
	var cursor = db.collection('projects').find(query, projection)

	cursor.toArray(function(err, docs){
		res.json(docs);
	});
});

router.get('/:name', function(req, res) {

	var db = connection.getDb();
	var name = req.params.name;
	var query = {};
	var projection = {
		"_id": 0
	}
	var cursor = db.collection('projects').find(query, projection)

	cursor.next(function(err, docs){
		if (docs === null || docs === undefined) {
			res.redirect("/error");
			console.log("Bad route. Sending you to error...");
		} else {
			res.json(docs);
		}
	});
});
