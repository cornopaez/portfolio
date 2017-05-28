const express = require('express');
const pgp = require('pg-promise')();
// const db = pgp(process.env.DATABASE_URL ? process.env.DATABASE_URL : "postgres://paezdev:devenv005@localhost:5432/bank");
const app = express();
const controller = require("./controller/controller.js");

app.use(express.static(__dirname));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

controller.set(app);

app.listen(process.env.PORT || 3000);

console.log("App running at http://localhost:" + (process.env.PORT ? process.env.PORT : 3000));