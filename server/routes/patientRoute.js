var express = require("express");
var client = require("../models/client");
var patientRoute = express.Router();

patientRoute.post("/add", function(req, res){
    var newClient = new client(req.body);
    console.log(newClient);
    newClient.save(function (err, trip){
        if(err) return res.status(401).send(err);
        res.send(trip);
    })
})

module.exports = patientRoute;