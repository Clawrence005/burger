// Inside burger.js, import orm.js into burger.js
var orm = require("./../config/orm.js")
// Export at the end of the burger.js file.

// Select all burgers
var burger = {
    getBurgers: function () {
        orm.selectAll("burger_name");
        console.log("get burger");
    },

    // insert a burger into .
    insertBurger: function (id) {
        orm.insertOne("burger_name", "devoured");
        console.log("insert burger");
    },

    // update the burger
    updateBurger: function () {
        orm.updateOne("id", "burger_name", "devoured");
        console.log("update burger");
    },
    // delete the burger
    deleteBurger: function () {
        orm.updateOne("id");
        console.log("delete burger");
    },
};
// ??
module.exports = burger;
