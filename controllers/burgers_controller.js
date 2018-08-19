//bring in dependencies
var express = require("express");
var router = express.Router();
var burger = require("../models/burger.js");


//Routes are listed below with any necessary 
router.get("/", function (req, res) {
    burger.all(function(data) {
        var hbsObject = {
            burgers: data
        };
        console.log(hbsObject);
    });
});

//Export routes for server.js
module.export = router;