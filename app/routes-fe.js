var express = require('express'),
    router = express.Router(),
    FE_TemplateController = require('./controllers/TemplateController');

router.get('/', FE_TemplateController.renderHomepage
    // function(req,res) {
    // res.render('homepage', { title: 'Hey', message: 'Hello there!'});
// }
);

// http://localhost:8888/page/57faa4d8b8b62ce780978cbc
router.get('/pageid/:page_id', FE_TemplateController.renderPage );
router.get('/pageslug/:slug', FE_TemplateController.renderPageBySlug );

module.exports = router;