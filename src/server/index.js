var express = require('express');
var async = require('async');
var path = require('path');
var fs = require('fs');
var homeCtrl = require("./homeController");
var router = express.Router();


router.get('/', function (req, res) {
    try {
        var url = "https://maps.googleapis.com/maps/api/place/textsearch/json?query=new+delhi+city+point+of+interest&language=en&key=AIzaSyDVDNY_xUq0LKpNswJ_d4U5_r2u2hmd1m4";
        homeCtrl.getRequest(req, url, function (resp) {
            var jsonData = JSON.parse(resp);
            if (jsonData.results !== undefined) {
                for (var index = 0; index < jsonData.results.length; index++) {
                    var element = jsonData.results[index];
                    var location = element.geometry.location;
                    console.log("location");
                    console.log(location);
                }
            }
        })
        res.render('index');
    } catch (error) {
        res.render("error");
    }
});

module.exports = router;