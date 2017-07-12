const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const routes = require("./routes/routes.js");
const connection = require("./routes/mongo-connection.js");
const data = require('./routes/data.js');

connection.connect()
	.then(function(response){
		// console.log("I'm booted and connected. Moving on...");
	})
	.catch(function(data){
		console.log("Cannot conntect to db. Exiting program: " + data);
		process.exit(1);
	});

// Make use of the prerenderer for search engines
app.use(require('prerender-node').set('prerenderToken', process.env.PRERENDER_TOKEN));

app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

// Router for static assets throughout site
app.use("/img", express.static(__dirname + "/assets/img"));
app.use("/js", express.static(__dirname + "/assets/js"));
app.use("/sass", express.static(__dirname + "/assets/sass"));
app.use("/views", express.static(__dirname + "/assets/views"));
app.use("/pages", express.static(__dirname + "/pages"));
app.use("/recaptcha", express.static(__dirname + "/node_modules/angular-recaptcha/release"));

// Data loading routes
app.use("/data", data)

// Main router
app.use("/", routes);

app.set('view engine', 'html');

app.listen(process.env.PORT || 3000);

console.log("App running on port " + (process.env.PORT ? process.env.PORT : 3000));