var express = require('express');
var videos = require('./routes/videos');
var app = express();

app.use('/', videos);

module.exports = app;