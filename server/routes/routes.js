const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('index', {
        title: 'Home Page',
        bundle: './dist/home.bundle.js'
    });
});

router.get('/about', (req, res) => {
    res.render('index', {
        title: 'About Page',
        bundle: './dist/about.bundle.js'
    });
});

router.get('/credits', (req, res) => {
    res.render('index', {
        title: 'Credits Page',
        bundle: './dist/credits.bundle.js'
    });
});

router.get('/events', (req, res) => {
    res.render('index', {
        title: 'Events Page',
        bundle: './dist/events.bundle.js'
    });
});

router.get('/gallery', (req, res) => {
    res.render('index', {
        title: 'Gallery Page',
        bundle: './dist/gallery.bundle.js'
    });
});

router.get('/login', (req, res) => {
    res.render('index', {
        title: 'Login Page',
        bundle: './dist/login.bundle.js'
    });
});

router.get('/resources', (req, res) => {
    res.render('index', {
        title: 'Resources Page',
        bundle: './dist/resources.bundle.js'
    });
});

router.get('/signup', (req, res) => {
    res.render('index', {
        title: 'Signup Page',
        bundle: './dist/signup.bundle.js'
    });
});

router.get('/tips', (req, res) => {
    res.render('index', {
        title: 'Tips Page',
        bundle: './dist/tips.bundle.js'
    });
});

module.exports = router;
