// Inside the connection.js file, setup the code to connect Node to MySQL.
var mysql = require("mysql");

var connection = mysql.createConnection({
    port: 8080,
    host: "localhost",
    user: "root",
    password: "password",
    database: "burger_db"
});
// var connection = mysql.createConnection(source.localhost);

connection.connect(function (err) {
    if (err) {
        console.error("error connecting: " + err.stack);
        return;
    }
    console.log("connected as id " + connection.threadId);
})

// Export the connection.
module.exports = connection;