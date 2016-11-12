var ContentModel = require('../models/Content'),
    fs = require('fs'),
    path = require('path'),
    templatesFolder = __dirname+'/../views/templates',
    filesInDir = require('../common/list-files-in-dir'),
    readLine = require('../common/read-line');

var ContentTypeController = {
    list: function(req, res) {
        console.log(ContentModel.ND_Content__model);

        res.json({ContentModel : 'ND_Content__model'});
    }
}

module.exports = ContentTypeController;