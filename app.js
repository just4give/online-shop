var express = require('express');

var env = process.env.NODE_ENV = process.env.NODE_ENV || 'development';
var config = require('./server/config/config')[env];

var app = express();
require('./server/config/express')(app, config);

require('./server/config/routes')(app);


module.exports = app;
