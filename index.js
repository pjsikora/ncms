var express = require('express'),
    app = express(),
    mongoose = require('mongoose'), // DB
    morgan = require('morgan'); // Reporting

// Routings
var apiRoutes = require('./app/routes-api'),
    feRoutes = require('./app/routes-fe');


mongoose.connect('mongodb://localhost/nitron', function(err) {
    if (err) throw err;
});

app.use(morgan('dev')); // Set logging
app.use(express.static('public')); // Public folder

app.set('views', './app/views'); // Views path
app.set('view engine', 'pug'); // Use pug engine for FE


app.use('/api/', apiRoutes); // API Routes
app.use('/', feRoutes); // FE Routes



app.listen(8888, function () {
    console.log('localhost:8888!');
});