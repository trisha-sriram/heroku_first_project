var express = require('express');
//var parser = require('body-parser');
var app = express();
//var request = require('superagent')

// set the port of our application
// process.env.PORT lets the port be set by Heroku
var port = process.env.PORT || 8080;

// set the view engine to ejs
app.set('view engine', 'ejs');
//app.use(parser.urlencoded({ extended: true }))
//app.use(parser.json())

// make express look in the public directory for assets (css/js/img)
//app.use(express.static(__dirname + '/public'));

app.use(express.static('public'));

// set the home page route
app.get('/', function(req, res) {

    // ejs render automatically looks in the views folder
    res.render('index');
    //res.render('pages/app');
});

// og about page 
app.get('/about', function(req, res) {
    res.render('pages/about');
});

// ollie page 
app.get('/ollie', function(req, res) {
    res.render('pages/ollie');
});

//50-50s page
app.get('/50s50s', function(req, res) {
    res.render('pages/50s50s');
});

//Backside 180's page
app.get('/backside', function(req, res) {
    res.render('pages/backside');
});

//Boardslide page
app.get('/boardslide', function(req, res) {
    res.render('pages/boardslide');
});

//Frontside 180's page
app.get('/frontside', function(req, res) {
    res.render('pages/frontside');
});

//Heelflip page
app.get('/heelflip', function(req, res) {
    res.render('pages/heelflip');
});

//Kickflip page
app.get('/kickflip', function(req, res) {
    res.render('pages/kickflip');
});

//Pop Shove page
app.get('/popshove', function(req, res) {
    res.render('pages/popshove');
});

//Shuvit page
app.get('/shuvits', function(req, res) {
    res.render('pages/shuvits');
});

//Varial page
app.get('/varial', function(req, res) {
    res.render('pages/varial');
});

//Home page
app.get('/app', function(req, res) {
    res.render('pages/app');
});

app.listen(port, function() {
    console.log('Our app is running on http://localhost:' + port);
});