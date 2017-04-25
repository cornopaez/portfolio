var express = require('express');
var pgp = require('pg-promise')();
var db = pgp(process.env.DATABASE_URL ? process.env.DATABASE_URL : "postgres://paezdev:devenv005@localhost:5432/bank");
var app = express();

app.use(express.static(__dirname));
app.set('views', __dirname);
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

app.get('/', function (req, res) {
  res.render('index.html');
})

app.listen(process.env.PORT || 3000);

console.log("App running at http://localhost:" + (process.env.PORT ? process.env.PORT : 3000));

// db.none('INSERT INTO users(first_name, last_name, username, email, password) VALUES($1, $2, $3, $4, $5)', ['John', 'Smith', 'jsmith', 'jsmith@something.com', 'smith005'])
//     .then(() => {
//         console.log("Success! Item inserted to db.");
//     })
//     .catch(error => {
//         console.log("Sad-face. There was an error. =>" + error);
//     });