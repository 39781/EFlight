var express = require('express');
var bodyParser = require('body-parser');
var routes = require('./routes');
var app = express();



app.use(bodyParser.urlencoded({ extended: false })) 
app.use(bodyParser.json());
app.use(routes);

var server = app.listen(3300, function () {   
	console.log("Bot started listening by port 3000")
})