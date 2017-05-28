module.exports = {
	set: set
}

function set(app){

	return new Promise(function(resolve, reject) {
		app.all('*', function (req, res) {
			// Check for secure connection
			if(req.headers["x-forwarded-proto"] === "https"){
				return next();
			};

			// Check for Prov env
			if (process.env.NODE_ENV === "Prod") {
				res.redirect('https://'+req.hostname+req.url);
			}
		});


		app.get('/', function (req, res) {
		  res.send('index.html');
		})
	});
};