var express = require("express");
var bodyParser = require("body-parser");
var port = 3000;
var app = express();

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: false }));


var routes = require("./controllers/catsController.js");
app.use("/", routes);
app.listen(port);