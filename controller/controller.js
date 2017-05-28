const express_enforces_ssl = require('express-enforces-ssl');

module.exports = {
	set: set
}

function set(app){

	// Check for Prod to enforce SSL
	if (process.env.NODE_ENV) {
		app.enable('trust proxy');
		app.use(express_enforces_ssl());
		console.log("SSL Enforced")
	} else {
		console.log("SSL *not* Enforced")
	}

	return new Promise(function(resolve, reject) {
		app.get('/', function (req, res) {
		  res.send('index.html');
		})
	});
};