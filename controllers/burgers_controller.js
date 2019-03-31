// Inside the burgers_controller.js file, import the following:
// Express
var express = require("express");

// burger.js
var burger = require("../models/burger.js");

module.exports = function (app) {
    // GET route
    // Get all burgers
    // app.get("/api/all", function (req, res) {
    //   var dbQuery = "SELECT * FROM burgers";

    //   connection.query(dbQuery, function (err, result) {
    //     if (err) throw err;
    //     res.json(result);
    //   });
    // });
    app.get("/api/all-burgers", function (req, res) {
        // get all the burgers
        var dbQuery = "SELECT * FROM burgers";

        connection.query(dbQuery, function (err, result) {
            if (err) throw err;
            res.json(results);
            res.redirect('/');
        });
    });
    // POST route
    app.post("/api/burgers/update", function (req, res) {
        orm.updateBurger().then(req.body, function (results) {
            res.json(results);
            res.redirect('/');
        });
    });
    //DELETE route
    app.delete("/api/burgers/:id", function (req, res) {
        orm.deleteBurger().then(req.params.id, function (results) {
            res.json(results);
            res.redirect('/');
        });
    });
    //PUT route
    app.put("/api/burgers", function (req, res) {
        orm.updateBurger().then(req.body, function (results) {
            res.json(results);
            res.redirect('/');
        });
    });
}
    // app.get("/api/all-burgers", function (req, res) {
    //     // get all the burgers
    //     orm.getBurgers().then(function (results) {
    //         res.json(results);
    //         res.redirect('/');
    //     });
// });
