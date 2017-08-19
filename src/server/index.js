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
                var addressArray = [];
                for (var index = 0; index < jsonData.results.length; index++) {
                    var element = jsonData.results[index];
                    var location = element.geometry.location;
                    var address = element.formatted_address;
                    // addressArray.push(address);
                    var obj = {
                        address: address
                    };
                    addressArray.push(obj);
                    var place_name = element.name;
                }
                console.log("location");
                console.log(addressArray);
            }
        })
        res.render('index');
    } catch (error) {
        res.render("error");
    }
});

router.get('/callgoogleapi', function (req, res) {
    console.log("googleapi");
    try {
        var url = "https://maps.googleapis.com/maps/api/place/textsearch/json?query=new+delhi+city+point+of+interest&language=en&key=AIzaSyDVDNY_xUq0LKpNswJ_d4U5_r2u2hmd1m4";
        homeCtrl.getRequest(req, url, function (resp) {
            var jsonData = JSON.parse(resp);
            if (jsonData.results !== undefined) {
                var addressArray = [];
                for (var index = 0; index < jsonData.results.length; index++) {
                    var element = jsonData.results[index];
                    var location = element.geometry.location;
                    var address = element.formatted_address;
                    // addressArray.push(address);
                    var obj = {
                        address: address
                    };
                    addressArray.push(obj);
                    var place_name = element.name;
                }
                console.log("location");
                console.log(addressArray);
                res.json(addressArray);
            }
        })
    } catch (error) {
        res.render("error");
    }
});

// router.get('/myclocation', function (req, res) {
//     console.log("myclocation");
//     try {
//         var lat = 28.625267;
//         var long = 77.373419;
//         var options = {
//             provider: 'google',

//             // Optional depending on the providers 
//             httpAdapter: 'https', // Default 
//             apiKey: 'AIzaSyDVDNY_xUq0LKpNswJ_d4U5_r2u2hmd1m4', // for Mapquest, OpenCage, Google Premier 
//             formatter: null // 'gpx', 'string', ... 
//         };

//         var geocoder = NodeGeocoder(options);
//         geocoder.reverse({
//             lat: 28.625267,
//             lon: 77.373419
//         }, function (err, resp) {
//             console.log("sdsdffsdfsdfsdfsd");
//             console.log(resp);
//             var data = JSON.parse(resp)
//             res.json(data);
//         });
//     } catch (error) {
//         res.render("error");
//     }
// });



module.exports = router;