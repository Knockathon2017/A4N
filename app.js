//required packages are called
var express = require('express'),
  app = express(),
  bodyParser = require('body-parser'),
  index = require("./src/server/index"),
  winston = require('winston'),
  path = require('path'),
  fs = require('fs');

// set the view engine to ejs
app.set('views', path.join(__dirname, 'src', 'server'));
app.set('view engine', 'ejs');

//create logs folder if not exist
if (!fs.existsSync('./logs')) {
  fs.mkdirSync('./logs');
}

//Winston logger settings
var logger = new(winston.Logger)({
  transports: [
    new(winston.transports.Console)(),
    new(winston.transports.File)({
      filename: './logs/log-' + Date.now() + '.log'
    })
  ]
});


//required static files called
app.use('/assets/js', express.static(path.join(__dirname, 'src', 'assets', 'js')));
app.use('/assets/css', express.static(path.join(__dirname, 'src', 'assets', 'css')));
app.use('/assets/images', express.static(path.join(__dirname, 'src', 'assets', 'images')));
app.use('/assets/fonts', express.static(path.join(__dirname, 'src', 'assets', 'fonts')));
app.use('/assets/font', express.static(path.join(__dirname, 'src', 'assets', 'font')));
app.use('/assets/app', express.static(path.join(__dirname, '..', 'Client')));
app.use('/assets/controllers', express.static(path.join(__dirname, '..', 'Client', 'Controllers')));
app.use('/assets/services', express.static(path.join(__dirname, '..', 'Client', 'Services')));
app.use('/assets/shared', express.static(path.join(__dirname, '..', 'Client', 'Shared')));
app.use('/assets/client', express.static(path.join(__dirname, '..', 'Client', 'Views')));

//required to interpret all the values in body of request
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

process.on('uncaughtException', (err) => {
  console.log("exception called");
  console.log(`Caught exception: ${err}`);
});

//routing
app.use('/', index);
app.use('/home', index);

//port number is assigned on which web server will work
app.listen(process.env.PORT || 9000);