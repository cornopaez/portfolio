const express = require('express');
const pgp = require('pg-promise')();
const app = express();
const controller = require("./controller/controller.js");

app.use(express.static(__dirname));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

controller.set(app);

app.listen(process.env.PORT || 3000);

console.log("App running at on port " + (process.env.PORT ? process.env.PORT : 3000));