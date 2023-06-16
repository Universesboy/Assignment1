var express = require('express');
var router = express.Router();

router.get('/home', function(req, res, next) {
    res.render('hoem');
});

router.get('/about', function(req, res, next) {
    res.render('about');
});

router.get('/contact', function(req, res, next) {
    res.render('contact');
});

router.get('projects', function(req, res, next) {
    res.render('projects');
});

router.get('/services', function(req, res, next) {
    res.render('services');
});

