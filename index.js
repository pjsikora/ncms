var express = require('express'),
    app = express(),
    // pug = require('pug'), // DB
    mongoose = require('mongoose'), // DB
    morgan = require('morgan'); // Reporting

var apiRoutes = require('./app/routes-api');
var feRoutes = require('./app/routes-fe');



mongoose.connect('mongodb://localhost/nitron', function(err) {
    if (err) throw err;
});

app.use(morgan('dev'));
app.use(express.static('public'));

app.set('views', './app/views');
app.set('view engine', 'pug');


app.use('/api/', apiRoutes); // API Routes
app.use('/', feRoutes); // FE Routes



app.listen(8888, function () {
    console.log('localhost:8888!');
});