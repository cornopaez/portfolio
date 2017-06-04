const express = require("express");
const validation = require("./vendor/reCaptcha-validation.js")
const router = express.Router();

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
		// If not headers, move on
		return next();
	}
});

router.post("/contact", function(req,res){
	// console.log(req.body);
	validation.validate(req)
	.then(function(body){
		res.send(body);
		// if (body.success = true) {
		// 	res.redirect("/success")
		// } else {
		// 	res.redirect("/error");
		// }
	});
});

router.get('*', function (req, res) {
	// Load landing page
	res.sendFile('index.html', {root: "./" });
});

