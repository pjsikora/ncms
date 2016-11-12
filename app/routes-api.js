var express = require('express'),
    router = express.Router(),

    UserController = require('./controllers/UserController.js'),
    UserGroupController = require('./controllers/UserGroupController.js'),
    PageController = require('./controllers/PageController.js'),
    ContentController = require('./controllers/ContentController.js');
    ContentTypeController = require('./controllers/ContentTypeController.js');

// router.get('/users/list', UserController.)
router.get('/users/create', UserController.create);
router.get('/users/read', UserController.read);
router.get('/users/update', UserController.update);
router.get('/users/remove', UserController.remove);

router.get('/pages/list', PageController.list);
router.get('/pages/create', PageController.create);
router.get('/pages/read', PageController.read);
router.get('/pages/update', PageController.update);
router.get('/pages/remove', PageController.remove);
router.get('/pages/templates', PageController.listTemplates);

router.get('/contents/list', ContentController.list);
router.get('/contents/create', ContentController.create);
router.get('/contents/read', ContentController.read);
router.get('/contents/update', ContentController.update);
router.get('/contents/remove', ContentController.remove);

router.get('/ctype/list', ContentTypeController.list);

module.exports = router;