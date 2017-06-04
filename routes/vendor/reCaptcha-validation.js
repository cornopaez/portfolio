var request = require('request');

module.exports = {
	validate: validate
}

function validate(req) {
	return new Promise(function(resolve, reject) {
		// resolve(console.log(req.body));

		request.post(
			{
				url:'https://www.google.com/recaptcha/api/siteverify', 
				form: {
					// secret: process.env.RECAPTCHA_SECRET,
					secret: "6LecGCQUAAAAAPJhUV6943CVV6n7JHSNA-9l2ZBM",
					response: req.body["g-recaptcha-response"]
				}
			}, 
			function(err,httpResponse,body){
				if (err) reject(err);

				resolve(body);
			}
		);
	});
}