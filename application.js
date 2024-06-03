"use strict";
// make express API end point
// make HTML to serve at the root
//make mongo db database code to access data base
// make a file to receive all function calls and manuplate the data 
Object.defineProperty(exports, "__esModule", { value: true });
var manplate_1 = require("./manplate");
var express = require('express');
var app = express();
var path = require('path');
var pathJoin = path.join(__dirname, '/public');
app.use(express.static(pathJoin));
app.use(express.json());
app.post('/details', function (req, res) {
    var receivedJSONdataOnServerSide = req.body.sendJSONdataToServerSide;
    (0, manplate_1.callingJSONdataOnServerSide)(receivedJSONdataOnServerSide);
});
app.listen(3000, function () {
    console.log("Listening!");
});
