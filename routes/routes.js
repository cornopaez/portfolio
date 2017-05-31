const express = require("express");
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

router.get('*', function (req, res) {
	// Load landing page
	res.sendFile('index.html', {root: "./" });
});

