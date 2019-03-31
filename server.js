var express = require("express");

var app = express();
var PORT = process.env.PORT || 8080;
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");
//middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//static directory for public
app.use(express.static("public"));

//routes
var routes = require("./controllers/burgers_controller.js");
app.use("/", routes);
app.listen(PORT, function () {
    console.log("server listening on : " + PORT);
})
var orm = require("./config/orm.js");

var connection = require("./config/connection");
