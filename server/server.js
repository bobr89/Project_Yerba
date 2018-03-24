const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const morgan = require("morgan");
const mongoose = require('mongoose');
//var config = require("./config");

var port = process.env.PORT || 2000;
var app = express();

app.use(morgan("dev"));
app.use(express.static(path.join(__dirname, '..', 'client')));
app.use(bodyParser.json());

mongoose.connect('mongodb://localhost/bookstore');
var db = mongoose.connection;

app.listen(port, function () {
    console.log("Now listening on port " + port);
});