var request = require('request');
var requests = {};
//Lets configure get request
requests.getRequest = function (req, url, callback) {
    try {
        request({
                url: url, //URL to hit
                method: 'Get',
                headers: {
                    'Cache-Control': 'no-cache'
                },
            },
            function (error, response, body) {
                if (error) {
                    console.log(error);
                } else {
                    callback(body);
                }
            });
    } catch (error) {
        console.log(error);
    }
}

module.exports = requests;