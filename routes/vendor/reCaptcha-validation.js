// var request = require('request');
let axios = require('axios')

module.exports = {
	validate: validate
}

function validate(req) {
	return new Promise(function(resolve, reject) {

		axios.post(
			'https://www.google.com/recaptcha/api/siteverify',
			{
				secret: process.env.RECAPTCHA_SECRET,
				response: req.body["g-recaptcha-response"]
			})
			.then(data =>{
				resolve(data)
			})
			.catch(error =>{
				reject(error)
			})
		// request.post(
		// 	{
		// 		url:'https://www.google.com/recaptcha/api/siteverify', 
		// 		form: {
		// 			secret: process.env.RECAPTCHA_SECRET,
		// 			response: req.body["g-recaptcha-response"]
		// 		}
		// 	}, 
		// 	function(err,httpResponse,body){
		// 		if (err) reject(err);

		// 		resolve(body);
		// 	}
		// );
	});
}