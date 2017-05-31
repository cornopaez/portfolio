const express = require('express');
const app = express();
const routes = require("./routes/routes.js");

// routes.set(app);
// app.use(express.static("assets"));
app.use(require('prerender-node').set('prerenderToken', process.env.PRERENDER_TOKEN));

app.use("/img", express.static(__dirname + "/assets/img"));
app.use("/js", express.static(__dirname + "/assets/js"));
app.use("/sass", express.static(__dirname + "/assets/sass"));
app.use("/views", express.static(__dirname + "/assets/views"));
app.use("/pages", express.static(__dirname + "/pages"));

app.use("/", routes);

app.set('view engine', 'html');

app.listen(process.env.PORT || 3000);

console.log("App running on port " + (process.env.PORT ? process.env.PORT : 3000));