const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const morgan = require("morgan");
const mongoose = require('mongoose');
const config = require("./config");

var port = process.env.PORT || 2000;
var app = express();

app.use(morgan("dev"));
app.use(express.static(path.join(__dirname, '..', 'client')));
app.use(bodyParser.json());

//app.use("/auth", require("./routes/authroutes"));
app.use("/patient", require("./routes/patientRoute"));
//app.use("/user",expressJwt({secret: config.secret}), require("./routes/user"));
//app.use("/trip", expressJwt({secret: config.secret}), require("./routes/trip"));

mongoose.connect(config.database, function (err) {
    if (err) throw err;
    console.log("Connected to database");
});

app.listen(port, function () {
    console.log("Now listening on port " + port);
});