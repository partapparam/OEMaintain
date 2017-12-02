'use strict';
var express = require('express');
var ejs = require('ejs');


var app = express();

app.engine('html', require('ejs').renderFile);
app.set('views', './main.html');
app.set('view engine', 'html');

app.use('*', function(req, res) {
    res.render('main.html');
});