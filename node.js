const express = require('express');
const app = express();
const routes = require("./routes/routes.js");

routes.set(app);
app.use(express.static("./"));
app.set('view engine', 'html');

app.listen(process.env.PORT || 3000);

console.log("App running on port " + (process.env.PORT ? process.env.PORT : 3000));