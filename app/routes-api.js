var express = require('express'),
    router = express.Router(),

    PageController = require('./controllers/PageController.js'),
    ContentController = require('./controllers/ContentController.js');

router.get('/pages/list', PageController.list);
router.get('/pages/create', PageController.create);
router.get('/pages/read', PageController.read);
router.get('/pages/update', PageController.update);
router.get('/pages/remove', PageController.remove);

router.get('/contents/list', ContentController.list);
router.get('/contents/create', ContentController.create);
router.get('/contents/read', ContentController.read);
router.get('/contents/update', ContentController.update);
router.get('/contents/remove', ContentController.remove);

module.exports = router;