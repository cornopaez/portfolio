module.exports = {
	set: set
}

function set(app){

	return new Promise(function(resolve, reject) {
		app.all('*', function (req, res) {
			if(req.headers["x-forwarded-proto"] === "https" || process.env.NODE_ENV){
				// OK, continue
				return next();
			};
			res.redirect('https://'+req.hostname+req.url);
		});


		app.get('/', function (req, res) {
		  res.send('index.html');
		})
	});
};