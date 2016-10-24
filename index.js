var express = require('express'),
    server = require('./app/server')
    app = express(),
    mongoose = require('mongoose'), // DB
    // helmet = require('helmet'), // Security pluggin
    // compression = require('compression'), // Security pluggin
    // morgan = require('morgan'), // Reporting
    config = require('./app/config');





// mongoose.connect(config.db, function(err) {
//     if (err) throw err;
// });

server.start();

// app.use(morgan('dev')); // Set logging
// app.use(express.static('public')); // Public folder

// app.set('views', './app/views'); // Views path


// app.use(function(req, res, next){
//     res.status(404).render('404', {title: "Sorry, page not found"});
// });
//
// app.set('view engine', 'pug'); // Use pug engine for FE
//
//
// app.use('/api/', apiRoutes); // API Routes
// app.use('/', feRoutes); // FE Routes





