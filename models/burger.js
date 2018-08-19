//Import the ORM object to create database calls
var orm = require("../config/orm.js");

var burger = {
    all: function(callback) {
        //method inputs are columns, table, and response callback
        orm.selectAll("*", "burgers", function(result) {
            callback(result);//this just outputs the database result
        });
    }
}


//Export the burger database data to the burger controller
module.exports = burger;