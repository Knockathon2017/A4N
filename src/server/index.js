var express = require('express');
var async = require('async');
var path = require('path');
var fs = require('fs');
var homeCtrl = require("./homeController");
var router = express.Router();


router.get('/', function (req, res) {
    res.render('index');
});

module.exports = router;