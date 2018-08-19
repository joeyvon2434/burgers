//Bring in MySQL connection
var connnection = require("../config/connection.js")

//Create ORM (object relational mapping) object below with calls to the MySQL database
var orm = {
//route to get all of the burgers in the database
selectAll: function (row, table, callback) {
    var queryString = "SELECT " + row + " FROM " + table + ";";
    connection.query(queryString, function (err, result){
        if(err) {
            throw err;
        }
        callback(result);
    });
}

};


//Export the ORM for use in controller files
module.exports = orm;