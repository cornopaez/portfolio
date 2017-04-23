var express = require('express');
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
