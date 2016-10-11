var express = require('express'),
    router = express.Router(),
    FE_TemplateController = require('./controllers/FE_TemplateController');

router.get('/', FE_TemplateController.renderHomepage
    // function(req,res) {
    // res.render('homepage', { title: 'Hey', message: 'Hello there!'});
// }
);

module.exports = router;