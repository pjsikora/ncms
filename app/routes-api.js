var express = require('express'),
    router = express.Router(),
    PagesController = require('./controllers/pages.js'),
    ContentsController = require('./controllers/contents.js');

router.get('/pages/list', PagesController.list);
router.get('/pages/create', PagesController.create);
router.get('/pages/read', PagesController.read);
router.get('/pages/update', PagesController.update);
router.get('/pages/remove', PagesController.remove);

router.get('/contents/list', ContentsController.list);
router.get('/contents/create', ContentsController.create);
router.get('/contents/read', ContentsController.read);
router.get('/contents/update', ContentsController.update);
router.get('/contents/remove', ContentsController.remove);

module.exports = router;