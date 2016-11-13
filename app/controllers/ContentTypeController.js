var ContentModel = require('../models/ContentModel'),
    fs = require('fs'),
    path = require('path'),
    templatesFolder = __dirname+'/../views/templates',
    filesInDir = require('../common/list-files-in-dir'),
    readLine = require('../common/read-line');

var ContentTypeController = {
    list: function(req, res) {
        console.log(JSON.stringify(ContentModel.model));
        console.log(JSON.stringify(ContentModel.model));


        var dd = JSON.stringify(ContentModel);
        res.json({ding: dd});
    }
}

module.exports = ContentTypeController;