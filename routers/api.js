var express = require('express');
var path = require('path');
var dbHandler = require('../database/dal');
var router = express.Router();

router.get('/', function(req, res){
    res.sendFile(path.join(__dirname, '../views', 'Enter new.html'));
});


router.get('/login', function(req, res){
    res.sendFile(path.join(__dirname, '../views', 'login new.html'));
});

router.get('/signup', function(req, res){
    res.sendFile(path.join(__dirname, '../views', 'signup new.html'));
});

router.get('/forgot-pass', function(req, res){
    res.sendFile(path.join(__dirname, '../views', 'forgot pass new.html'));
});

router.get('/home', function(req, res){
    res.sendFile(path.join(__dirname, '../views', 'Home new.html'));
});

router.get('/profile', function(req, res){
    res.sendFile(path.join(__dirname, '../views', 'profile new.html'));
});

router.get('/school reg', function(req, res){
    res.sendFile(path.join(__dirname, '../views','school registration new.html'));
});

router.get('/uploade photo', function(req, res){
    res.sendFile(path.join(__dirname, '../views', 'uploade photo new.html'));
});

router.get('/hello', function(req, res){
    res.send('<h1>Hello World</h1>');
});

module.exports = router;