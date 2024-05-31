"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var manplate_1 = require("./manplate");
var myFile = require('./manplate');
var express = require('express');
var app = express();
var path = require('path');
var pathjoin = path.join(__dirname, '/public');
app.use(express.static(pathjoin));
app.use(express.json());
//details
app.post('/details', function (req, res) {
    var myUserdata = req.body.data;
    (0, manplate_1.manuplateData)(req.body.data);
    console.log(" The User Data is :", myUserdata);
});
app.listen(3000, function () {
    console.log(" server is running!");
});
