// // Create an orm.js file inside config directory.

// // Import (require) connection.js into orm.js
// var connection = require("./connection.js");
// // In the orm.js file, these methods that will execute the necessary MySQL commands in the controllers. 
// // var tableName = "burgers";

// // Get all burgers
// var orm = {
//     // selectAll () 
//     selectAll: function (tableName) {
//         var queryString = "SELECT * FROM ?? ";
//         connection.query(queryString, [tableName], function (err, result) {
//             if (err) throw err;
//             console.log(result);
//         });


//         // insertOne()
//     }, insertOne: function (tableInput, colToSearch, valOfCol) {
//         var queryString = "SELECT * FROM ?? WHERE ?? = ?";
//         connection.query(queryString, [tableInput, colToSearch, valOfCol], function (err, result) {
//             for (i = 0; i < result.length; i++)
//                 if (err) throw err;
//             console.log(result);
//         });

//         // updateOne()
//     }, updateOne: function (table_name, column_name, new_value, tableTwo) {
//         var queryString =
//             "UPDATE `table_name` SET `column_name` = `new_value' [WHERE condition]";

//         connection.query(
//             queryString,
//             [tableOneCol, tableOneCol, tableOne, tableTwo, tableTwo, tableTwoForeignKey, tableOne, tableOneCol],
//             function (err, result) {
//                 if (err) throw err;
//                 console.log(result);
//             }
//         );
//     }
// };

// module.exports = orm;
