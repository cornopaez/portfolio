const express = require("express");
const validation = require("./vendor/reCaptcha-validation.js")
const router = express.Router();
const connection = require("./mongo-connection.js");

module.exports = router;

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
		// If already secure, move on
		return next();
	}
});

router.post("/contact", function(req,res){
	// Perform recaptcha validation
	validation.validate(req)
	.then(function(body){
		// Check for success
		if (body.success = true) {

			var db = connection.getDb();
			var urgent = req.body.urgent_message = "on" ? true : false;
			var query = {
				"name": req.body.user_given_name,
				"email": req.body.user_email,
				"text": req.body.user_message,
				"urgent": urgent
			};

			// Write to db
			db.collection('contact').insertOne(query)
			.then(function(){
				// Redirect if successful
				console.log("Contact request written to database.")
				res.redirect("/success")
			})
			.catch(function(error){
				// Redirect if error writing to db
				console.log("Contact request was not written to database. There was an error.")
				res.redirect("/error");
			});
		} else {
			// Redirect if error validating recaptcha
			console.log("reCaptcha validation failed. There was an error.")
			res.redirect("/error");
		}
	});
});

router.get('*', function (req, res) {
	// Load landing page
	res.sendFile('index.html', {root: "./" });
});

