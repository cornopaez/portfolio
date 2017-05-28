const express = require('express');
const pgp = require('pg-promise')();
// const db = pgp(process.env.DATABASE_URL ? process.env.DATABASE_URL : "postgres://paezdev:devenv005@localhost:5432/bank");
const app = express();
const express_enforces_ssl = require('express-enforces-ssl');
const controller = require("./controller/controller.js");

app.use(express.static(__dirname));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

// Check for Prod to enforce SSL
if (process.env.NODE_ENV) {
	app.enable('trust proxy');
	app.use(express_enforces_ssl());
	console.log("SSL Enforced")
} else {
	console.log("SSL *not* Enforced")
}

controller.set(app);

app.listen(process.env.PORT || 3000);

console.log("App running at http://localhost:" + (process.env.PORT ? process.env.PORT : 3000));