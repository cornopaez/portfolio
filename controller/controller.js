module.exports = {
	set: set
}

function set(app){

	return new Promise(function(resolve, reject) {
		app.get('/', function (req, res) {
		  res.send('index.html');
		})
	});
};