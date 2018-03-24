var express = require("express");
var claim = require("../models/claim");
var claimRoute = express.Router();


claimRoute.get("/:id", function(req, res){
    console.log(req.headers);
    var header = req.headers._id;
    claim.find({_id: header}, function(err, mountain){
        if(err) throw err;
        res.send(claim);
    })
})

module.exports = claimRoute;