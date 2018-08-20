//Import the ORM object to create database calls
var orm = require("../config/orm.js");

var burger = {
    all: function(callback) {
        //method inputs are column(s), table, and response callback
        orm.selectAll("*", "burgers", function(result) {
            callback(result);//this outputs the database result
        });
    },
    update: function(condition, newValue, callback) {
        //method inputs are column, table, condition, callback
        orm.updateOne("devoured", "burgers", newValue, condition, function(result) {
            callback(result); //this outputs the database result
        });
    }
}


//Export the burger database data to the burger controller
module.exports = burger;