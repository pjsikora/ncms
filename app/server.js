var express = require('express'),
    app = express(),
    mongoose = require('mongoose'), // DB
    helmet = require('helmet'), // Security pluggin
    compression = require('compression'), // Security pluggin
    morgan = require('morgan'), // Reporting
    config = require('./config');

// Routings
var apiRoutes = require('./routes-api'),
    feRoutes = require('./routes-fe');


console.log(config.db.mongodb);

mongoose.connect(config.db.mongodb, function(err) {
    if (err) throw err;
});




app.use(compression());
app.use(helmet.contentSecurityPolicy({
    directives: {
        defaultSrc: ["'self'", 'default.com'], // TODO needs to be setted correctly
        scriptSrc: ["'self'", "'unsafe-inline'"], // TODO needs to be setted correctly
        // styleSrc: ['style.com'], // TODO needs to be setted correctly
        imgSrc: ['img.com', 'data:'], // TODO needs to be setted correctly
        // sandbox: ['allow-forms', 'allow-scripts'], // TODO needs to be setted correctly
        reportUri: '/report-violation', // TODO needs to be setted correctly
        objectSrc: [] // An empty array allows nothing through
    },

    reportOnly: false,
    setAllHeaders: false,
    disableAndroid: false,
    browserSniff: true
}))



app.use(morgan('dev')); // Set logging
app.use(express.static('public')); // Public folder

app.set('views', './app/views'); // Views path

app.use(function(req, res, next){
    res.status(404).render('404', {title: "Sorry, page not found"});
});

app.set('view engine', 'pug'); // Use pug engine for FE


app.use('/api/', apiRoutes); // API Routes
app.use('/', feRoutes); // FE Routes



// app.listen(8888, function () {
//     console.log('localhost:8888!');
// });

function start() {
    var port = process.env.PORT || 8888;

    app.listen(port, function () {
        console.log('localhost:'+port);
    });
}

exports.start = start;