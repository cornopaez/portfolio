const express = require("express");
const validation = require("./vendor/reCaptcha-validation.js")
const router = express.Router();
const MongoClient = require('mongodb').MongoClient
const assert = require('assert');

const url = process.env.MONGODB_URI ? process.env.MONGODB_URI : "mongodb://portfolio:consumePaez007@127.0.0.1:27017/portfolio"

module.exports = router;

MongoClient.connect(url, function(err, db) {
 	assert.equal(null, err);
 	console.log("Connected successfully to database");

	router.use('*', function (req, res, next) {
		// Check for secure connection
		if (req.headers["x-forwarded-proto"] !== "https"){
			if (process.env.NODE_ENV) {
				// If in Prod, redirect
				console.log("Forcing HTTPS...")
				res.redirect('https://'+req.hostname+req.url);
			} else {
				// If not in production, move on
				return next();
			}
		} else {
			// If not headers, move on
			return next();
		}
	});

	router.post("/contact", function(req,res){
		// console.log(req.body);
		validation.validate(req)
		.then(function(body){
			// res.send(body);
			if (body.success = true) {
				// console.log(req);
				var urgent = req.body.urgent_message = "on" ? true : false;
				
				db.collection('contact').insertOne({
					"name": req.body.user_given_name,
					"email": req.body.user_email,
					"text": req.body.user_message,
					"urgent": urgent
				})
				.then(function(){
					console.log("Contact request written to database.")
					res.redirect("/success")
				})
				.catch(function(error){
					console.log("Contact request was not written to database. There was an error.")
					res.redirect("/error");
				});
			} else {
				res.redirect("/error");
			}
		});
	});

	router.get('*', function (req, res) {
		// Load landing page
		res.sendFile('index.html', {root: "./" });
	});
});

