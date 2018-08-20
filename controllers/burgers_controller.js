//bring in dependencies
var express = require("express");
var router = express.Router();
var burger = require("../models/burger.js");


//Routes and rendering
////////////////////////////////////////////////

//get route for home
router.get("/", function (req, res) {
    burger.all(function (data) {
        var hbsObject = {
            burgers: data
        };
        console.log(hbsObject);

        //render items here
        res.render("index", hbsObject);
    });
});

//update the burger status to devoured
router.put("/api/burgers/:id", function (req, res) {
    var condition = "id = " + req.params.id;
    console.log('req: ' + req.body.eaten);
    var newValue = req.body.eaten;

   //check form of condition
   console.log("condition: " + condition);


    //check newValue form
    console.log('newvalue ' + newValue);


   
   burger.update(condition, newValue, function (result) {
        if (result.changedRows == 0) {
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });

});


//Export routes for server.js
module.exports = router;