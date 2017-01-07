var http = require('http');
var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var api = require('./routers/api');


var app = express();
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));

//routers

app.use('/', api);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

var server = http.createServer(app);


module.exports = server;